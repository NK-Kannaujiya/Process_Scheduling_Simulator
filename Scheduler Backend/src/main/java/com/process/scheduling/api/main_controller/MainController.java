package com.process.scheduling.api.main_controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.process.scheduling.api.controller.Fcfs;
import com.process.scheduling.api.controller.PriorityJobFirst;
import com.process.scheduling.api.controller.Rr;
import com.process.scheduling.api.controller.Sjf;
import com.process.scheduling.api.model.ProcessModel;

@RestController
@RequestMapping("/compare")
public class MainController {
	
	// Dependency Injection of each algorithm to use their methods
	@Autowired
	private Fcfs fcfsController;
	
	@Autowired
	private Sjf sjfController;
	
	@Autowired
	private Rr rrController;
	
	@Autowired
	private PriorityJobFirst prioController;
	
	// method to map the url to get the comparisons
	@PostMapping("/something")
	public float[] compareAlgos(@RequestBody List<ProcessModel> processList) {
		
		// Creating list objects to store the return value of each algorithm 
		List<ProcessModel> processFCFS = fcfsController.receiveProcessData(processList);
		List<ProcessModel> processRR = rrController.receiveProcessData(processList);
		List<ProcessModel> processSJF = sjfController.receiveProcessData(processList);
		List<ProcessModel> processPrio = prioController.receiveProcessData(processList);
		
		System.out.println(processFCFS.toArray());
		
		
		
		
		// send each list object to get the average waiting time and turnAround time
		float[] avgWaitList = new float[4];
		
		// Storing the average awaiting time of each algorithm for that process
		avgWaitList[0] = averageWaiting(processFCFS);
		avgWaitList[1] = averageWaiting(processRR);
		avgWaitList[2] = averageWaiting(processSJF);
		avgWaitList[3] = averageWaiting(processPrio);
		
		return avgWaitList;
	}
	
	// method to get the average waiting time of each process
	// will return arrays of arrays
	public float averageWaiting(List<ProcessModel> processFcfs) {
		
		int avgWaitList = 0;
		int numOfProcess = processFcfs.size();
		
		for (ProcessModel element : processFcfs) {
		
			avgWaitList += element.getWaitingTime();
		}
		
		// returning the float casted values
		float result = (float)avgWaitList/numOfProcess;
		System.out.println(result);
		return result;
	}
}

