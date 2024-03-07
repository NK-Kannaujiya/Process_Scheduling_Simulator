package com.process.scheduling.api.model;

public class ProcessForRR {

	int pid;
	int arrivalTime;
	int burstTime;
	int burstTimeRemaining; // the amount of CPU time
	// remaining after each
	// execution
	int completionTime;
	int turnaroundTime;
	int waitingTime;
	boolean isComplete;
	boolean inQueue;
	
	
	public ProcessForRR() {
		super();
		// TODO Auto-generated constructor stub
	}


	public ProcessForRR(int pid, int arrivalTime, int burstTime, int burstTimeRemaining, int completionTime,
			int turnaroundTime, int waitingTime, boolean isComplete, boolean inQueue) {
		super();
		this.pid = pid;
		this.arrivalTime = arrivalTime;
		this.burstTime = burstTime;
		this.burstTimeRemaining = burstTimeRemaining;
		this.completionTime = completionTime;
		this.turnaroundTime = turnaroundTime;
		this.waitingTime = waitingTime;
		this.isComplete = isComplete;
		this.inQueue = inQueue;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public int getArrivalTime() {
		return arrivalTime;
	}


	public void setArrivalTime(int arrivalTime) {
		this.arrivalTime = arrivalTime;
	}


	public int getBurstTime() {
		return burstTime;
	}


	public void setBurstTime(int burstTime) {
		this.burstTime = burstTime;
	}


	public int getBurstTimeRemaining() {
		return burstTimeRemaining;
	}


	public void setBurstTimeRemaining(int burstTimeRemaining) {
		this.burstTimeRemaining = burstTimeRemaining;
	}


	public int getCompletionTime() {
		return completionTime;
	}


	public void setCompletionTime(int completionTime) {
		this.completionTime = completionTime;
	}


	public int getTurnaroundTime() {
		return turnaroundTime;
	}


	public void setTurnaroundTime(int turnaroundTime) {
		this.turnaroundTime = turnaroundTime;
	}


	public int getWaitingTime() {
		return waitingTime;
	}


	public void setWaitingTime(int waitingTime) {
		this.waitingTime = waitingTime;
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
