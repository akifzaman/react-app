import React, { FormEvent, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(person);
  };
  return (
    <form onSubmit={(event) => handSubmit(event)}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          value={person.name}
          type="text"
          className="form-control"
          id="name"
        />
      </div>

      {/* div.mb-3>label.form-label+input[type=number].form-control */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, age: event.target.value });
          }}
          value={person.age}
          type="number"
          className="form-control"
          id="age"
        />
      </div>

      {/* button.btn.btn-primary */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
