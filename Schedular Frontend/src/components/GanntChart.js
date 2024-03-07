import React from "react";

export default function GanntChart({ props }) {
  return (
    <div className="row">
      <div className="col">
        <div className="table-container mt-1">
          <h1 className="my-3 text-center cherry-swash-bold">Gannt Chart</h1>
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered table-dark">
              <thead>
                <tr>
                  <th scope="col">Process ID</th>
                  {props.map((item, index) => (
                    <th scope="col" key={index}>P{item.process}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Completion Time</td>
                  {props.map((item, index) => (
                    <td key={index}>{item.completionTime}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
