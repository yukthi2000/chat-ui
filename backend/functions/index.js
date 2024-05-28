/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.generateText  = functions.https.onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});

    if (request.method !== "POST") {
        return response
            .status(400)
            .setDefaultEncoding({message: "only post method is supported."});
    }

    const { prompt, id } = request.body;

    if (!prompt) {
        return response.status(400).send({message: "'prompt' arg is required" })
    }
     response.send("Hello from Firebase!");
});
