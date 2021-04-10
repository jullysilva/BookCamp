import { TOKEN } from "./actions";

const initialState = { 
  token: null
};

function commonRoot(state = initialState, action) {
  switch (action.type) {
    case TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

export default commonRoot;