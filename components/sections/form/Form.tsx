import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

import "./Styles.scss";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}


interface FormProps {
    schema: yup.ObjectSchema<any>;
    successMessage: string;
}

export const Form = ({ schema, successMessage }: FormProps ) => {
  const notify = () => toast(successMessage);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: yupResolver(schema)});

  const onSubmit = (data: IFormInput) => {
      notify();
  };

  return (
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <span className="inputWrapper" >
              <label className="label">First Name:</label>
              <input tabIndex={0} {...register("firstName")} />
              {errors.firstName && <p className="errorLabel">{errors.firstName.message}</p>}
          </span>
          <span className="inputWrapper" >
              <label className="label">Last Name:</label>
              <input tabIndex={1} {...register("lastName")} />
              {errors.lastName && <p className="errorLabel">{errors.lastName.message}</p>}
          </span>
          <span className="inputWrapper" >
              <label className="label">Email:</label>
              <input tabIndex={2} {...register("email")} />
              {errors.email && <p className="errorLabel">{errors.email.message}</p>}
          </span>
          <input type="submit"/>
          <ToastContainer />
      </form>
  );
};