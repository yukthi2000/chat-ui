// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const functions = require("firebase-functions/v2/https");
// const admin = require("firebase-admin");

// admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// exports.generateText  = functions.https.onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});

//     if (request.method !== "POST") {
//         return response
//             .status(400)
//             .setDefaultEncoding({message: "only post method is supported."});
//     }

//     const { prompt, id } = request.body;

//     if (!prompt) {
//         return response.status(400).send({message: "'prompt' arg is required" })
//     }
//      response.send("Hello from Firebase!");
// });




const { Configuration, OpenAI } = require("openai");
const functions = require('firebase-functions');
const admin=require("firebase-admin")
require('dotenv').config()
const cors = require("cors")({ origin: true });

admin.initializeApp();

const db=admin.firestore();


const openai = new OpenAI({
  apiKey: 'pk-OqxpwCQsHqjhzYgpTWxgxEcCieZilLaqUVhSGyZOssJcuTSJ', // This is the default and can be omitted
  baseURL:"https://api.pawan.krd/pai-001/v1/"
});


const collectionTypes={histories:"histories"}

const generateChatGPTResponse = async (prompt, parentMessageId) => {
  console.log(parentMessageId);
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: parentMessageId ? [{ role: "system", content: parentMessageId }, { role: "user", content: prompt }] : [{ role: "user", content: prompt }],
    });
    const message = res.choices[0].message;
    return { text: message.content, id: res.id };
  };
  
  // const getDocRef = async (id) => {
  //   const docRef = db.collection(collectionTypes.histories).doc(id);
  //   return docRef;
  // };
  
  const getDocRef = async (id) => {
    console.log("Collection:", collectionTypes.histories);
    console.log("ID:", id);
    const docRef = db.collection(collectionTypes.histories).doc(id);
    console.log("DocRef:", docRef.path);
    return docRef;
  };

  
  exports.generateText = functions.https.onRequest(async (request, response) => {
    cors(request, response, async () => {
      if (request.method === "DELETE") {
        const { id } = request.query;
  
        if (!id) {
          return response.status(400).send({ message: "'id' is required" });
        }
  
        const docRef = await getDocRef(id);
  
        try {
          await docRef.delete();
          return response.send({ message: "record is deleted successfully" });
        } catch (err) {
          console.log("err ", err);
          response.status(500).send({ err: "Internal error." });
        }
      }
  
      if (request.method !== "POST") {
        return response
          .status(400)
          .send({ message: "only post method is supported" });
      }
  
      const {
        prompt,
        conversationId: defaultConversationid,
        previousMessageId,
      } = request.body;
  
      if (!prompt) {
        return response.status(400).send({ message: "'prompt' arg is required" });
      }
  
      let conversationId = defaultConversationid;
      let messageId, text;
      console.log(conversationId, messageId , text);

  
      try {
        const gptResponse = await generateChatGPTResponse(prompt, previousMessageId);
        conversationId = conversationId || gptResponse.id;
        messageId = gptResponse.id;
        text = gptResponse.text;
      } catch (err) {}

      console.log(conversationId, messageId , text);
  
      let responses = [];
  
      const docRef = await getDocRef(conversationId);
  
      const doc = await docRef.get();
      if (!doc.exists) {
        responses = [{ prompt, text, messageId }];
        await docRef.set({ responses });
      } else {
        const data = doc.data();
        responses = [...(data?.responses || []), { prompt, text, messageId }];
        await docRef.update({ responses });
      }
  
      try {
        return response.send({ prompt, text, messageId, conversationId });
      } catch (err) {
        console.log("err ", err);
        response.status(500).send({ err: "Internal error." });
      }
    });
  });
  
  exports.getConversation = functions.https.onRequest(
    async (request, response) => {
      cors(request, response, async () => {
        if (request.method !== "GET") {
          return response
            .status(400)
            .send({ message: "only get method is supported" });
        }
  
        const { conversationId } = request.query;
  
        if (!conversationId) {
          return response
            .status(400)
            .send({ message: "'conversationId' arg is required" });
        }
  
        const docRef = await getDocRef(conversationId);
  
        const doc = await docRef.get();
  
        const data = doc.data();
  
        try {
          return response.send({ responses: data?.responses || [] });
        } catch (err) {
          console.log("err ", err);
          response.status(500).send({ err: "Internal error." });
        }
      });
    }
  );
  
  exports.getAllConversation = functions.https.onRequest(
    async (request, response) => {
      cors(request, response, async () => {
        if (request.method !== "GET") {
          return response
            .status(400)
            .send({ message: "only get method is supported" });
        }
  
        const collectionRef = db.collection(collectionTypes.histories);
  
        const documentRefs = await collectionRef.listDocuments();
  
        const documentPromises = documentRefs.map((docRef) => docRef.get());
        const documents = await Promise.all(documentPromises);
  
        const history = documents.map((doc) => {
          const response = doc.data()?.responses;
  
          // first Prompt
          const firstResponse = response?.[0];
  
          return { conversationId: doc.id, prompt: firstResponse?.prompt || undefined };
        });
  
        try {
          return response.send({ history });
        } catch (err) {
          console.log("err ", err);
          response.status(500).send({ err: "Internal error." });
        }
      });
    }
  );