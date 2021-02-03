const PasswordField = ({initFocus, maxChar, minChar, isRequired, fieldName, register, errors, setError, clearErrors, getValues })=>{
    return(
        <div className="form-group">
                            
            <input ref={register({
                required: isRequired ? `${fieldName} is required` : false,
                maxLength: {
                    value: maxChar,
                    message: `Max ${maxChar} character`,
                },
                minLength: {
                    value: minChar,
                    message: `Min ${minChar} character`,
                }
            })} id={fieldName} autoFocus={initFocus} name={fieldName} type="password" placeholder={fieldName} autoComplete="new-password" />
            <label htmlFor={fieldName}>{fieldName}</label>
            <span className={`${errors[fieldName] ? 'error': ''}`}>{errors[fieldName]?.message}</span>
        </div>
    )
}

export default PasswordField;