package com.stackroute.controller;

import com.stackroute.consumerRabbitMq.ProfileConsumer;
import com.stackroute.entity.PatientProfile;
import com.stackroute.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/patient")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
    @Autowired
    private PatientService service;
    @Autowired
    ProfileConsumer consumer;

    @PostMapping("/add")
    public ResponseEntity<?> addDetails(@RequestBody PatientProfile patient) {

        if(consumer.returnUserToProfile().getRole().equals("Patient")) {
            patient.setUser(consumer.returnUserToProfile());
            patient.setId(consumer.returnUserToProfile().getId());
            PatientProfile user = this.service.addNew(patient);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else return new ResponseEntity<>("Role and Profile not match", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get")
    public List<PatientProfile> getAllPatients() {
        return this.service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PatientProfile> get(@PathVariable(value = "id") int id) {
        PatientProfile patient = this.service.getById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }


}
