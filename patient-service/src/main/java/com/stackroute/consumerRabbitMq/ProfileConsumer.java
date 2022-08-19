package com.stackroute.consumerRabbitMq;

import com.stackroute.entity.UserEntity;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ProfileConsumer {

    private UserEntity User;

    @RabbitListener(queues = "user_queue")
    public void getUserFromQueue(UserEntity user) {
        this.User = user;
        System.out.println(user);
    }

    public UserEntity returnUserToProfile() {

        return User;
    }

}
