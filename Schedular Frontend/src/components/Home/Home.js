import React from "react";
import image from "../images/bgimg.png";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Background Image */}
      <div
        className="bg-image d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          color: "#152F4F",
        }}
      >
        {/* Main Heading */}
       
        {/* End of Main Heading */}

        {/* Get Started Card and How To Use Section */}
        <div className="container">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mt-lg-3 mt-md-3 mt-sm-3 mb-md-3 mb-sm-3 text-center">
              <h1 className="cherry-swash-bold ">Process Scheduling Simulator</h1>
            </div>
          </div>
        </div>
          <div className="row justify-content-center mb-3">
            {/* Get Started Card */}
            <div className="col-lg-4 col-md-10 mt-4 mt-md-0 mb-3">
              <div
                className="card p-4"
                style={{
                  backgroundColor: "#152f4f",
                  color: "white",
                  borderRadius: "25px",
                }}
              >
                <div className="card-body">
                  <h3 className="card-title cherry-swash-regular">Welcome to the CPU Scheduling Simulator!</h3>
                  <p className="card-text">
                    This section will guide you through the process of using our simulator to explore various CPU scheduling algorithms and understand their impact on system performance.
                  </p>
                  <form action="/Simulator">
                    <button
                      className="btn btn-lg btn-outline-primary btnstart"
                      style={{ backgroundColor: "white", color: "#152f4f" }}
                    >
                      Get Started
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* End of Get Started Card */}

            {/* How To Use Section */}
            <div className="col-lg-8 col-md-10 mt-4 mt-md-0">
              <div className="card" style={{ backgroundColor: "#152f4f", color: "white", borderRadius: "25px",}}>
                <div className="card-body">
                  <h3 className="card-title cherry-swash-regular">How To Use</h3>
                  <p className="card-text">
                  <ol>
                <li>
                  <strong>Accessing the Simulator:</strong> Start by accessing
                  the simulator through our website or application.
                </li>
                <li>
                  <strong>Setting Up Parameters:</strong> Set up the parameters
                  for your simulation, including process details and other
                  preferences.
                </li>
                <li>
                  <strong>Selecting Scheduling Algorithms:</strong> Choose the
                  scheduling algorithms you'd like to simulate.
                </li>
                <li>
                  <strong>Running the Simulation:</strong> Initiate the
                  simulation and observe as the system processes are scheduled
                  and executed.
                </li>
                <li>
                  <strong>Interpreting the Results:</strong> Analyze the results
                  of the simulation to gain insights into system performance.
                </li>
                <li>
                  <strong>Tips and Best Practices:</strong> Experiment with
                  different parameters and algorithms to optimize system
                  performance.
                </li>
                <li>
                  <strong>Troubleshooting:</strong> Refer to our troubleshooting
                  guide or FAQs for assistance if needed.
                </li>
              </ol>
            
                  </p>
                </div>
              </div>
            </div>
            {/* End of How To Use Section */}
          </div>
        </div>
        {/* End of Get Started Card and How To Use Section */}
      </div>
      {/* End of Background Image */}
    </div>
  );
}
