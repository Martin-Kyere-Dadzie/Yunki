// import {createStore, applyMiddleware } from "@reduxjs/toolkit";
// import SignIn from "../../Auth/SignIn";

// export const loggerMiddleware = store => next => action => {
//     if (action.shouldConfirm) {
//         if(next(SignIn)){
//             next(action);
//         }
//     } else {
//         next(action)
//     }
// }

// export const store = createStore(
//     applyMiddleware(loggerMiddleware)
// );