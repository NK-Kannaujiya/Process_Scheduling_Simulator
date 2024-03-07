package com.process.scheduling.api.controller;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.process.scheduling.api.model.ProcessModel;

//@RestController
//public class Rr {
//
//	@PostMapping("/round_robin")
//	public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
//			List<ProcessModel>schedule = new ArrayList<>();
//			List<ProcessModel>readyQueue = new ArrayList<>();
//			int currentTime =0;
//			//int timeSlice = 5 ;
//		//	add process to ready queue
//			for (ProcessModel process : processesList) {
//				readyQueue.add(process);
//			}
//			//sort on arrival time
//			readyQueue.sort((p1,p2)-> p1.getArrival()-p2.getArrival());
//			
//			int waitingTime=0;
//			while(!readyQueue.isEmpty()) {
//				
//				ProcessModel currentProcess = readyQueue.remove(0);
//				
//				if(currentProcess.getArrival() <=currentTime) {
//					if(currentProcess.getBurst() <= currentProcess.getTimeQuantum()) {
//						
//						waitingTime= Math.max(0, currentTime-currentProcess.getArrival());
//						currentTime += currentProcess.getArrival();
//						
//						currentProcess.setCompletionTime(currentTime);
//						
//						currentProcess.setWaitingTime(waitingTime);
//						}
//					else {					
//						//update burst time after each timeQuantum				
//						currentProcess.setBurst(currentProcess.getBurst()-currentProcess.getTimeQuantum());
//						//add the process back to readyQueue
//						readyQueue.add(currentProcess);
//					}
//					currentTime += currentProcess.getTimeQuantum();
//				}else{
//					readyQueue.add(currentProcess);
//					currentTime=currentProcess.getArrival();
//			}
//				schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
//						currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()));
//	        
//		}
//			return schedule ;
//	}
//}

//@RestController
//public class Rr {
//
//    @PostMapping("/round_robin")
//    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
//        List<ProcessModel> schedule = new ArrayList<>();
//        List<ProcessModel> readyQueue = new ArrayList<>();
//        int currentTime = 0;
//
//        // add process to ready queue
//        for (ProcessModel process : processesList) {
//            readyQueue.add(process);
//        }
//
//        // sort on arrival time
//        readyQueue.sort((p1, p2) -> p1.getArrival() - p2.getArrival());
//
//        int waitingTime = 0;
//        while (!readyQueue.isEmpty()) {
//            // Check if the readyQueue list is empty before attempting to remove an element
//            if (!readyQueue.isEmpty()) {
//                ProcessModel currentProcess = readyQueue.remove(0);
//
//                if (currentProcess.getArrival() <= currentTime) {
//                    if (currentProcess.getBurst() <= currentProcess.getTimeQuantum()) {
//                        waitingTime = Math.max(0, currentTime - currentProcess.getArrival());
//                        currentTime += currentProcess.getArrival();
//
//                        currentProcess.setCompletionTime(currentTime);
//
//                        currentProcess.setWaitingTime(waitingTime);
//                    } else {
//                        // update burst time after each timeQuantum
//                        currentProcess.setBurst(currentProcess.getBurst() - currentProcess.getTimeQuantum());
//                        // add the process back to readyQueue
//                        readyQueue.add(currentProcess);
//                    }
//                    currentTime += currentProcess.getTimeQuantum();
//                } else {
//                    readyQueue.add(currentProcess);
//                    currentTime = currentProcess.getArrival();
//                }
//                schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
//                        currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()));
//            }
//        }
//        return schedule;
//    }
//
//	
//}


