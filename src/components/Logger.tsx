import { useEffect, useRef } from "react";
import { useLogger } from "../contexts/useLogger";

const Logger = () => {
  const { logs, resetLog } = useLogger();
  const lastLogRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (lastLogRef.current) {
      lastLogRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [logs]);

  return (
    <div className="log">
      <h3>
        Logs{" "}
        <button style={{ marginLeft: "10px" }} onClick={() => resetLog()}>
          Clear
        </button>
      </h3>
      <div className="logger" style={{ maxHeight: "300px", overflowY: "auto" }}>
        <ul>
          {logs.map((log: string, index: number) => (
            <li key={index} ref={index === logs.length - 1 ? lastLogRef : null}>
              {log}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Logger;
