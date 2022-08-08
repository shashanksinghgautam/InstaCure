package com.stackroute.medicine.model;

import java.awt.Image;



public class Medicine{ 
	public Medicine() {
		super();
	}
public Medicine(String medicinename, int qnt, int price, Image mimage) {
		super();
		this.medicinename = medicinename;
		this.qnt = qnt;
		this.price = price;
		this.mimage = mimage;
	}
private String medicinename;
private int qnt;
private int price;
private Image mimage;
public String getMedicinename() {
	return medicinename;
}
public void setMedicinename(String medicinename) {
	this.medicinename = medicinename;
}
public int getQnt() {
	return qnt;
}
public void setQnt(int qnt) {
	this.qnt = qnt;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public Image getMimage() {
	return mimage;
}
public void setMimage(Image mimage) {
	this.mimage = mimage;
}

}
