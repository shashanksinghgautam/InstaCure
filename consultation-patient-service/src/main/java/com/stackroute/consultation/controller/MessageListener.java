// package com.stackroute.consultation.controller;



// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Component;

// import com.stackroute.consultation.configuration.UserConfiguration;
// import com.stackroute.consultation.entity.UserEntity;
// import com.stackroute.consultation.repository.ConsultationRepository;
// import com.stackroute.consultation.service.ConsultationService;


// @Component
// public class MessageListener {
	
// 	@Autowired
//     private ConsultationRepository crepo;
 	
//  	@Autowired
//  	 private ConsultationService cservice;

//     @RabbitListener(queues = UserConfiguration.QUEUE)
//     public void listener(UserEntity newUser) {
//     	if(newUser.getRole().contains("Volunteer")) {
    
//     	}
//     }
// }