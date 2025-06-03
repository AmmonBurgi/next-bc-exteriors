"use client";

import { createContext, useContext } from "react";

const AppDataContext = createContext();

export function useAppData() {
  return useContext(AppDataContext);
}

export default function AppDataProvider({ products, inspirations, categories, children }) {
  const value = { products, inspirations, categories };
  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  );
}
