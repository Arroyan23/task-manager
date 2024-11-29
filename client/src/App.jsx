import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { MyProvider } from "./data/globalcontext";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUserName] = useState("No Identifier");

  return (
    <>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </>
  );
}

export default App;
