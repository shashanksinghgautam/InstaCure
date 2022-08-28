package com.stackroute.registerservice;

import com.stackroute.model.UserEntity;
import com.stackroute.repository.RegisterRepository;
import com.stackroute.service.RegisterService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.Assert.assertNotNull;

@SpringBootTest
class RegisterServiceApplicationTests {

    @Autowired
    private RegisterRepository repo;
    @Autowired
    private RegisterService service;

    @Test
    public void testSaveUserBySettingANewUser() {
        Optional<UserEntity> opt = repo.findById(16);
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);
    }

    @Test
    public void testRepoFindByEmail() {
        Optional<UserEntity> opt = Optional.ofNullable(repo.findByEmail("on5@gmail.com"));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        UserEntity temp1 = repo.findByEmail("on125@gmail.com");
        assertNull(temp1);

    }

    @Test
    public void testRepoFindByMobile() {
        Optional<UserEntity> opt = Optional.ofNullable(repo.findByMobile(1117680363));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        UserEntity temp1 = repo.findByMobile(123325648);
        assertNull(temp1);

    }

    @Test
    public void testRepoFindByEmailAndPasswordAndRole() {
        Optional<UserEntity> opt = Optional.ofNullable(repo.findByEmailAndPasswordAndRole("shashanksamsungon5@gmail.com", "123456", "Volunteer"));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        UserEntity temp1 = repo.findByEmailAndPasswordAndRole(" shashanksamsungon5@gmail.com", "123356", "Volunteer");
        assertNull(temp1);

    }

    @Test
    public void testServiceGetByEmailAndPasswordAndRole() {
        Optional<UserEntity> opt = Optional.ofNullable(service.getByEmailAndPasswordAndRole("shashanksamsungon5@gmail.com", "123456", "Volunteer"));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        UserEntity temp1 = service.getByEmailAndPasswordAndRole(" shashanksamsungon5@gmail.com", "123356", "Volunteer");
        assertNull(temp1);

    }
    @Test
    public void testServiceGetByEmail() {
        Optional<UserEntity> opt = Optional.ofNullable(service.getByEmail("shashanksamsungon5@gmail.com"));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        UserEntity temp1 = service.getByEmail(" shashanksamsungon5@gmail.com ");
        assertNull(temp1);

    }
    @Test
    public void testServiceGetByMobile() {
        Optional<UserEntity> opt = Optional.ofNullable(service.getByMobile(1007680363));
        UserEntity temp = opt.get();
        System.out.println(temp.toString());
        assertNotNull(temp);

        assertEquals(1007680363,temp.getMobile());

        UserEntity temp1 = service.getByMobile(1007330363);
        assertNull(temp1);

    }
}
