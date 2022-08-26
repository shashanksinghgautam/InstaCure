package com.stackroute.doctorservice.controller;

import java.util.List;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.doctorservice.configuration.UserConfiguration;
import com.stackroute.doctorservice.consumerRabbitMq.ProfileConsumer;
import com.stackroute.doctorservice.model.DoctorProfile;
import com.stackroute.doctorservice.service.DoctorService;

@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {
	@Autowired
	private RabbitTemplate rt;
    @Autowired
    private DoctorService service;
    @Autowired
    private ProfileConsumer pc;

    @PostMapping("/add")
    public ResponseEntity<?> addDetails(@RequestBody DoctorProfile doctor) {
        if(pc.returnUserToProfile().getRole().equals("Doctor")) {
            doctor.setUser(pc.returnUserToProfile());
            doctor.setId(pc.returnUserToProfile().getId());
            DoctorProfile user = this.service.addNew(doctor);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("Role and Profile not matching", HttpStatus.BAD_REQUEST);
        }
    }
   


    @GetMapping("/get")
    public List<DoctorProfile> getAllDoctors() {
    	rt.convertAndSend(UserConfiguration.EXCHANGE, UserConfiguration.ROUTING_KEY, this.service.getAll());
        return this.service.getAll();
        
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<DoctorProfile> get(@PathVariable(value = "id") int id) {
        DoctorProfile doctor = this.service.getById(id);
        return new ResponseEntity<>(doctor, HttpStatus.OK);
    }

}
