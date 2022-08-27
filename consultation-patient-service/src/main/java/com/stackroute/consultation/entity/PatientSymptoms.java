package com.stackroute.consultation.entity;


import java.time.LocalDateTime;


import org.springframework.data.mongodb.core.mapping.Document;

//@Entity
//@Table(name="Sym")
@Document(value = "PatientSymptoms")
public class PatientSymptoms {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;

    //	@Column(name="sypm")
    private String symptoms;

    //	@Column(name="mnumb")
    private String mobilenumber;

    private String specality;

//	private String dateAndTime;

    public String getSpecality() {
        return specality;
    }

    public void setSpecality(String specality) {
        this.specality = specality;
    }

    public PatientSymptoms(String symptoms, String mobilenumber,String specality) {
        super();
        this.symptoms = symptoms;
        this.mobilenumber = mobilenumber;
        this.specality =specality;
    }

    public PatientSymptoms() {
        super();
        // TODO Auto-generated constructor stub
    }

    public String getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String symptoms) {
        this.symptoms = symptoms;
    }

    public String getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(String mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

//	public String getDateAndTime() {
//		return dateAndTime;
//	}
//
//	public void setDateAndTime(String dateAndTime) {
//		this.dateAndTime = dateAndTime;
//	}
//

}
