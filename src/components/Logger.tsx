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
      {/* <div className="parent"> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1em",
        }}
        className="mobileLogs"
      >
        <h3>Logs</h3>
        <button className="clearBtn" onClick={() => resetLog()}>
          Clear
        </button>
      </div>

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
