import useCsvPlugin from "@usecsv/js";
import React, { FC, ReactNode } from "react";

type UserObject = {
  readonly userId: string;
};
type UseCsvButtonTypes = {
  readonly importerKey: string;
  readonly user?: UserObject | null;
  readonly metadata: Record<string, string | number> | undefined;
  readonly render?: ((onClick: () => Promise<any>) => ReactNode) | undefined | null;
};

const UseCsvButton: FC<UseCsvButtonTypes> = ({ children, importerKey, user, metadata, render }) => {
  return (
    <>
      {render ? (
        <>{render(() => useCsvPlugin({ importerKey, user, metadata }))}</>
      ) : (
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
    </>
  );
};

export default UseCsvButton;
