import useCsvPlugin from "@usecsv/js";
import React from "react";

type UserObject = {
  readonly userId: string;
};

const UseCsvButton = ({
  children,
  importerKey,
  user,
  metadata,
}: {
  readonly children: string;
  readonly importerKey: string;
  readonly user: UserObject;
  readonly metadata: Record<string, string | number>;
}) => {
  return (
    <button
      type="button"
      id="usecsv-button"
      style={{
        backgroundColor: "#FFF",
        color: "#000",
        border: "2px solid #000",
        borderRadius: "6px",
        padding: "10px 15px",
        textAlign: "center",
        fontSize: "16px",
        cursor: "pointer",
      }}
      onClick={() => useCsvPlugin({ importerKey, user, metadata })}
    >
      {children}
    </button>
  );
};

export default UseCsvButton;
