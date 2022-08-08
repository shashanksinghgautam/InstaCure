package com.stackroute.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "student")
public class RegisterEntity {

    private String uname;
    private String password;
    private String email;
    private int mobile;
    private String role;

    public RegisterEntity(String uname, String password, String email, int mobile, String role) {
        @Id
        this.uname = uname;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
    }

    public RegisterEntity() {
    }
}
