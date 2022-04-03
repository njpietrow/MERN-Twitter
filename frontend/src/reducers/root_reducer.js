import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import sessionApiReducer from "./session_api_reducer";
import TweetsReducer from "./tweets_reducer";

const RootReducer = combineReducers({
  // session: sessionReducer,
  session: sessionApiReducer,
  errors: errorsReducer,
  tweets: TweetsReducer,
});

export default RootReducer;