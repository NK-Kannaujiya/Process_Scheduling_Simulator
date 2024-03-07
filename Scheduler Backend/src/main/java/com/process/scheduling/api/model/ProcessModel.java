package com.process.scheduling.api.model;

public class ProcessModel {

	private int algorithm;
	private int arrival;
	private int burst;
	private int process;	// pid
	
	// properties to be calculated and sent to front-end
	private int waitingTime;    
	private int completionTime;    
	
	// properties for round robin
	private int timeQuantum;
	private int burstTimeRemaining;
	private int turnaroundTime;
	private boolean isComplete;
	private boolean inQueue;
	private int priority;
	
	
	
	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	// constructor to get the values from react
	public ProcessModel(int algorithm, int arrival, int burst, int process) {
		this.algorithm = algorithm;
		this.arrival = arrival;
		this.burst = burst;
		this.process = process;
	}

	// constructor to set the values according to the processed values
	// CTOR for FCFS
	public ProcessModel(int process, int arrival, int burst,  int waitingTime, int completionTime) {
		this.completionTime = completionTime;
		this.waitingTime = waitingTime;
		this.arrival = arrival;
		this.burst = burst; 
		this.process = process;
	}
	
	
	// CTOR for Round Robin
	public ProcessModel(int process, int arrival, int burst, byte timeQuantum) {
		
		this.arrival = arrival;
		this.burst = burst;
		this.process = process;
		this.timeQuantum = timeQuantum;
	}
	
	
	
	public ProcessModel() {
		// TODO Auto-generated constructor stub
	}


	public int getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(int algorithm) {
		this.algorithm = algorithm;
	}

	public int getArrival() {
		return arrival;
	}

	public void setArrival(int arrival) {
		this.arrival = arrival;
	}

	public int getBurst() {
		return burst;
	}

	public void setBurst(int burst) {
		this.burst = burst;
	}

	public int getProcess() {
		return process;
	}

	public void setProcess(int process) {
		this.process = process;
	}

	public int getWaitingTime() {
		return waitingTime;
	}

	public void setWaitingTime(int waitingTime) {
		this.waitingTime = waitingTime;
	}

	public int getCompletionTime() {
		return completionTime;
	}

	public void setCompletionTime(int completionTime) {
		this.completionTime = completionTime;
	}

	
	// getter setter for time slice
	public int getTimeQuantum() {
		return timeQuantum;
	}

	public void setTimeQuantum(int timeQuantum) {
		this.timeQuantum = timeQuantum;
	}

	public int getBurstTimeRemaining() {
		return burstTimeRemaining;
	}

	public void setBurstTimeRemaining(int burstTimeRemaining) {
		this.burstTimeRemaining = burstTimeRemaining;
	}

	public int getTurnaroundTime() {
		return turnaroundTime;
	}

	public void setTurnaroundTime(int turnaroundTime) {
		this.turnaroundTime = turnaroundTime;
	}

	public boolean isComplete() {
		return isComplete;
	}

	public void setComplete(boolean isComplete) {
		this.isComplete = isComplete;
	}

	public boolean isInQueue() {
		return inQueue;
	}

	public void setInQueue(boolean inQueue) {
		this.inQueue = inQueue;
	}


	
	
	
	
	
	
}
