"use client";

import { useRef } from "react";

import styles from './styles.form.module.css';

export default function ReusableForm({
  handleSubmit = () => {console.log('Form submitted')},
  inputs = [[{}]],
}) {
  const formRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    const formValues = {};
    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    handleSubmit(formValues);
  }

  const inputRowMap = inputs.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className={styles.formRow}>
        {row.map((inputProps, inputIndex) => {
          return (
            <span key={inputIndex} className={styles.inputWrapper}>
              <label htmlFor={inputProps.properties.name}>{inputProps.label}</label>
              {
                inputProps.properties.type === 'textarea' ?
                  <textarea
                    {...inputProps.properties}
                  /> :
                  <input
                    {...inputProps.properties}
                  />
              }
            </span>
          );
        })}
      </div>
    );
  });

  return (
    <form className={styles.form} id="contactForm" onSubmit={handleForm} ref={formRef}>
      {inputRowMap}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
