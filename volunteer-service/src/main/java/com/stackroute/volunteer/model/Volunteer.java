package com.stackroute.volunteer.model;

import javax.annotation.Generated;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.stackroute.volunteer.template.UserEntity;

@Document("volunteer")
public class Volunteer {

@Id
private int vid;	

private UserEntity user;


private String city;
private String state;
private String address;
private int zipcode;


public Volunteer(int vid, String city, String state, String address, int zipcode ) {
	super();
	this.vid = vid;

	this.city = city;
	this.state = state;
	this.address = address;
	this.zipcode = zipcode;
	
}
public UserEntity getUser() {
	return user;
}
public void setUser(UserEntity user) {
	this.user = user;
}
public void setmobile(long mbo) {
	this.user.setMobile(mbo);
}
public long getmobile() {
	return this.user.getMobile();
}
public int getVid() {
	return vid;
}
public void setVid(int vid) {
	this.vid = vid;
}

public Volunteer() {
	super();
	
}




public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getZipcode() {
	return zipcode;
}
public void setZipcode(int zipcode) {
	this.zipcode = zipcode;
}

}
