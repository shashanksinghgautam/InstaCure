package com.stackroute.doctorservice.controller;

import com.stackroute.doctorservice.model.DoctorProfile;
import com.stackroute.doctorservice.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
    @Autowired
    private DoctorService service;

    @PostMapping("/add")
    public ResponseEntity<DoctorProfile> addDetails(@RequestBody DoctorProfile doctor) {
        DoctorProfile user = this.service.addNew(doctor);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @GetMapping("/get")
    public List<DoctorProfile> getAllDoctors() {
        return this.service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<DoctorProfile> get(@PathVariable(value = "id") int id) {
        DoctorProfile doctor = this.service.getById(id);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

}
