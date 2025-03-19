import React from "react";
import { Controller, FieldError, Control } from "react-hook-form";

interface InputProps {
  name: string;
  label: string;
  type: string;
  control: Control<any>;
  error?: string | undefined;
  placeholder?: string;
  required?: boolean;
  classes?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  control,
  error,
  placeholder,
  classes,
  required = false,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="form-group">
          <label htmlFor={`input-${name}`}>
            {label} {required && <span className="text-danger">*</span>}
          </label>
          <input
            {...field}
            type={type}
            className={`form-control ${error ? "is-invalid" : ""} ${classes}`}
            id={`input-${name}`}
            placeholder={placeholder}
            {...props}
          />
          {error && <small className="text-danger">{error}</small>}
        </div>
      )}
    />
  );
};

export default Input;
