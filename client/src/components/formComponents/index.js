import { useForm } from "react-hook-form";
import styles from "./FormComponent.module.css";
import { Suspense, lazy, Fragment, useState } from "react";
import ApiCallComponent from "../../api/apiCallComponent";

const TextField = lazy(() => import("./formFields/TextField"));
const EmailField = lazy(() => import("./formFields/EmailField"));
const PasswordWithConfirmField = lazy(() =>
  import("./formFields/PasswordWithConfirm")
);
const PasswordConfirmField = lazy(() =>
  import("./formFields/PasswordConfirmField")
);
const PasswordField = lazy(() => import("./formFields/PasswordField"));

const FormComponent = ({
  setReturnValue,
  setSuccess,
  submitValue,
  reason,
  reqType,
  url,
  formBuilder,
  submitBtnExtra,
}) => {
  const isServer = typeof window === "undefined";
  const [apiCallComponent, setApiCallComponent] = useState(false);
  const [apiData, setApiData] = useState({});
  const [operationalError, setOperationalError] = useState("");
  const {
    register,
    errors,
    clearErrors,
    getValues,
    setError,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    setApiData(data);
    setApiCallComponent(true);
  };

  return (
    <Fragment>
      {apiCallComponent ? (
        <ApiCallComponent
          setSuccess={setSuccess}
          setReturnValue={setReturnValue}
          setApiCallComponent={setApiCallComponent}
          setError={setError}
          setOperationalError={setOperationalError}
          reqType={reqType}
          url={url}
          reason={reason}
          formInput={apiData}
        />
      ) : (
        <Fragment></Fragment>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="error">{operationalError}</p>
        {!isServer && (
          <Suspense fallback={<></>}>
            {formBuilder?.map((f) => {
              return (
                <Fragment>
                  {f.fieldType === "TextField" && (
                    <TextField
                      initFocus={f.initFocus}
                      maxChar={f.maxChar}
                      minChar={f.minChar}
                      isRequired={f.isRequired}
                      fieldName={f.fieldName}
                      register={register}
                      errors={errors}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                  )}
                  {f.fieldType === "EmailField" && (
                    <EmailField
                      isRequired={f.isRequired}
                      fieldName={f.fieldName}
                      register={register}
                      errors={errors}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                  )}
                  {f.fieldType === "PasswordWithConfirmField" && (
                    <PasswordWithConfirmField
                      initFocus={f.initFocus}
                      maxChar={f.maxChar}
                      minChar={f.minChar}
                      isRequired={f.isRequired}
                      fieldName={f.fieldName}
                      otherFieldName={f.otherFieldName}
                      register={register}
                      errors={errors}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                  )}
                  {f.fieldType === "PasswordConfirmField" && (
                    <PasswordConfirmField
                      initFocus={f.initFocus}
                      maxChar={f.maxChar}
                      minChar={f.minChar}
                      isRequired={f.isRequired}
                      fieldName={f.fieldName}
                      otherFieldName={f.otherFieldName}
                      register={register}
                      errors={errors}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                  )}
                  {f.fieldType === "PasswordField" && (
                    <PasswordField
                      initFocus={f.initFocus}
                      maxChar={f.maxChar}
                      minChar={f.minChar}
                      isRequired={f.isRequired}
                      fieldName={f.fieldName}
                      register={register}
                      errors={errors}
                      setError={setError}
                      clearErrors={clearErrors}
                      getValues={getValues}
                    />
                  )}
                </Fragment>
              );
            })}
          </Suspense>
        )}
        <input
          id="hidden"
          name="hidden"
          type="hidden"
          placeholder="hidden"
          autoComplete="on"
        />

        <div className="form-group">
          <input id="submit" type="submit" value={submitValue} />
          <div className={styles.forgotBtn}>{submitBtnExtra}</div>
        </div>
      </form>
    </Fragment>
  );
};

export default FormComponent;