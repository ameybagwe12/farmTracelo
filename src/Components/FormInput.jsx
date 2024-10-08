import { useState } from "react";
import "../styles/formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, placeholderColor, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        style={{
          fontFamily: "Pixelify Sans",
          placeholderColor: placeholderColor,
        }}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
