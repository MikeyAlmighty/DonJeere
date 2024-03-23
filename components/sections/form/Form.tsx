import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import "./Styles.scss";
import {yupResolver} from "@hookform/resolvers/yup";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}


interface FormProps {
    schema: yup.ObjectSchema<any>;
}

export const Form = ({ schema }: FormProps ) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(schema)});

  const onSubmit = (data: IFormInput) => {
    console.log("Thanks, ", data.firstName, "! Email has been sent to: ", data.email);
  };

  return (
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p className="errorLabel">{errors.firstName.message}</p>}

          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <p className="errorLabel">{errors.lastName.message}</p>}

          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p className="errorLabel">{errors.email.message}</p>}

          <input type="submit"/>
      </form>
  );
};