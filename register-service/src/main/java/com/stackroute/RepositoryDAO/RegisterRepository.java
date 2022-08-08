package com.stackroute.RepositoryDAO;

import com.stackroute.Model.RegisterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<RegisterEntity,Integer> {

}
