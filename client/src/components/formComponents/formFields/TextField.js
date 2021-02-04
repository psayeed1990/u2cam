const TextField = ({
  initFocus,
  placeholder,
  maxChar,
  minChar,
  isRequired,
  fieldName,
  register,
  errors,
  setError,
  clearErrors,
  getValues,
}) => {
  return (
    <div className="form-group">
      <input
        ref={register({
          required: isRequired ? `${fieldName} is required` : false,
          maxLength: {
            value: maxChar,
            message: `Max ${maxChar} character`,
          },
          minLength: {
            value: minChar,
            message: `Min ${minChar} character`,
          },
        })}
        id={fieldName}
        autoFocus={initFocus}
        name={fieldName}
        type="text"
        placeholder={placeholder}
        autoComplete="new-password"
      />
      <label htmlFor={fieldName}>{placeholder}</label>
      <span className={`${errors[fieldName] ? "error" : ""}`}>
        {errors[fieldName] && errors[fieldName].message}
      </span>
    </div>
  );
};

export default TextField;
