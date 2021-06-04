import { numberReducer } from "./numberReducer";
import { userReducer } from "./userReducer";
export default function reducer(state, action) {
  let newState = numberReducer(state, action);
  return userReducer(newState, action);
}
