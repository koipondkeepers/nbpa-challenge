const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes

// create an entry
app.post("/bill", async(req, res) => {
  try{
    const { date, client, project, project_code, hours, billable, first_name, last_name, billing_rate} = req.body.values;
    const newBill = await pool.query("INSERT INTO billing (date, client, project, project_code, hours, billable, first_name, last_name, billing_rate) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
                   [date, client, project, project_code, hours, billable, first_name, last_name, billing_rate]);
    res.json(newBill.rows[0])
  } catch (err) {
    console.error(err.message);
  }
})
// get all entries
app.get("/bills", async(req, res) => {
  try{
    const allBills = await pool.query("SELECT * FROM billing");
    res.json(allBills.rows);
  } catch (err) {
    console.error(err.message)
  }
})
// get entries for specific client
app.get("/bills/:client", async(req, res) => {
  try {
    const { client } = req.params;
    const entries = await pool.query("SELECT * FROM billing WHERE client = $1", [client]);
    res.json(entries.rows);
  } catch{
    console.error(err.message);
  }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
})