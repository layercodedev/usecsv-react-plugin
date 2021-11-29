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
      <UseCsvButton importerKey="your-importer-key" user={{ userId: "12345" }} metadata={{ anotherId: "12345" }}>
        Import Data
      </UseCsvButton>
    </div>
  </React.StrictMode>,
  document.getElementById("root"),
);
