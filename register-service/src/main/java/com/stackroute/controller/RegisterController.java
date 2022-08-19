package com.stackroute.controller;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.model.UserEntity;
import com.stackroute.rabbitMQconfig.UserConfiguration;
import com.stackroute.service.RegisterService;

    @RestController
    @RequestMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public class RegisterController {
    	
    	  @Autowired
    	    private RabbitTemplate template;

        @Autowired
        private RegisterService registerService;
        
     

        @PostMapping("register")
        public ResponseEntity<UserEntity> register(@RequestBody UserEntity newUser) throws Exception {

            //Cheking for existing User by email, if found then throw exception
            String tempEmail=newUser.getEmail();
            if(tempEmail!=null && !tempEmail.isEmpty()) {
              UserEntity user =  registerService.getByEmail(tempEmail);
                if(user!=null){
                    throw new Exception("This Email Already Exists");
                }
            }

            //Cheking for existing User by mobile, if found then throw exception
            long tempMobile=newUser.getMobile();
            if(tempMobile!=0L) {
                UserEntity user =  registerService.getByMobile(tempMobile);
                if(user!=null){
                    throw new Exception("This Mobile Already Exists");
                }
            }
            
           
            
         

            
            // If not present then storing it in Db.
            UserEntity user = this.registerService.saveUser(newUser);
            template.convertAndSend(UserConfiguration.EXCHANGE,
            		UserConfiguration.ROUTING_KEY, user);
            return new ResponseEntity<UserEntity>(user, HttpStatus.OK);
        }
        @PostMapping("login")
        public ResponseEntity<UserEntity> login(@RequestBody UserEntity user) throws Exception {

            String tempEmail= user.getEmail(), tempPass= user.getPassword(), tempRole=user.getRole();

            UserEntity tempUser=null;
            if(tempEmail!=null && tempPass!=null && tempRole!=null) {
                tempUser=registerService.getByEmailAndPasswordAndRole(tempEmail,tempPass,tempRole);
            }
            if(tempUser==null){
                throw new Exception("User Doesn't Exist");
            }
            return new ResponseEntity<UserEntity>(tempUser, HttpStatus.OK);
        }

    }

