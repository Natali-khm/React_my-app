const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

const initialState = {
  dialogsData: [
    { id: 1, name: "Lyana", avatar: "lyana.jpg" },
    { id: 2, name: "Marina", avatar: "marina.png" },
    { id: 3, name: "Tima", avatar: "tima.jpg" },
    { id: 4, name: "Artem", avatar: "artem.png" },
  ],
  messagesData: [
    { id: 1, message: "Good luck!" },
    { id: 2, message: "See you soon" },
    { id: 3, message: "Whats'up bro" },
    { id: 4, message: "WTF" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    default:
      return state;
  }
};
