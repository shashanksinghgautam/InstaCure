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
    private PatientRepository Repo;

	@PostMapping("add")
    public ResponseEntity<PatientProfile> addNewHandler(@RequestBody PatientProfile PatientProfile) {
//    	System.out.println(MedicineService.getAll());
		
			return new ResponseEntity<PatientProfile>(service.addNew(PatientProfile), HttpStatus.CREATED);
		

}
	@PutMapping("patient/{id}")
	public ResponseEntity<PatientProfile> updateVolunteer(@PathVariable(value = "id") int Id,@Validated @RequestBody PatientProfile user) throws AttributeNotFoundException {
		PatientProfile PatientProfile = Repo.findById(Id)
				.orElseThrow(() -> new AttributeNotFoundException("User not found for this id :: " + Id));

		PatientProfile.setAddress(user.getAddress());
		PatientProfile.setCity(user.getCity());
		PatientProfile.setPostalCode(user.getPostalCode());
		final PatientProfile updatedPatient = Repo.save(PatientProfile);
		return ResponseEntity.ok(updatedPatient);
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
