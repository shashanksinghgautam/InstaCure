package com.stackroute.doctorservice.consumerRabbitMq;


import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.stackroute.doctorservice.configuration.UserConfiguration;
import com.stackroute.doctorservice.model.DoctorProfile;
import com.stackroute.doctorservice.model.UserEntity;
import com.stackroute.doctorservice.repository.DoctorRepository;
import com.stackroute.doctorservice.service.DoctorService;


import java.util.Optional;


@Component
public class MessageListener {

    @Autowired
    private DoctorRepository DoctorRepo;

    @Autowired
    private DoctorService doctor;

    @RabbitListener(queues = UserConfiguration.QUEUE)
    public void listener(UserEntity newUser) {
        if (newUser.getRole().contains("Doctor")) {
            if (DoctorRepo.findById(newUser.getId()) == null) {
                DoctorProfile Doctor = new DoctorProfile();

                System.out.println(newUser.getUname());

                Doctor.setId(newUser.getId());

                Doctor.setUser(newUser);
                final DoctorProfile updatedDoctor = DoctorRepo.save(Doctor);
            } else {
                Optional<DoctorProfile> Doctor = DoctorRepo.findById(newUser.getId());
                Doctor.get().setId(newUser.getId());
                Doctor.get().setUser(newUser);
                DoctorRepo.save(Doctor.get());
                System.out.println(newUser.getEmail());
            }

        }
    }
}