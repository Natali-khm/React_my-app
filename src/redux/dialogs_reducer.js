const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.body;
      return state;
    }
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      state.messagesData.push(newMessage);
      state.newMessageBody = "";
      return state;
    }
    default:
      return state;
  }
};