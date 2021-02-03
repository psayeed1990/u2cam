const EmailField = ({initFocus, maxChar, minChar, isRequired, fieldName, register, errors, setError, clearErrors, getValues })=>{
    return(
        <div className="form-group">
                            
            <input ref={register({
                required:  isRequired ? `${fieldName} is required` : false,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address format',
                },
                
            })} id={fieldName} autoFocus={initFocus} name={fieldName} type="text" placeholder={fieldName} autoComplete="new-password" />
            <label htmlFor={fieldName}>{fieldName}</label>
            <span className={`${errors[fieldName] ? 'error': ''}`}>{errors[fieldName]?.message}</span>
        </div>
    )
}

export default EmailField;