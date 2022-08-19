package com.stackroute.volunteer.controller;



import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.volunteer.config.UserConfiguration;
import com.stackroute.volunteer.model.Volunteer;
import com.stackroute.volunteer.repository.VolunteerRepository;
import com.stackroute.volunteer.service.VolunteerService;
import com.stackroute.volunteer.template.UserEntity;

@Component
public class MessageListener {
	
	@Autowired
    private VolunteerRepository VolunteerRepo;
 	
 	@Autowired
    private VolunteerService VolunteerService;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) {
    	if(newUser.getRole().contains("Volunteer")) {
    	Volunteer Volunteer = new Volunteer();
    	
    	System.out.println(newUser.getUname());
//    	System.out.println(newUser.getId());
//    	Volunteer.setVid(newUser.getId());
//    	Volunteer.setVmobile(newUser.getMobile());
//    	Volunteer.setVname(newUser.getUname());
//    	Volunteer.setvemail(newUser.getEmail()); 
    	Volunteer.setUser(newUser);
    	final Volunteer updatedVolunteer = VolunteerRepo.save(Volunteer);
    	}
    	else {
        System.out.println(newUser.getEmail());
    }
    }
}