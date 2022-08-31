package com.stackroute.doctorservice.controller;


import java.util.List;

import com.stackroute.doctorservice.execptions.ResourceNotFoundException;
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
import com.stackroute.doctorservice.model.DoctorProfile;
import com.stackroute.doctorservice.repository.DoctorRepository;
import com.stackroute.doctorservice.service.DoctorService;


@RestController
@RequestMapping(value = "/doctor")
@CrossOrigin(origins = "*")
public class DoctorController {
    @Autowired
    private DoctorService service;

    @Autowired
    private DoctorRepository VolunteerRepo;

    @GetMapping("welcome")
    public String welcome() {
        return "this is my Doctor api";
    }

    @PostMapping("add")
    public ResponseEntity<DoctorProfile> addNewHandler(@RequestBody DoctorProfile DoctorProfile) {
        return new ResponseEntity<DoctorProfile>(service.addNew(DoctorProfile), HttpStatus.CREATED);

    }

    @PutMapping("DoctorProfile/{id}")
    public ResponseEntity<DoctorProfile> updateVolunteer(@PathVariable(value = "id") int Id, @Validated @RequestBody DoctorProfile Doctor) throws ResourceNotFoundException {
        DoctorProfile DoctorProfile = VolunteerRepo.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found for this id :: " + Id));


        DoctorProfile.setAddress(Doctor.getAddress());
        DoctorProfile.setCity(Doctor.getCity());
        DoctorProfile.setState(Doctor.getState());
        DoctorProfile.setPostalCode(Doctor.getPostalCode());
        DoctorProfile.setDob(Doctor.getDob());
        DoctorProfile.setEducationQualifiaction(Doctor.getEducationQualifiaction());
        DoctorProfile.setYearOfExpertise(Doctor.getYearOfExpertise());
        DoctorProfile.setSpeciality(Doctor.getSpeciality());
        final DoctorProfile DoctorProfile1 = VolunteerRepo.save(DoctorProfile);
        return ResponseEntity.ok(DoctorProfile1);
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
