import { createContext, useState, ReactNode } from "react";

interface LoggerContextType {
  logs: string[];
  addLog: (log: string) => void;
  resetLog: () => void;
}

const LoggerContext = createContext<LoggerContextType | undefined>(undefined);

const LoggerProvider = ({ children }: { children: ReactNode }) => {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (log: string) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };
  const resetLog = () => {
    setLogs([]);
  };
  return (
    <LoggerContext.Provider value={{ logs, addLog, resetLog }}>
      {children}
    </LoggerContext.Provider>
  );
};

export { LoggerProvider, LoggerContext };
