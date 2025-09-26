"use client";
import { useState, useEffect } from "react";

export default function Form() {
  const [formComplete, setFormComplete] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const areInputsFilled =
      textInput.trim() !== "" && passwordInput.trim() !== "";
    setFormComplete(areInputsFilled);
  }, [textInput, passwordInput]);

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        data-cy="name-input"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        data-cy="password-input"
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button data-cy="submit-button" disabled={!formComplete}>
        Submit
      </button>
    </form>
  );
}