//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//public class Rr {
//
//    @PostMapping("/round_robin")
//    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
//        List<ProcessModel> schedule = new ArrayList<>();
//        List<ProcessModel> readyQueue = new ArrayList<>();
//        int currentTime = 0;
//
//        for (ProcessModel process : processesList) {
//            readyQueue.add(process);
//        }
//
//        readyQueue.sort((p1, p2) -> p1.getArrival() - p2.getArrival());
//
//        while (!readyQueue.isEmpty()) {
//            ProcessModel currentProcess = readyQueue.remove(0);
//
//            if (currentProcess.getArrival() <= currentTime) {
//                int waitingTime = currentTime - currentProcess.getArrival();
//                currentProcess.setWaitingTime(waitingTime);
//
//                if (currentProcess.getBurst() <= currentProcess.getTimeQuantum()) {
//                    currentTime += currentProcess.getBurst();
//                    currentProcess.setCompletionTime(currentTime);
//                } else {
//                    currentTime += currentProcess.getTimeQuantum();
//                    currentProcess.setBurst(currentProcess.getBurst() - currentProcess.getTimeQuantum());
//                    readyQueue.add(currentProcess);
//                }
//            } else {
//                readyQueue.add(currentProcess);
//                currentTime = currentProcess.getArrival();
//            }
//
//            schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
//                    currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()));
//        }
//
//        return schedule;
//    }
//}
//
//@RestController
//public class Rr {
//
//    @PostMapping("/round_robin")
//    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
//        List<ProcessModel> schedule = new ArrayList<>();
//        List<ProcessModel> readyQueue = new ArrayList<>();
//        int currentTime = 0;
//
//        // add process to ready queue
//        for (ProcessModel process : processesList) {
//            readyQueue.add(process);
//        }
//
//        // sort on arrival time
//        readyQueue.sort(Comparator.comparingInt(ProcessModel::getArrival));
//
//        while (!readyQueue.isEmpty()) {
//            ProcessModel currentProcess = readyQueue.remove(0);
//
//            if (currentProcess.getArrival() <= currentTime) {
//                if (currentProcess.getBurst() <= currentProcess.getTimeQuantum()) {
//                    currentTime += currentProcess.getBurst();
//                    currentProcess.setCompletionTime(currentTime);
//                } else {
//                    currentTime += currentProcess.getTimeQuantum();
//                    currentProcess.setBurst(currentProcess.getBurst() - currentProcess.getTimeQuantum());
//                    readyQueue.add(currentProcess);
//                }
//                currentProcess.setWaitingTime(currentTime - currentProcess.getArrival() - currentProcess.getBurst());
//            } else {
//                readyQueue.add(currentProcess);
//                currentTime = currentProcess.getArrival();
//            }
//            schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
//                    currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()));
//        }
//        return schedule;
//    }
//
//}
//

//@RestController
//public class Rr {
//
//    @PostMapping("/round_robin")
//    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
//        List<ProcessModel> schedule = new ArrayList<>();
//        List<ProcessModel> readyQueue = new ArrayList<>();
//        int currentTime = 0;
//        int totalWaitingTime = 0;
//        int totalTurnaroundTime = 0;
//
//        // add process to ready queue
//        for (ProcessModel process : processesList) {
//            readyQueue.add(process);
//        }
//
//        // sort on arrival time
//        readyQueue.sort(Comparator.comparingInt(ProcessModel::getArrival));
//
//        while (!readyQueue.isEmpty()) {
//            ProcessModel currentProcess = readyQueue.remove(0);
//
//            if (currentProcess.getArrival() <= currentTime) {
//                if (currentProcess.getBurst() <= 2) { // Time quantum is 2 units
//                    currentTime += currentProcess.getBurst();
//                    currentProcess.setCompletionTime(currentTime);
//                } else {
//                    currentTime += 2; // Time quantum
//                    currentProcess.setBurst(currentProcess.getBurst() - 2); // Deduct time quantum
//                    readyQueue.add(currentProcess);
//                }
//                totalWaitingTime += (currentTime - currentProcess.getArrival() - currentProcess.getBurst());
//                totalTurnaroundTime += (currentTime - currentProcess.getArrival());
//            } else {
//                readyQueue.add(currentProcess);
//                currentTime = currentProcess.getArrival();
//            }
//            schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
//                    currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()));
//        }
//
////        double avgWaitingTime = (double) totalWaitingTime / processesList.size();
////        double avgTurnaroundTime = (double) totalTurnaroundTime / processesList.size();
//
//        return schedule;
//    }
//}

@RestController
public class Rr {

    @PostMapping("/round_robin")
    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processesList) {
        List<ProcessModel> schedule = new ArrayList<>();
        List<ProcessModel> readyQueue = new ArrayList<>();
        int currentTime = 0;

        // add process to ready queue
        for (ProcessModel process : processesList) {
            readyQueue.add(process);
        }

        // sort on arrival time
        readyQueue.sort(Comparator.comparingInt(ProcessModel::getArrival));

        while (!readyQueue.isEmpty()) {
            ProcessModel currentProcess = readyQueue.remove(0);

            if (currentProcess.getArrival() <= currentTime) {
                if (currentProcess.getBurst() <= 2) { // Time quantum is 2 units
                    currentTime += currentProcess.getBurst();
                    currentProcess.setCompletionTime(currentTime);
                } else {
                    currentTime += 2; // Time quantum
                    currentProcess.setBurst(currentProcess.getBurst() - 2); // Deduct time quantum
                    readyQueue.add(currentProcess);
                }
                int turnaroundTime = currentTime - currentProcess.getArrival();
                currentProcess.setTurnaroundTime(turnaroundTime);
                currentProcess.setWaitingTime(turnaroundTime - currentProcess.getBurst());
            } else {
                readyQueue.add(currentProcess);
                currentTime = currentProcess.getArrival();
            }
            schedule.add(new ProcessModel(currentProcess.getProcess(), currentProcess.getArrival(),
                    currentProcess.getBurst(), currentProcess.getWaitingTime(), currentProcess.getCompletionTime()
                    ));
        }

        return schedule;
   
    }
        		
}