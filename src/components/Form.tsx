import React, { FormEvent, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {
            required: true,
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Name must be at most 20 characters",
            },
          })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field can not be empty</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            Name should be at least 3 characters long
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", {
            required: true,
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 99, message: "Age must be at most 99" },
          })}
          type="number"
          className="form-control"
          id="age"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Age field can not be empty</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">Age should be at least 18</p>
        )}
        {errors.age?.type === "max" && (
          <p className="text-danger">Age should be at most 99</p>
        )}
      </div>
      {/* a button inside the form is used to submit the form */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
