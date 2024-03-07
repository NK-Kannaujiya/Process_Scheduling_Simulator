import React from 'react'
import img from '../images/Main.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Docs.css';

export default function Docs() {
  
    useEffect(() => {
      // Initialize AOS once the script is loaded
      
        Aos.init();
      
    }, []);

    const inlineStyles = {
    
      backgroundImage: `url(${img})`,
  
    };

  return (
    <div className='mb-2 pb-2' style={inlineStyles}>

      <div className='mt-2 text-white'>
      <br></br>
        <h1 className='text text-center my-5'>Documentation</h1>
        <br></br>
      </div>

      {/* div which hold the cards inside */}
      <div className='mb-5'>

          {/* 1st card */}

        <div class="card card1 container mb-5 " data-aos="zoom-in" style={{backgroundColor:"#a6e3a9"}}>
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
        <h4 class="card-title text-center my-3">What is CPU Scheduling?</h4>
          <p class="card-text my-4">
            CPU Scheduling is a process of determining which process will own CPU for execution while another process is on hold. 
            The main task of CPU scheduling is to make sure that whenever the CPU remains idle, the OS at least select one of the processes
            available in the ready queue for execution. The selection process will be carried out by the CPU scheduler. It selects one of the
            processes in memory that are ready for execution.
          </p>
        </div>
        </div>
      </div>

      {/* 2nd card */}

      <div class="card card2 container mb-5" data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-3">Why CPU Scheduling?</h4>
          <p class="card-text my-4">A typical process involves both I/O time and CPU time. In a uni programming system like MS-DOS, time spent waiting for I/O is wasted and CPU is free during this time. In multi programming systems, one process can use CPU while another is waiting for I/O. This is possible only with process scheduling.
          </p>
          <h5>Objectives of Process Scheduling Algorithm</h5>
          <ul>
            <li>Max CPU utilization [Keep CPU as busy as possible]</li>
            <li>Fair allocation of CPU.</li>
            <li>Max throughput [Number of processes that complete their execution per time unit]</li>
            <li>Min turnaround time [Time taken by a process to finish execution]</li>
            <li>Min waiting time [Time a process waits in ready queue]</li>
            <li>Min response time [Time when a process produces first response]</li>
          </ul>
        </div>
      </div>

      {/* 3rd card */}
      <div class="card card3 container mb-5 " data-aos="zoom-in" > {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-3">Important CPU scheduling Terminologies</h4>
          <ul>
            <li>Burst Time/Execution Time: It is a time required by the process to complete execution. It is also called running time.</li>
            <li>Arrival Time: when a process enters in a ready state</li>
            <li>Finish Time: when process complete and exit from a system</li>
            <li>Multiprogramming: A number of programs which can be present in memory at the same time.</li>
            <li>Jobs: It is a type of program without any kind of user interaction.</li>
            <li>User: It is a kind of program having user interaction.</li>
            <li>Process: It is the reference that is used for both job and user.</li>
            <li>CPU/IO burst cycle: Characterizes process execution, which alternates between CPU and I/O activity. CPU times are shorter than the time of I/O.</li>
          </ul>
        </div>
      </div>


      {/* 4th card */}
      <div class="card card4 container mb-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Types of CPU Scheduling</h4>
          <p class="card-text my-3">There is mainly two major types of CPU Scheduling which is listed below.There is sub-types of this algorithm also. we have discussed all algorithm in details below.</p>
          <ul>
            <li>Preemptive Algorithm</li>
            <li>Non Preemptive Algorithm</li>
          </ul>
          <h5>Preemptive Algorithm</h5>
          <p>In Preemptive Scheduling, the tasks are mostly assigned with their priorities. Sometimes it is important to run a task with a higher priority before another lower priority task, even if the lower priority task is still running. The lower priority task holds for some time and resumes when the higher priority task finishes its execution.</p>
          <h5>Non Preemptive Algorithm</h5>
          <p>
          In this type of scheduling method, the CPU has been allocated to a specific process. The process that keeps the CPU busy will release the CPU either by switching context or terminating. It is the only method that can be used for various hardware platforms. That’s because it doesn’t need special hardware (for example, a timer) like preemptive scheduling.
          </p>
        </div>
      </div>


      {/* 5th card */}
      <div class="card card5 container mb-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">Types of CPU scheduling Algorithm</h4>
          <h5>There are mainly six types of process scheduling algorithm</h5>
          <ul>
            <li>First Come First Serve (FCFS)</li>
            <li>Shortest-Job-First (SJF) Scheduling</li>
            <li>Shortest Remaining Time</li>
            <li>Priority Scheduling</li>
            <li>Round Robin Scheduling</li>
            <li>Multilevel Queue Scheduling</li>
          </ul>
        </div>
      </div>


     {/* 6th card */}
     <div class="card card6 container mb-5 " data-aos="zoom-in">
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-4">First-Come, First-Serve</h4>
          <p class="card-text my-4">
            FCFS, or First Come, First Served, is a scheduling algorithm used in computer operating systems and other systems where resources are shared among multiple tasks or processes. The concept of FCFS is quite simple:
          </p>
          <ul>
            
            <li><h5>Arrival Order:</h5><p>When a process enters the ready queue, it is placed at the end of the queue. The processes are executed in the order they arrive, hence the name "First Come, First Served."</p></li>
            <li><h5>Execution:</h5><p> When a process enters the ready queue, it is placed at the end of the queue. The processes are executed in the order they arrive, hence the name "First Come, First Served."</p></li>
            <li><h5>Completion:</h5><p> The CPU is assigned to the process at the front of the queue. This process continues execution until it either finishes its CPU burst or voluntarily yields the CPU.</p></li>
            <li><h5>Arrival Order:</h5><p>Once the current process completes its CPU burst, the next process in the queue is selected for execution.</p></li>
            <h5>Key characteristics and considerations of FCFS include:</h5>
            <li><h5>Non-Preemptive:</h5><p>  FCFS is a non-preemptive scheduling algorithm, meaning once a process starts execution, it continues until it finishes or voluntarily gives up the CPU. No other process can preempt it during its execution.</p></li>
            <li><h5>FIFO-Queue:</h5><p> The ready queue operates as a First-In-First-Out (FIFO) queue, where processes are added at the end and removed from the front.</p></li>
          </ul>
        </div>
      </div>

        {/* 7rd card */}
        <div class="card card7 container mb-5 " data-aos="zoom-in" > {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-3">Shortest Job First</h4>
          <p class="card-text my-4">
            SJF stands for Shortest Job First, and it is a scheduling algorithm used in operating systems and other contexts where multiple processes are competing for resources such as the CPU. The concept of SJF revolves around prioritizing the execution of the shortest jobs or tasks first. Here's an overview of how SJF works:
          </p>
          <ul>
            <li><h5>Arrival of Processes:</h5><p> When a process enters the system, its CPU burst length or execution time is determined. This could be estimated based on historical data or provided by the process itself</p></li>
            <li><h5>Selection of Next Process:</h5><p> Among all the processes currently in the ready queue, the process with the shortest CPU burst time is selected for execution next.</p></li>
            <li><h5>Execution:</h5><p>The selected process is given control of the CPU and is allowed to execute until it completes its CPU burst or is interrupted by an event such as an I/O request.</p></li>
            <li><h5>Completion of Process:</h5><p> Once the current process finishes its CPU burst, the next process with the shortest CPU burst among the remaining processes in the ready queue is selected for execution.</p></li>
            <h5>Key characteristics and considerations of SJF include:</h5>
            <li><h5>Preemptive and Non-Preemptive Versions:</h5><p> SJF can be implemented in preemptive and non-preemptive variants. In preemptive SJF, a shorter process arriving later can preempt the currently executing process if its CPU burst time is shorter. In non-preemptive SJF, once a process begins execution, it continues until completion.</p></li>
            <li><h5>Optimality:</h5><p> SJF is optimal among all scheduling algorithms in terms of minimizing average waiting time for a given set of processes, assuming all process CPU burst times are known in advance. This optimality is proven using mathematical analysis.</p></li>
            <li><h5>Starvation:</h5><p> While SJF minimizes waiting time for short jobs, it can lead to starvation for longer jobs. If shorter jobs continually arrive, longer jobs may never get a chance to execute, leading to starvation and potential unfairness.</p></li>
            
          </ul>
        </div>
      </div>



     {/* 8rd card */}
     <div class="card card8 container mb-5 " data-aos="zoom-in" > {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-3">Priority Scheduling</h4>
          <p class="card-text my-4">
            Priority Scheduling is a scheduling algorithm used in operating systems and computer systems to manage processes or tasks competing for resources such as the CPU. It assigns a priority to each process and allocates CPU time to the highest priority process that is ready to execute. Here's an overview of how Priority Scheduling works:
          </p>
          <ul>
            <li><h5>Priority Assignment:</h5><p> Each process is assigned a priority value, which can be based on factors such as process type, importance, or user-defined criteria. Lower priority numbers typically represent higher priorities, with the highest priority being assigned the lowest numerical value.</p></li>
            <li><h5>Selection of Next Process:</h5><p> The scheduler selects the process with the highest priority from the pool of ready processes for execution. If multiple processes have the same highest priority, Priority Scheduling may use additional criteria, such as First Come, First Served (FCFS) or Round Robin, to determine the order of execution</p></li>
            <li><h5>Execution:</h5><p>The selected process is given control of the CPU and allowed to execute until it either completes its CPU burst, is preempted by a higher-priority process, or voluntarily yields the CPU (in non-preemptive Priority Scheduling)..</p></li>
            <li><h5>Priority Adjustment:</h5><p> Priorities may change dynamically based on various factors, such as aging or changes in process behavior. Aging mechanisms may increase the priority of long-waiting processes to prevent starvation.</p></li>
            <h5>Key characteristics and considerations of Priority Scheduling include:</h5>
            <li><h5>Preemptive and Non-Preemptive Versions:</h5><p>  Priority Scheduling can be implemented in preemptive or non-preemptive variants. In preemptive Priority Scheduling, a higher-priority process can preempt a lower-priority process currently executing. In non-preemptive Priority Scheduling, a process continues to execute until it completes its CPU burst or voluntarily yields the CPU.</p></li>
            <li><h5>Starvation:</h5><p> Priority Scheduling may suffer from starvation, where low-priority processes may not get sufficient CPU time if high-priority processes continuously arrive.</p></li>
            <li><h5>Dynamic Priority Adjustment:</h5><p>Some implementations of Priority Scheduling include mechanisms for dynamically adjusting process priorities based on their behavior or system conditions.</p></li>
          </ul>
        </div>
      </div>



      {/* 9rd card */}
     <div class="card card9 container mb-5 " data-aos="zoom-in" > {/*data-aos-duration="2000"*/}
        {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
        <div class="card-body">
          <h4 class="card-title text-center my-3">Round Robin</h4>
          <p class="card-text my-4">
          Round Robin (RR) is a scheduling algorithm commonly used in operating systems and computer systems to manage processes or tasks sharing a CPU. It is characterized by its time-sharing approach, where each process is assigned a fixed time slice or quantum, and processes are executed in a circular manner.
          </p>
          <ul>
            <li><h5>Time Slicing:</h5><p> The system allocates a fixed time slice to each process. When a process is given the CPU, it is allowed to execute for a predefined time quantum.</p></li>
            <li><h5>Circular Queue:</h5><p> Processes are organized in a circular queue called the ready queue. The scheduler traverses this queue, allocating CPU time to each process in a round-robin fashion.</p></li>
            <li><h5>Execution:</h5><p>When a process's turn arrives, it is given the CPU for its time slice. If the process completes its CPU burst within the time quantum, it is moved to the end of the queue for future execution. If the process does not finish within the time quantum, it is preempted, and its state is saved. The process is then placed back at the end of the queue to await its next turn.</p></li>
            <li><h5>Preemption:</h5><p> Round Robin is preemptive in nature. If a new process arrives while another process is executing, the currently executing process is preempted once its time quantum expires, and the CPU is given to the new process.</p></li>
            <h5>Key characteristics and considerations of Round Robin Scheduling:</h5>
            <li><h5>Response Time:</h5><p> Round Robin provides reasonable response times for interactive tasks since each process gets CPU time at regular intervals.</p></li>
            <li><h5>Overhead:</h5><p> Round Robin scheduling incurs overhead due to context switching, as the scheduler needs to switch between processes at each time quantum.</p></li>
            <li><h5>performance:</h5><p>The performance of Round Robin heavily depends on the choice of the time quantum. A shorter time quantum improves responsiveness but increases overhead, while a longer time quantum reduces overhead but may lead to decreased responsiveness, especially for interactive tasks.</p></li>
          </ul>
        </div>
      </div>

    {/* cards ended upper */}
    </div>
  )
}

