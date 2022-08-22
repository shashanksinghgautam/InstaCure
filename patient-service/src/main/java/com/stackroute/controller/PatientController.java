package com.stackroute.controller;


import java.util.List;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.entity.PatientProfile;

import com.stackroute.repository.PatientRepository;
import com.stackroute.service.PatientService;


@RestController
@RequestMapping(value = "/patient")
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
    @Autowired
    private PatientService service;
    @Autowired
    private PatientRepository VolunteerRepo;

	@PostMapping("add")
    public ResponseEntity<PatientProfile> addNewHandler(@RequestBody PatientProfile PatientProfile) {
//    	System.out.println(MedicineService.getAll());
		
			return new ResponseEntity<PatientProfile>(service.addNew(PatientProfile), HttpStatus.CREATED);
		

}
	@PutMapping("Volunteer/{id}")
	public ResponseEntity<PatientProfile> updateVolunteer(@PathVariable(value = "id") int Id,@Validated @RequestBody PatientProfile VolunteerDetails) throws AttributeNotFoundException {
		PatientProfile PatientProfile = VolunteerRepo.findById(Id)
				.orElseThrow(() -> new AttributeNotFoundException("Medicine not found for this id :: " + Id));
	
		
		PatientProfile.setAddress(VolunteerDetails.getAddress());
		PatientProfile.setCity(VolunteerDetails.getCity());
		
		PatientProfile.setPostalCode(VolunteerDetails.getPostalCode());
	
;

	
		final PatientProfile updatedVolunteer = VolunteerRepo.save(PatientProfile);
		return ResponseEntity.ok(updatedVolunteer);
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
