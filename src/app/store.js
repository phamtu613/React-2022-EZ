import counterReducer from "../features/Counter/counterSlice"; // import default
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  count: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;
