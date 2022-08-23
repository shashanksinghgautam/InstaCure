package com.stackroute.service;

import com.stackroute.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class EmailServiceImp implements EmailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    public EmailServiceImp(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendEmail(Email email) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("instacureapp@gmail.com");
        msg.setTo(email.getTo());
        msg.setSubject(email.getSubject());
        msg.setText(email.getMessage());
        javaMailSender.send(msg);



    }
}
