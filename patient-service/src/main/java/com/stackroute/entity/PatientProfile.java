package com.stackroute.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;

import javax.persistence.Id;

@Document("PatientProfile")
public class PatientProfile {
    @Id
    @Column(name = "id", nullable = false)
    private int id;

    private String email;
    private long mobile;
    private String address;
    private String dob;
    private String city;
    private int postalCode;

    public PatientProfile() {
    }

    public PatientProfile(int id, String email, long mobile, String address, String dob, String city, int postalCode) {
        this.id = id;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.dob = dob;
        this.city = city;
        this.postalCode = postalCode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getMobile() {
        return mobile;
    }

    public void setMobile(long mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }
}
