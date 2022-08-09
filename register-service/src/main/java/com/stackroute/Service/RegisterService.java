package com.stackroute.Service;

import com.stackroute.Model.RegisterEntity;
import com.stackroute.RepositoryDAO.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository repo;
    public RegisterEntity saveUser(RegisterEntity newUser) {
        return this.repo.save(newUser);
    }
}
