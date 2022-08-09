package com.stackroute.Controller;

import com.stackroute.Model.RegisterEntity;
import com.stackroute.Service.RegisterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

    @RestController
    @RequestMapping("/user")
    public class RegisterController {

        @Autowired
        private RegisterService registerService;

        @PostMapping("/register")
        public ResponseEntity<String> register(@RequestBody RegisterEntity newUser) {
            RegisterEntity user = this.registerService.saveUser(newUser);

            return new ResponseEntity<String>("SUCCESSFULLY-STORED-IN-DB", HttpStatus.OK);
        }

    }

