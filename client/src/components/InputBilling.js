import React, { useState } from "react";

const InputBilling = () => {
  const initialValues = {
    date: "",
    client: "",
    project: "",
    project_code: "",
    hours:"",
    billable: "",
    first_name: "",
    last_name: "",
    billing_rate: "",
  }
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name] : value,
    });
  };

  const onSubmitForm = async e => {
    e.preventDefault();
    try{
      const body = {values};
      const response = await fetch("http://localhost:5000/bill",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/";
    }catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <form className="d-flex mt-2 w-100 align-items-center" onSubmit={onSubmitForm}> 
        <input 
          type="text"
          className="form-control m-2"
          value={values.date}
          placeholder="Date"
          name="date"
          label="Date"
          id="date"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.client}
          placeholder="Client"
          name="client"
          label="Client"
          id="client"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.project}
          placeholder="Project"
          name="project"
          label="Project"
          id="project"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.project_code}
          placeholder="Project Code"
          name="project_code"
          label="Project Code"
          id="project_code"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.hours}
          placeholder="Hours"
          name="hours"
          label="Hours"
          id="hours"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.billable}
          placeholder="Billable?"
          name="billable"
          id="billable"
          label="Billable?"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.first_name}
          placeholder="First Name"
          name="first_name"
          label="First Name"
          id="first_name"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.last_name}
          placeholder="Last Name"
          name="last_name"
          id="last_name"
          label="Last Name"
          onChange={handleInputChange}
          required
        />
        <input 
          type="text"
          className="form-control m-2"
          value={values.billing_rate}
          placeholder="Billing Rate"
          name="billing_rate"
          id="billing_rate"
          label="Billing Rate"
          onChange={handleInputChange}
          required
        />
        <button className ="btn btn-success ml-2">Add</button>
      </form>
    </>
  )
}

export default InputBilling;