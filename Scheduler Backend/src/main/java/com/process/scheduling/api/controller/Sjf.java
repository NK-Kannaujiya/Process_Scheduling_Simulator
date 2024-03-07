package com.process.scheduling.api.controller;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.process.scheduling.api.model.ProcessModel;

@Controller
public class Sjf {

    @PostMapping("/shortest_job_first")
    public List<ProcessModel> receiveProcessData(@RequestBody List<ProcessModel> processList) {
        List<ProcessModel> resultList = new ArrayList<>();

        // Sort the processes based on arrival time
        processList.sort(Comparator.comparingInt(ProcessModel::getArrival));

        int currentTime = 0;
        while (!processList.isEmpty()) {
            ProcessModel shortestJob = null;
            int shortestJobIndex = -1;
            int shortestBurst = Integer.MAX_VALUE;

            // Find the process with the shortest burst time that has arrived
            for (int i = 0; i < processList.size(); i++) {
                ProcessModel process = processList.get(i);
                if (process.getArrival() <= currentTime && process.getBurst() < shortestBurst) {
                    shortestJob = process;
                    shortestJobIndex = i;
                    shortestBurst = process.getBurst();
                }
            }

            if (shortestJob != null) {
                // Process the shortest job
                resultList.add(new ProcessModel(shortestJob.getProcess(), shortestJob.getArrival(), shortestJob.getBurst(),
                        currentTime - shortestJob.getArrival(), currentTime + shortestJob.getBurst()));
                currentTime += shortestJob.getBurst();
                processList.remove(shortestJobIndex);
            } else {
                // If no process has arrived yet, move the current time to the arrival time of the next process
                currentTime = processList.get(0).getArrival();
            }
        }

        return resultList;
    }
}
