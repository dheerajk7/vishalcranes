import React from "react";

type PrimaryButtonTypes = {
  children: React.ReactNode;
  id: string;
};

function PrimaryButton({ children, id }: PrimaryButtonTypes) {
  return (
    <button
      type="button"
      className="inline px-10 py-2 rounded bg-purple text-white text-base"
      id={id}
      aria-expanded="false"
      aria-haspopup="true"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
