import React from "react";

type PrimaryButtonTypes = {
  children: React.ReactNode;
  id: string;
};

function PrimaryButton({ children, id }: PrimaryButtonTypes) {
  return (
    <a
      type="button"
      className="inline-block px-10 py-2 rounded bg-purple text-white text-base"
      id={id}
      aria-expanded="false"
      aria-haspopup="true"
      href={id}
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
