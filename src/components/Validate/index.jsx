import React, { useState } from "react";
import Field from "./components/Field";
import { validate } from "@src/pages/utils/validate";





export default function Validate() {
  const [form, setForm] = useState({});

  const [error, setError] = useState({});
  const onSubmit = (ev) => {
    ev.preventDefault();
 
    const rules = {
      name: [{ required: true , message: 'khong duoc bo trong'}],

      email: [{ required: true ,regexp:'email', message:'email khong duoc bo trong', messageRegexp: 'khong dung dinh dang'}],
    };
    const errorObject = validate(rules, form);
    setError(errorObject);
    if (Object.keys(errorObject).length == 0) {
      console.log("validate success");
      //goi api tren server
    } else {
      console.log("validate fails");
    }
  };

  const register = (name) => {
    return {
      error: error[name],
      value: form[name] || "",
      onChange: (ev) => setForm({ ...form, [name]: ev.target.value }),
    };
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        color: "black",
        padding: "15px",
      }}
    >
      <Field label="Họ và Tên" required type="text"  {...register("name")} />
      <Field label="Email" required type="text" {...register("email")} />
      <Field
        label="Email"
        type="text"
        {...register("content")}
        renderInput={(props) => {
          return (
            <textarea
              {...props}
              cols="30"
              rows="10"
              style={{ border: "1px solid black" }}
            ></textarea>
          );
        }}
      />

      <button style={{ width: "100px", border: "1px solid black" }}>
        Submit
      </button>
    </form>
  );
}
