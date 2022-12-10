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
    { id: 1, name: "Lyana", photoUrl: "lyana.jpg" },
    { id: 2, name: "Marina", photoUrl: "marina.png" },
    { id: 3, name: "Tima", photoUrl: "tima.jpg" },
    { id: 4, name: "Artem", photoUrl: "artem.png" },
  ],
  messagesData: [
    { id: 1, message: "Hello!" },
    { id: 2, message: "Whats'up bro" },
    { id: 3, message: "What have you been up to?" },
    { id: 4, message: "It's a long story" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 5, message: state.newMessageBody },
        ],
        newMessageBody: "",
      };
    }
    default:
      return state;
  }
};
