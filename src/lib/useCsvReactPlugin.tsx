import useCsvPlugin from "@usecsv/js";
import React, { FC, ReactNode } from "react";

type pluginParamas = Parameters<typeof useCsvPlugin>[0];
type UseCsvButtonTypes = pluginParamas & {
  readonly render?: ((onClick: () => Promise<any>) => ReactNode) | undefined | null;
};

const UseCsvButton: FC<UseCsvButtonTypes> = ({ children, render, ...parmas }) => {
  return (
    <>
      {render ? (
        <>{render(() => useCsvPlugin(parmas))}</>
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
          onClick={() => useCsvPlugin(parmas)}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default UseCsvButton;
