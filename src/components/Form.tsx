import React, { FormEvent, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Form = () => {
  //always initialize refs with null because initially there is no DOM element associated with them
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    if (nameRef.current && ageRef.current) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person);
    }
  };
  return (
    <form onSubmit={(event) => handSubmit(event)}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" ref={nameRef} />
      </div>

      {/* div.mb-3>label.form-label+input[type=number].form-control */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input type="number" className="form-control" id="age" ref={ageRef} />
      </div>

      {/* button.btn.btn-primary */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
