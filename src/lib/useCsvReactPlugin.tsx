import useCsvPlugin from "@usecsv/js";
import React, { ReactNode } from "react";

type UserObject = {
  readonly userId: string;
};

const UseCsvButton = ({
  children,
  importerKey,
  user,
  metadata,
  render,
}: {
  readonly children: string | undefined | null;
  readonly importerKey: string;
  readonly user: UserObject;
  readonly metadata: Record<string, string | number> | undefined;
  readonly render: ((onClick: () => Promise<any>) => ReactNode) | undefined | null;
}) => {
  return (
    <>
      {!!children && (
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
      )}
      {!!render && <>{render(() => useCsvPlugin({ importerKey, user, metadata }))}</>}
    </>
  );
};

export default UseCsvButton;
