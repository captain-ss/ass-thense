import React from "react";
import TextInput from "../component/Input/TextInput";
import Button from "../component/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FontGrace from "../component/Font/FontGrace";
const Form = () => {
  const history = useNavigate();
  const validation = useFormik({
    initialValues: {
      userName: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Please enter your Email")
        .email("Enter a valid email address"),
    }),
    onSubmit: (values) => {
      history("/success");
    },
  });
  return (
    <div className="form_page_container">
      <FontGrace tag="h2">Registration form</FontGrace>
      <div className="form_heading">Start your success Journey here!</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit();
          return false;
        }}
      >
        <TextInput
          value={validation.values.userName}
          name="userName"
          placeholder="Enter your name"
          onChange={validation.handleChange}
        />

        <TextInput
          value={validation.values.email}
          name="email"
          placeholder="Enter you email"
          error={validation.errors.email}
          onChange={validation.handleChange}
        />
        <Button
        
          type="submit"
          theme={"dark"}
          disabled={
            validation.values.userName && validation.values.email ? "true" : "false"
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
