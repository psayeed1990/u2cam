const PasswordWithConfirmField = ({initFocus, maxChar, minChar, isRequired, fieldName, otherFieldName, register, errors, setError, clearErrors, getValues })=>{
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
            })} id={fieldName} autoFocus={initFocus} name={fieldName} type="password" placeholder={fieldName} autoComplete="new-password" onChange={() => {
                if(getValues(fieldName) !== getValues(otherFieldName) ){
                    setError(otherFieldName, {
                        type: "manual",
                        message: "Password should match "
                    });
                }else{
                    clearErrors(otherFieldName)
                }
                
            }} />
            <label htmlFor={fieldName}>{fieldName}</label>
            <span className={`${errors[fieldName] ? 'error': ''}`}>{errors[fieldName]?.message}</span>
        </div>
    )
}

export default PasswordWithConfirmField;