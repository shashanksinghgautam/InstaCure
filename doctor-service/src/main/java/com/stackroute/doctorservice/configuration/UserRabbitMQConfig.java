package com.stackroute.doctorservice.configuration;

import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserRabbitMQConfig {

    @Bean
    MessageConverter converter(){
        return new Jackson2JsonMessageConverter();
    }
}
