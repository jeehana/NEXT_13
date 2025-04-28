import React, { createContext, useState, useEffect } from "react";

// 1. createContext 함수를 사용해, Context 생성
export const CartContext = createContext();

// 2. Provider 컴포넌트 정의
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
