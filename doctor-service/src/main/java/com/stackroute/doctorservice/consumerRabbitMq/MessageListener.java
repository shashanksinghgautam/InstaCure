package com.stackroute.doctorservice.consumerRabbitMq;



import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.doctorservice.*;
import com.stackroute.doctorservice.configuration.UserConfiguration;
import com.stackroute.doctorservice.model.DoctorProfile;
import com.stackroute.doctorservice.model.UserEntity;
import com.stackroute.doctorservice.repository.DoctorRepository;
import com.stackroute.doctorservice.service.DoctorService;

@Component
public class MessageListener {
	
	@Autowired
    private DoctorRepository DoctorRepo;
 	
 	@Autowired
    private DoctorService docser;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) {
    	if(newUser.getRole().contains("Doctor")) {
    	DoctorProfile Doctor = new DoctorProfile();
    	
    	System.out.println(newUser.getUname());

    	Doctor.setId(newUser.getId());

    	Doctor.setUser(newUser);
    	final DoctorProfile updatedDoctor = DoctorRepo.save(Doctor);
    	}
    	else {
        System.out.println(newUser.getEmail());
    }
    }
}