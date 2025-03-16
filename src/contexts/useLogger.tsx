import { useContext } from "react";
import { LoggerContext } from "./LoggerContext";

export const useLogger = () => {
  const context = useContext(LoggerContext);
  if (!context) {
    throw new Error("useLogger must be used within a LoggerProvider");
  }
  return context;
};
