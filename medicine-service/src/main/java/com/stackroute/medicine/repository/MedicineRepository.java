package com.stackroute.medicine.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stackroute.medicine.model.Medicine;
@Repository 
public interface MedicineRepository extends JpaRepository<Medicine, Integer> {

}
