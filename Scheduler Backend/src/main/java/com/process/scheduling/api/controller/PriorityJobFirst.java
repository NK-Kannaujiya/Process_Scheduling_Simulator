package com.process.scheduling.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.process.scheduling.api.model.ProcessModel;

@Controller
public class PriorityJobFirst {

	@PostMapping("/priority_job")
	public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processList) {
		List<ProcessModel> schedule = new ArrayList<>();
		processList.sort((p1,p2)-> Integer.compare(p1.getPriority(), p2.getPriority()));
		// Process the received data here
		
		
		int currentTime = processList.get(0).getArrival();

        int waitingTime = 0;
        for (ProcessModel process : processList) {
	        	waitingTime = Math.max(0, currentTime - process.getArrival());
	            currentTime += process.getBurst();
	            
	            process.setCompletionTime(currentTime);
	            process.setWaitingTime(waitingTime);
	            
	            // adding the new objects with the processed data
	            schedule.add(new ProcessModel(process.getProcess(), process.getArrival(),
	            		process.getBurst(), process.getWaitingTime(), process.getCompletionTime()));
	        }
        return schedule;
		
      
    }
}
