// import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [
      {id: 1, title :"title 1", content: "this is article 1" },
      {id: 2, title :"title 2", content: "this is article 2" },
      {id: 3, title :"title 3", content: "this is article 3" }
  ]
};

function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     return Object.assign({}, state, {
//       articles: state.articles.concat(action.payload)
//     });
//   }
  return state;
}

export default rootReducer;