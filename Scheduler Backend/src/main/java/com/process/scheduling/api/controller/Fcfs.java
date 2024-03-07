package com.process.scheduling.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.process.scheduling.api.model.ProcessModel;

@Controller
public class Fcfs {

	@PostMapping("/first_come_first_serve")
	public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processes) {
        
		List<ProcessModel> schedule = new ArrayList<>();
        
        // Sort the processes based on arrival time (if not already sorted)
        processes.sort((p1, p2) -> Integer.compare(p1.getArrival(), p2.getArrival()));
        int currentTime = processes.get(0).getArrival();

        int waitingTime = 0;
        for (ProcessModel process : processes) {
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
