"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useRef } from "react";

export default function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
