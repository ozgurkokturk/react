import React from "react";

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={onChange} className="form-select">
                <option value="">
                    {defaultOption}
                </option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    )
                })}
            </select>
            {error && <div className="alert alert-danger">Boş bırakılamaz.</div>}
        </div>
    );

};

export default SelectInput;