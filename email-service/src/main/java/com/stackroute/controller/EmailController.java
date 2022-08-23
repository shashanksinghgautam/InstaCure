package com.stackroute.controller;

import com.stackroute.model.Email;
import com.stackroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping ("welcome")
    public String welcome(){
        return "this is my email api";
    }

    @PostMapping("send")
    public ResponseEntity<?>sendEmail(@RequestBody Email email){
        this.emailService.sendEmail(email);
        System.out.println(email);
        return ResponseEntity.ok("successfully sent => "+email.getTo());
    }
}
