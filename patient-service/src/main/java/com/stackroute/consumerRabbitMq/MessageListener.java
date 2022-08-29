package com.stackroute.consumerRabbitMq;



import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.configuration.UserConfiguration;
import com.stackroute.entity.PatientProfile;
import com.stackroute.entity.UserEntity;
import com.stackroute.execptions.ResourceNotFoundException;
import com.stackroute.repository.PatientRepository;
import com.stackroute.service.PatientService;

@Component
public class MessageListener {
	
	@Autowired
    private PatientRepository PatientRepo;
 	
 	@Autowired
    private PatientService docser;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) throws ResourceNotFoundException {
    	if(newUser.getRole().contains("Patient")) {
    		PatientProfile PatientProfile = PatientRepo.findById(newUser.getId())
    				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + newUser.getId()));
    	
    	System.out.println(newUser.getUname());

    	PatientProfile.setId(newUser.getId());

    	PatientProfile.setUser(newUser);
    	final PatientProfile updatedPatient = PatientRepo.save(PatientProfile);
    	}
    	else {
        System.out.println(newUser.getEmail());
    }
    }
}