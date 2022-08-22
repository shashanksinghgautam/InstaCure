package com.stackroute.doctorservice.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.persistence.Column;

import javax.persistence.Id;
@Document ("DoctorProfile")
@Data
public class DoctorProfile {
    @Id
    @Column(name = "id", nullable = false)
    private int id;


    private String gender;


    private String address;
    private String dob;
    private String city;
    private String state;
    private int postalCode;
    private String educationqualification;
    private String speciality;
    private String yearofexpertise;



}
