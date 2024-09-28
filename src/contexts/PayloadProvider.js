import React, { createContext, useContext, useState } from "react";

// 創建 Context
const PayloadContext = createContext();

export const usePayload = () => {
    return useContext(PayloadContext);
};

export const PayloadProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const addPayload = (newPayload) => {
        setData((prevData) => [...prevData, newPayload]);
    };

    return (
        <PayloadContext.Provider value={{ data, addPayload }}>
            {children}
        </PayloadContext.Provider>
    );
};
