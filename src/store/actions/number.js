export function numberAdd2(dispatch) {
  dispatch({ type: "number_add2" });
}
export function numberMulti7(dispatch) {
  dispatch({ type: "number_multi7" });
}
export function numberDiv25(dispatch) {
  dispatch({ type: "number_div25" });
}
export function numberInt(dispatch) {
  dispatch({ type: "number_int" });
}
export function numberAddN(dispatch, number) {
  dispatch({ type: "number_addN", payload: number });
}
