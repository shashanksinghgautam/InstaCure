package com.stackroute.controller;

import com.stackroute.consumerRabbitMq.MessageListener;
import com.stackroute.model.Email;
import com.stackroute.model.UserEntity;
import com.stackroute.repository.EmailRepository;
import com.stackroute.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private EmailRepository repo;

    @Autowired
    private MessageListener ml;
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @GetMapping ("welcome")
    public String welcome(){
        return "this is my email api";
    }

    @PostMapping("/send")
    public ResponseEntity<?>sendEmail(@RequestBody Email email){
        repo.save(email);
        List<UserEntity>list= ml.getEmailList();
        System.out.println(list.toString());
        this.emailService.sendEmail(email,list);
        email.setTo("VOLUNTEERs");
        System.out.println(email);
        return ResponseEntity.ok("successfully sent => "+email.getTo());
    }

    @GetMapping("/allMails")
    public List<Email> getAllMails(){
        List<Email> list=repo.findAll();
        return list;
    }
}
