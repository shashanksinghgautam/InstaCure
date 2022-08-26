package com.stackroute.controller;

import com.stackroute.consumerRabbitMq.MessageListener;
import com.stackroute.model.Email;
import com.stackroute.model.UserEntity;
import com.stackroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private MessageListener ml;
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping ("welcome")
    public String welcome(){
        return "this is my email api";
    }

   /* @PostMapping("getEmails")
    public void getEmails(@RequestBody List<UserEntity> emails){
         this.list=emails;
         System.out.println(this.list);
    }*/

    @PostMapping("send")
    public ResponseEntity<?>sendEmail(@RequestBody Email email){
        List<UserEntity>list= ml.getEmailList();
        System.out.println(list);
        this.emailService.sendEmail(email,list);
        System.out.println(email);
        return ResponseEntity.ok("successfully sent => "+email.getTo());
    }
}
