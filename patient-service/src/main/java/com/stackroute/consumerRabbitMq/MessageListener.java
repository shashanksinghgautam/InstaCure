package com.stackroute.consumerRabbitMq;



import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.configuration.UserConfiguration;
import com.stackroute.entity.PatientProfile;
import com.stackroute.entity.UserEntity;
import com.stackroute.repository.PatientRepository;
import com.stackroute.service.PatientService;

@Component
public class MessageListener {
	
	@Autowired
    private PatientRepository PatientRepo;
 	
 	@Autowired
    private PatientService docser;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) {
    	if(newUser.getRole().contains("Patient")) {
    	PatientProfile Patient = new PatientProfile();
    	
    	System.out.println(newUser.getUname());

    	Patient.setId(newUser.getId());

    	Patient.setUser(newUser);
    	final PatientProfile updatedPatient = PatientRepo.save(Patient);
    	}
    	else {
        System.out.println(newUser.getEmail());
    }
    }
}