import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App_76 from "./App_76";
import "normalize.css";
import { AppProvider_76 } from "./context/appContext_76";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider_76>
            <App_76 />
        </AppProvider_76>
    </React.StrictMode>,
    document.getElementById("root")
);
