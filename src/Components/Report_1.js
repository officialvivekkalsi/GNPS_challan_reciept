import React from "react";
import "./ReportCard.css";

const ReportCard = (props) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-card">
      <div className="report-card-header">
        <h3>FEE BILL -{props.info.type} </h3>
        <h1>Guru Nanak Public School</h1>
        <p>Parwana Road, Pitam Pura Delhi-11034 New Delhi-, 011-27017260</p>
        <b>
          Please credit the account no - 08691000050054 in the name of "Guru
          Nanak Public School" with Punjab & Sind Bank, Pushpanjali Enclave{" "}
        </b>
      </div>
      <table class="table table-borderless table-condensed table-hover">
        <tbody>
          <tr>
            {/* <td>Adm No :5862 </td> */}
            <td>Adm No :{props.info.admno} </td>
            <td>Date : 24-Feb-2023</td>
          </tr>
          <tr>
            <td>Challan No. : {props.info.challan_no}</td>
            <td>Class : VII-A</td>
          </tr>
          <tr>
            <td colspan="2">Student Name : {props.info.std_name} </td>
          </tr>
          <tr>
            <td>Father Name : {props.info.father_name}</td>
            <td>Mother Name :{props.info.mother_name}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Particulars Mar</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total School Fee</td>
            <td>{props.info.amount}</td>
          </tr>
          {/* Add more subjects and grades as needed */}
        </tbody>
      </table>
      <p>Amount in Words:{props.info.rsinwords}</p>
      <p>Recieved Rupees</p>
      <p>Mode of Payment: CASH/CHEQUE/CARD/SCHOOL FEE PORTAL</p>
      <p>Cheque No. & Date ___________________________</p>
      <p>Drawn On ___________________________</p>
      <p>Branch ___________________________</p>
      <p>
        NOTE: PLEASE FILL THE DETAILS GIVEN. PAY THE FEE BY 10th OF EVERY MONTH
        OTHERWISE FINE WILL BE CHARGED EXTRA. PLEASE TICK THE MODE OF THE
        PAYMENT, ONLY ABOVE MENTIONED MODES ARE ALLOWED PLEASE GIVE DETAIL OF
        NOTES ON THE REVERSE OF THS CHALLAN (SCHOOL COPY) IN CASE OF CASH FEE.
      </p>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default ReportCard;
