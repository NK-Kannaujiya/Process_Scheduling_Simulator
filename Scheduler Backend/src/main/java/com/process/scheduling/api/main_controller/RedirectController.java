package com.process.scheduling.api.main_controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.process.scheduling.api.controller.Fcfs;
import com.process.scheduling.api.controller.PriorityJobFirst;
import com.process.scheduling.api.controller.Rr;
import com.process.scheduling.api.controller.Sjf;
import com.process.scheduling.api.model.ProcessModel;


// Rest Controller which will call specific controllers according to 
// the selected algorithm

@RestController
@RequestMapping("/redirect")
public class RedirectController {
	
	// creating the object of the all Controllers
	@Autowired
	private Fcfs fcfsController;
	
	@Autowired
	private Sjf sjfController;
	
	@Autowired
	private Rr rrController;
	
	@Autowired
	private PriorityJobFirst prioController;
	

	// Main function which will take data from front-end and give it to 
	// specific controller to compute the data and return the output.
	@PostMapping("/main")
	public List<ProcessModel> RedirectToControl(@RequestBody List<ProcessModel> processDataList, RedirectAttributes redirectAttributes){
		
		// Getting the algorithm type from the list
		// since all the objects have same algorithm type
		int algorithm = processDataList.get(0).getAlgorithm() ;
		
		// List to store the data received from FCFS controller
		List<ProcessModel> stringResp = null;
		
		// switch block to select the algorithm
		switch (algorithm) {
        	case 1:
        		stringResp = fcfsController.receiveProcessData(processDataList);
            break;
        	case 2:
        		stringResp = rrController.receiveProcessData(processDataList);
            break;
        	case 3:
        		stringResp = sjfController.receiveProcessData(processDataList);
            break;
        	case 4:
        		stringResp = prioController.receiveProcessData(processDataList);
            break;
        default:
            // Handle if the algorithm value is not recognized
            break;
		}

		// Return the object with waiting time and turn around time
//	return ResponseEntity.ok("Data received successfully. From FCFS controller");
		return stringResp;
	}
}
