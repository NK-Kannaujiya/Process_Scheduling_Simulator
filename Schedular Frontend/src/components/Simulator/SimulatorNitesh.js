import "./Simulator.css";
import axios from "axios";
import React, { useState, useRef } from "react";
import GanntChart from "../GanntChart";
import bgImg from "../images/Simulator.jpg";
import OutputTable from "../Table/OutputTable";

export default function App() {

  const [inputarr, setInputarr] = useState([]);

  const [inputdata, setInputdata] = useState({
    process: "",
    burst: "",
    arrival: "",
    priority:""  // New state to hold the priority value
  });

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [timeQuantum, setTimeQuantum] = useState(""); // State for time quantum
  const [priority, setPriority] = useState(""); // State for time quantum
  const processInputRef = useRef(null); // Ref for the Process ID input field

  



  // hooks to render the priority and time quantum input fields
  const [isPrio, setIsPrio] = useState(false);
  const [isTimeQuantVisible, setTimeQuantVisible] = useState(false);
  

  const sendToController = async (e) => {

    console.log(inputarr);  // remove after test
    e.preventDefault();
    try {
      const dataToSend = inputarr.map((item) => ({
        ...item,
        algorithm: selectedAlgorithm,
        timeQuantum: selectedAlgorithm === "2" ? timeQuantum : "" ,// Use time quantum only if Round Robin is selected
        priority:selectedAlgorithm === "4" ? priority:" "
      }));
      const response = await axios.post(
        "http://localhost:8080/redirect/main",
        dataToSend
      );
      
      setInputarr(response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);  
    }
  };

  const handleCalculate = (e) => {
    if (e) {
      e.preventDefault();
    }

    if(e.target.value === null){
      alert("pls select one arrival time");
    }
    setSelectedAlgorithm(e.target.value);
    setIsVisible(true);
    sendToController(e);

    setTimeQuantVisible(selectedAlgorithm === "2");
    setIsPrio(selectedAlgorithm === "4");

  };

  const changehandle = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const clearTable = () => {
    setInputarr([]);
    setIsVisible(false);
    
    setTimeQuantum("");
  };

  const changhandle = () => {
    if (inputdata.process.trim() === "" || inputdata.process == 0) {
      alert("Please fill appropriate Process Id");
      return;
    }
    if (inputdata.burst.trim() === "") {
      alert("Please fill burst Time");
      return;
    }
    if (inputdata.arrival.trim() === "") {
      alert("Please fill Arrival Time");
      return;
    }
    if (selectedAlgorithm === "4" && inputdata.priority.trim() === "") { // Check if the algorithm is Priority Scheduling and priority is not entered
      alert("Please fill Priority");
      return;
    }

    setInputarr([...inputarr, inputdata]);
    setInputdata({ process: "", burst: "", arrival: "" });

    processInputRef.current.focus(); // Focus on the Process ID input field after adding a process
  };



  return (

    <div className="container-fluid" 
      style={{backgroundImage: `url(${bgImg})`, 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>

      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-3 mb-5 cherry-swash-bold">CPU Scheduler</h1>
          <hr class="horizontal-ruler"></hr>
        </div>
      </div>

      {/* -----------------------------------input-boxes for processes--------------------------------------------------------------------- */}
      {/* ----------------------algorithm selection----------------------------- */}
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10"></div>
      {/* ----------------------------------------------------------------------- */}


      <div className="row">       
        <div className="col-md-9 offset-md-1">
          <div class="row justify-content-center align-items-center p-0">
            <div class="col-10">              
              <div className="col-md-10 mb-3">
                <div className="">
                  <form onSubmit={handleCalculate} className="form-inline">
        
                    <select
                      name="algo"
                      id="algo"
                      value={selectedAlgorithm}
                      onChange={(e) => setSelectedAlgorithm(e.target.value)}
                      className="form-control"
                    >
                      <option value="" disabled hidden>
                        Select an algorithm
                      </option>
                      <option name="sjf" value="3">Shortest Job First</option>
                      <option name="rr" value="2">Round Robin</option>
                      <option name="fcfs" value="1">First Come First Serve</option>
                      <option name="ps" value="4">Priority Scheduling</option>
                    </select>
                  </form>
                </div>
              </div>
              <div class="col-1"></div>
            </div>            
            <div className="row p-0">
            <div className="col-md-3 mb-3">
              <input
                type="number"
                autoComplete="off"
                name="process"
                value={inputdata.process}
                onChange={changehandle}
                placeholder="Process ID"
                className="form-control"
                ref={processInputRef}// Assign the ref to the Process ID input field
              />
            </div>

            <div className="col-md-3 mb-3">
              <input
                type="number"
                autoComplete="off"
                name="arrival"
                value={inputdata.arrival}
                onChange={changehandle}
                placeholder="Arrival Time"
                className="form-control"
              />
            </div>

            <div className="col-md-3 mb-3">
              <input
                type="number"
                autoComplete="off"
                name="burst"
                value={inputdata.burst}
                onChange={changehandle}
                placeholder="Burst Time"
                className="form-control"
              />
            </div>
            
            {/* ---------------------------------------------------------- */}

              {/* { isTimeQuantVisible && ( // Display the time quantum input only for Round Robin */}
              { (selectedAlgorithm === "2" || isTimeQuantVisible) && ( // Display the time quantum input only for Round Robin
              <div className="col-md-3 mb-3">
                <input
                  type="number"
                  autoComplete="off"
                  name="timeQuantum"
                  value={timeQuantum}
                  onChange={(e) => setTimeQuantum(e.target.value)}
                  placeholder="Time Quantum"
                  className="form-control"
                />
              </div>  
              
            )}
            

            {/* ------------------------------------------------- */}

               {/* { isPrio && ( // Display the priority input only for Priority Scheduling */}
               { (selectedAlgorithm === "4" || isPrio) && ( // Display the priority input only for Priority Scheduling
              <div className="col-md-3 mb-3">
                <input
                type="number"
                autoComplete="off"
                name="priority"
                value={inputdata.priority}
                onChange={changehandle}
                placeholder="Priority"
                className="form-control"
                />
              </div>  
              
            )}

            {/* ------------------------------------------------------------------ */}
            
            <div className="col-md-3 mt-1">
              <button
                className="btn btn-success btn-block"
                type="submit"
                onClick={changhandle}
              >
                Add Process
              </button>
            </div>


            


            {/*----------------------input div ended ----------------------------- */}
            </div>       
          </div>
        </div>
      </div>
      {/* -------------------------added processes table----------------- */}
      <div className="row mt-5">
        <div className="col-md-10 offset-md-1">
          <table className="table table-striped table-hover table-dark table-bordered">
            <thead>
              <tr>
                <th scope="col">Process Id</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Burst Time</th>
                {selectedAlgorithm === "2" && <th scope="col">Time Quantum</th>} 
                {selectedAlgorithm === "4" && <th scope="col">Priority</th>}  
              </tr>
            </thead>
            <tbody>
              {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.process}</td>
                  <td>{info.arrival}</td>
                  <td>{info.burst}</td>
                  {selectedAlgorithm === "2" && <td>{timeQuantum}</td>} 
                  {selectedAlgorithm === "4" && <td>{info.priority}</td>}  
                </tr>
              ))}
            </tbody>
          </table>
        </div>             
      </div>
      {/* ----------------------------calculate button---------------------- */}
      <div class="row justify-content-center align-items-center g-2">
        <col className="col-1"></col>
        <div class="col">
              <div className="col-md-6 mb-3 m-1">
              <button className="btn btn-danger" 
                  type="submit" 
                  onClick={(e) => handleCalculate(e)}>
                    Calculate
                </button>
              </div> 
        </div>
        <col className="col"></col>
      </div>
          
      {/*---------------------------------------------------------------*/}
    </div>
    
      {/* gannt chart used*/}
      <div className="row mt-5">
        <div className="col-md-10 offset-md-1">
          {isVisible && <GanntChart props={inputarr} />}
        </div>
      </div>


      {/* output table used*/}
      <div className="row mt-5">
        <div className="col-md-10 offset-md-1">
          {<OutputTable props={inputarr}/>}
        </div>
      </div>

      {/* -------------------------clear page button-------------- */}

        <div class="mb-3 text-center">
          <button type="button" className="btn btn-danger" onClick={clearTable}>
              Reset Page
          </button>
        </div>

    </div>

  );
}
