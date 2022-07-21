import React, { useEffect, useState } from "react";

const ListBills = () => {
  const [bills,setBills] = useState([]);
  const [tracking, setTracking] = useState({time:0, money:0})
  const getBills = async() => {
      try {
        const response = await fetch("http://localhost:5000/bills");
        const jsonData = await response.json();
        setBills(jsonData);
        calc(jsonData);
      } catch(err) {
        console.error(err)
      }
  }

  const calc = (data) => {
    let time = 0;
    let money = 0;
    for (const el of data) {
      time += parseFloat(el.hours);
      money += parseFloat(el.hours) * parseInt(el.billing_rate);
    }
    time = Math.round(time * 100) / 100;
    money = Math.round(money * 100) / 100;
    setTracking({time, money});
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    try{
      const name = e.target.elements.name.value;
      const response = await fetch(`http://localhost:5000/bills/${name}`)
      const jsonData = await response.json();
      setBills(jsonData);
    } catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getBills();
  },[]);

  return (
    <>
      <form className="d-flex m-3" onSubmit={onSubmitForm}>
        <div className="d-flex w-100 align-items-center">
        <input
          type="text"
          className="form-control m-2"
          placeholder="Search by Client"
          name="name"
          label="Name"
          id="name"
          required
        />
        <button className="btn btn-success ml-2">Search</button>
        </div>
      </form>
      <div className="d-flex justify-content-between">
        <h3>
          Hours Tracked: {tracking.time} hours
        </h3>
        <h3>
          Billable Amount: ${tracking.money}
        </h3>
      </div>
      <div style={{height:500,overflow:"scroll"}}>
        <table className="table table-hover text-center" >
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Project</th>
            <th>Project Code</th>
            <th>Hours</th>
            <th>Billable</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Billing Rate</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(bill => (
            <tr>
            <td>{bill.date}</td>
            <td>{bill.client}</td>
            <td>{bill.project}</td>
            <td>{bill.project_code}</td>
            <td>{bill.hours}</td>
            <td>{bill.billable}</td>
            <td>{bill.first_name}</td>
            <td>{bill.last_name}</td>
            <td>{bill.billing_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  )
}

export default ListBills;