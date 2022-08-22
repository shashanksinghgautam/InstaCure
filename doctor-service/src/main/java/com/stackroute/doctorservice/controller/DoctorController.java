package com.stackroute.doctorservice.controller;

import com.stackroute.doctorservice.consumerRabbitMq.ProfileConsumer;
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
    @Autowired
    private ProfileConsumer pc;

    @PostMapping("/add")
    public ResponseEntity<?> addDetails(@RequestBody DoctorProfile doctor) {
        if(pc.returnUserToProfile().getRole().equals("Doctor")) {
        	DoctorProfile doc = new DoctorProfile();
            doc.setUser(pc.returnUserToProfile());
            doc.setId(pc.returnUserToProfile().getId());
            DoctorProfile user = this.service.addNew(doc);
            
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Role and Profile not matching", HttpStatus.BAD_REQUEST);
        }
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
