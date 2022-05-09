import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import BaseRouter2 from "./router/Public/Router";
import BaseRouter from "./router/Router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BaseRouter />
      <BaseRouter2 />
    </BrowserRouter>
  );
};

export default App;
