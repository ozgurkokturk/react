import React from "react";

const TextInput = ({name, label, onChange, placeHolder, value, error, type}) => {

  let wrapperClass = "mb-3";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
        <input
          name={name}
          type={type}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">Bu alan boş bırakılamaz.</div>}
    </div>
  );
};

export default TextInput;
