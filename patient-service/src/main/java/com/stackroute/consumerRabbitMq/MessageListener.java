package com.stackroute.consumerRabbitMq;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.stackroute.configuration.UserConfiguration;
import com.stackroute.entity.PatientProfile;
import com.stackroute.entity.UserEntity;
import com.stackroute.repository.PatientRepository;
import com.stackroute.service.PatientService;

import java.util.Optional;

@Component
public class MessageListener {

	@Autowired
    private PatientRepository PatientRepo;

 	@Autowired
    private PatientService docser;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) {

    	if(newUser.getRole().contains("Patient")) {
			if (PatientRepo.findById(newUser.getId()) == null) {
				PatientProfile Patient = new PatientProfile();
				System.out.println(newUser.getUname());
				Patient.setId(newUser.getId());
				Patient.setUser(newUser);
				final PatientProfile updatedPatient = PatientRepo.save(Patient);
			}

    	else {
			Optional<PatientProfile> Patient=PatientRepo.findById(newUser.getId());
			Patient.get().setId(newUser.getId());
			Patient.get().setUser(newUser);
			PatientRepo.save(Patient.get());
            System.out.println(newUser.getEmail());
      }
		}
    }
}