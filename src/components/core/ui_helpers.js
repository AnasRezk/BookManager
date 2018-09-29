import React from "react";

// Define stateless component to render input and errors
export const renderInput = field => {
  return (
    <div
      className={field.meta.touched && field.meta.invalid ? "has-danger" : ""}
    >
      <input {...field.input} type={field.type} className="form-control" />
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
};

export const renderTextArea = field => {
  return (
    <div>
      <textarea {...field.input} type={field.type} className="form-control" />
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
    </div>
  );
};
