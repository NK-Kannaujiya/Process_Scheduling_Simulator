import React from 'react';

export default function OutputTable({ props }) {

  const objectLength = props.length;
  let totalWaitTime = 0;
  
  props.forEach(data => {
    totalWaitTime += data.waitingTime;
  });

  const avgWaitTime = totalWaitTime / objectLength;

  return (
    <div>
      <div className="col-12">
        <h1 className="text-center mt-3 mb-5 cherry-swash-bold">Output</h1>
      </div>
      <div className="overflow-auto mt-3">
        <table className="table table-striped table-hover table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Process Id</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Burst Time</th>
              <th scope="col">Completion Time</th>
              <th scope="col">Waiting Time</th>
              <th scope="col">Turn Around Time</th>             
            </tr>
          </thead>
          <tbody>
            {props.map((info, ind) => (
              <tr key={ind}>
                <td>{info.process}</td>
                <td>{info.arrival}</td>
                <td>{info.burst}</td>
                <td>{info.completionTime}</td>
                <td>{info.waitingTime}</td>
                <td>{info.burst && info.waitingTime ? (info.burst + info.waitingTime):null}</td>
                {/* will display result only when these values are available */}                
              </tr>
            ))}
            <tr>
              <td>Average Waiting Time</td>
              <td colSpan={5}>{avgWaitTime === NaN ? avgWaitTime : "Processing"}</td>
              {/* will display "processing" till when the average waiting time is calculated */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
