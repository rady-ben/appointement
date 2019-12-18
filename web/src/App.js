import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./configureStore";
import Auth from "./auth/component";

function App() {
  return (
    <ReduxProvider store={store}>
      <Auth />
    </ReduxProvider>
  );
}

export default App;
