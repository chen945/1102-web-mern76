import React, { useReducer, useContext } from "react";
import reducer_76 from "./reducer_76";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./action_76";
const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: "",
    alterType: "",
};

const AppContext_76 = React.createContext();

const AppProvider_76 = ({ children }) => {
    const [State, dispatch] = useReducer(reducer_76, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };

    return (
        <AppContext_76.Provider value={{ ...State, displayAlert, clearAlert }}>
            {children}
        </AppContext_76.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext_76);
};

export { AppProvider_76, initialState, useAppContext };
