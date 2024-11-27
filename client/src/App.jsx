import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import MyContext from "./data/globalcontext";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUserName] = useState("No Identifier");

  return (
    <>
      <MyContext.Provider value={{ username, setUserName }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
