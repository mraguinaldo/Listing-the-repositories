import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalSTyle } from "../Style/global";
import { App } from "./App";
import { RepoList } from "./Components/RepoList";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalSTyle />
    <RepoList />
  </>
);
