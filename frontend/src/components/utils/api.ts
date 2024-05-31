import axios from "axios";

export const chatApi = async (data: {
  conversationId: string | undefined;
  previousMessageId: string | undefined;
  prompt: string;
}) => {

  // http://127.0.0.1:5001/chat-ui-ed79d/us-central1/getAllConversation
  const res = await axios.post(
    "http://127.0.0.1:5001/chat-ui-ed79d/us-central1/generateText",
    { ...data }
  );

  return res.data;
};

export const loadAllConversation = async () => {
  const res = await axios.get(
    "http://127.0.0.1:5001/chat-ui-ed79d/us-central1/getAllConversation"
  );

  return res.data;
};

export const getConversationById = async (id: string) => {
  const res = await axios.get(
    "http://127.0.0.1:5001/chat-ui-ed79d/us-central1/getConversation?conversationId=" +
      id
  );

  return res.data;
};