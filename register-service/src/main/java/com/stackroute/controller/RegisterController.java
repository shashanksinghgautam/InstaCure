package com.stackroute.controller;

import com.stackroute.model.UserEntity;
import com.stackroute.service.RegisterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

    @RestController
    @RequestMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public class RegisterController {

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
            return new ResponseEntity<UserEntity>(user, HttpStatus.OK);
        }
        @PostMapping("login")
        public ResponseEntity<UserEntity> login(@RequestBody UserEntity user) throws Exception {

            String tempEmail= user.getEmail(), tempPass= user.getPassword();

            UserEntity tempUser=null;
            if(tempEmail!=null && tempPass!=null) {
                tempUser=registerService.getByEmailAndPassword(tempEmail,tempPass);
            }
            if(tempUser==null){
                throw new Exception("User Doesn't Exist");
            }
            return new ResponseEntity<UserEntity>(tempUser, HttpStatus.OK);
        }

    }

