"use client";
import { useState } from "react";
import { VisibilityType } from "./enum";

export default function Button(props: { visibilityType: VisibilityType }) {
  const { visibilityType } = props;

  let [visibility, setVisibility] = useState<VisibilityType>(visibilityType);

  const buttonMethod = () => {
    console.log("button clicked!");
  };

  return (
    <>
      {visibility !== VisibilityType.hidden && (
        <button
          onClick={buttonMethod}
          disabled={visibility === VisibilityType.disabled ? true : false}
        >
          Click me!
        </button>
      )}
    </>
  );
}
