package com.process.scheduling.api.round_robin;

import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import com.process.scheduling.api.model.ProcessModel;



public class RoundRobin {

	public static void
	checkForNewArrivals(ProcessModel[] processes, int n,
						int currentTime,
						Queue<Integer> readyQueue)
{
	for (int i = 0; i < n; i++) {
		ProcessModel p = processes[i];
	// checking if any processes has arrived
	// if so, push them in the ready Queue.
	if (p.getArrival() <= currentTime && !p.isInQueue()
		&& !p.isComplete()) {
		processes[i].setInQueue(true);
		readyQueue.add(i);
	}
	}
}

// Context switching takes place at every time quantum
// At every iteration, the burst time of the processes
// in the queue are handled using this method
public static void
	updateQueue(ProcessModel[] processes, int n, int quantum,
				Queue<Integer> readyQueue, int currentTime,
				int programsExecuted)
{
	int i = readyQueue.remove();

	// if the process is going to be finished executing,
	// ie, when it's remaining burst time is less than
	// time quantum mark it completed and increment the
	// current time and calculate its waiting time and
	// turnaround time
	if (processes[i].getBurstTimeRemaining() <= quantum) {
	processes[i].setComplete(true);
	currentTime += processes[i].getBurstTimeRemaining();
	processes[i].setCompletionTime(currentTime);
	processes[i].setWaitingTime( processes[i].getCompletionTime() - processes[i].getArrival() - processes[i].getBurst());
	processes[i].setTurnaroundTime( processes[i].getWaitingTime() + processes[i].getBurst());

	if (processes[i].getWaitingTime() < 0)
		processes[i].setWaitingTime(0);

	processes[i].setBurstTimeRemaining(0);

	// if all the processes are not yet inserted in
	// the queue, then check for new arrivals
	if (programsExecuted != n) {
		checkForNewArrivals(
		processes, n, currentTime, readyQueue);
	}
	}
	else {
	// the process is not done yet. But it's going
	// to be pre-empted since one quantum is used
	// but first subtract the time the process used
	// so far
	processes[i].setBurstTimeRemaining(processes[i].getBurstTimeRemaining() - quantum);
	currentTime += quantum;

	// if all the processes are not yet inserted in
	// the queue, then check for new arrivals
	if (programsExecuted != n) {
		checkForNewArrivals(
		processes, n, currentTime, readyQueue);
	}
	// insert the incomplete process back into the
	// queue
	readyQueue.add(i);
	}
}

// Just a function that outputs the result in terms of
// their PID.
public static void output(ProcessModel[] processes, int n)
{
	double avgWaitingTime = 0;
	double avgTurntaroundTime = 0;
	
	/*
	// sort the processes array by processes.PID
	Arrays.sort(processes, (ProcessModel p1, ProcessModel p2) -> {
	return p1.getProcess()-p2.getProcess();
	});
	*/
	
	for (int i = 0; i < n; i++) {
	System.out.println(
		"Process " + processes[i].getProcess()
		+ ": Waiting Time: "
		+ processes[i].getWaitingTime()
		+ " Turnaround Time: "
		+ processes[i].getTurnaroundTime());
	avgWaitingTime += processes[i].getWaitingTime();
	avgTurntaroundTime
		+= processes[i].getTurnaroundTime();
	}
	System.out.println("Average Waiting Time: "
					+ avgWaitingTime / n);
	System.out.println("Average Turnaround Time: "
					+ avgTurntaroundTime / n);
}

/*
	* This function assumes that the processes are already
	* sorted according to their arrival time
	*/
public static void roundRobin(ProcessModel[] processes,
								int n, int quantum)
{
	Queue<Integer> readyQueue
	= new LinkedList<Integer>();
	readyQueue.add(0); // initially, pushing the first
	// process which arrived first
	processes[0].setInQueue(true);

	int currentTime
	= 0; // holds the current time after each
	// process has been executed
	int programsExecuted
	= 0; // holds the number of programs executed so
	// far

	while (!readyQueue.isEmpty()) {
	updateQueue(processes, n, quantum, readyQueue,
				currentTime, programsExecuted);
	}
}



public void mainMethod(List<ProcessModel> processList)
{
//	List<ProcessModel> processList = new ArrayList<>();
	
	int n = processList.size();
	int quantum = 2;
//	byte quantum = processList.get(0).getTimeSlice();

	/*
	System.out.println(
	"Enter the number of processes: ");
	n = Integer.parseInt(System.console().readLine());
	System.out.println("Enter time quantum: ");
	quantum
	= Integer.parseInt(System.console().readLine());
	*/
	
	
	
	ProcessModel[] processes = new ProcessModel[n + 1];
	for (int i = 0; i < n; i++) {
	    processes[i] = processList.get(i);
		
	processes[i].setArrival(processList.get(i).getArrival());
//	Integer.parseInt(System.console().readLine());
	processes[i].setBurst(processList.get(i).getBurst());
//	Integer.parseInt(
//		System.console().readLine());
	processes[i].setBurstTimeRemaining(processes[i].getBurst());
	processes[i].setProcess(i + 1);
	System.out.println();
	}


	System.out.println(Arrays.toString(processes));
	

	
//	// stl sort in terms of arrival time
//	Arrays.sort(processes, (ProcessModel[] p1, ProcessModel[] p2) -> {
//	return p1.getArrival() - p2.getArrival();
//	});
	
	
	// Define a comparator to sort by age


	Comparator<ProcessModel> comparator = Comparator.comparingInt(ProcessModel::getArrival);
	
	Arrays.sort(processes, comparator);

	
	System.out.println(Arrays.toString(processes));
	roundRobin(processes, n, quantum);

	output(processes, n);
}
}
