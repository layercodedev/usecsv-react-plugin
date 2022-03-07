import React from "react";
import ReactDOM from "react-dom";

import UseCsvButton from "../index";

ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      }}
    >
      <UseCsvButton
        importerKey="e1d9bc08-f712-45b2-969e-9ae0bb3b449f"
        user={{ userId: "12345" }}
        metadata={{ anotherId: "12345" }}
        onData={(d) => {
          console.log("data", d);
        }}
      >
        Import Data
      </UseCsvButton>
    </div>
  </React.StrictMode>,
  document.getElementById("root"),
);
