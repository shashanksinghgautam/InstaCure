package com.stackroute.volunteer.service;

import java.util.List;

import com.stackroute.volunteer.model.Volunteer;

public interface VolunteerService {
	public List<Volunteer> getAll();
	public Volunteer addNew(Volunteer emp) ;
	public Volunteer getById(int id);
}
