package com.stackroute.medicine.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.medicine.model.Medicine;
import com.stackroute.medicine.repository.MedicineRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class MedicineController {
	 @Autowired
	    private MedicineRepository medicineRepository;

	    @GetMapping("medicine")
	    public List < Medicine > getMedicine() {
	        return this.medicineRepository.findAll();
	    }
}
