import React from "react";
import { useAppContext } from "../context/appContext_76";

const Alert_76 = () => {
    const { alertText, alertType } = useAppContext();
    return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert_76;
