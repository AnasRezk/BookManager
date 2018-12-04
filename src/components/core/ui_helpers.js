import React from 'react';

// Define stateless component to render input and errors
export const renderInput = ({
    input,
    placeholder,
    type,
    meta: { touched, error, invalid }
}) => {
    return (
        <div className={touched && invalid ? 'has-error' : ''}>
            <input
            {...input}
            type={type}
            placeholder={placeholder}
            className="form-control"/>
            {touched && error && <span className="error">{error}</span>}
        </div>
    );
};

export const renderTextArea = ({
    input,
    placeholder,
    type,
    meta: { touched, error, invalid }
}) => {
    return (
        <div className={touched && invalid ? 'has-error' : ''}>
            <textarea
            {...input}
            type={type}
            placeholder={placeholder}
            className="form-control"/>
            {touched && error && <span className="error">{error}</span>}
        </div>
    );
};

export const renderSelect = (
    { input, placeholder, meta: { touched, error, invalid } },
    data,
    key,
    value
) => {
    return (
        <div className={touched && invalid ? 'has-error' : ''}>
            <select {...input} className="form-control">
                <option value="">{placeholder}</option>
                {data.map(item => (
                    <option value={item[key]} key={item[key]}>
                        {item[value]}
                    </option>
                ))}
            </select>
            {touched && error && <span className="error">{error}</span>}
        </div>
    );
};
