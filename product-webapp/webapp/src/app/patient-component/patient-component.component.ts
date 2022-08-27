import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/PatientProfile';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-component',
  templateUrl: './patient-component.component.html',
  styleUrls: ['./patient-component.component.css'],
})
export class PatientComponentComponent implements OnInit {
  id!: number;
  Patient: Patient = new Patient();
  Patients:any[]=[]
  userfile:any = File

  submitted = false;

  Checked: any;
  medcheck:any;
  otherSymp:any
  selectedItemsList:any[] = [];
  medcond:any[] = [];
  precon:any[] = [];


  // @ViewChild('patform') public formref!: NgForm;
  constructor(private route: ActivatedRoute,private router: Router,
    private PatientService: PatientService, private http: HttpClient) {
    }

    ngOnInit() {
     this.Patient = new Patient();

      this.id = this.route.snapshot.params['id'];

      this.PatientService.getPatient(this.id)
        .subscribe((data: any) => {
          console.log(data)
          this.Patient = data;
        }, (error: any) => console.log(error));
       this.reloadData()
    }
    reloadData() {

      this.PatientService.getPatient(this.id).subscribe(
       data=>{
         this.Patients.push(data);

       }
     );

   }
    updatePatient() {

      this.PatientService.updatePatient(this.id, this.Patient)
        .subscribe((data: any) => {
          console.log(data);
          this.Patient = new Patient();
          this.gotoList();
        }, (error: any) => console.log(error));
    }



    onSubmit() {
      this.submitted = true;
      this.updatePatient();
      // this.updateimage();
      // this.updateProduct();
      this.router.navigate(['patient-display',this.id]);
    }

    gotoList() {
      this.router.navigate(['patient-display']);
    }
  // ngOnInit(): void {

  //   this.fetchSelectedItems()
  //   this.fetchCheckedIDs()
  // }

  // validate() {

  //   console.log(
  //     'success' +
  //       ' ' +

  //       ' ' +
  //       this.Patient.dob +
  //       ' ' +
  //       this.Patient.address +
  //       ' ' +
  //       this.Patient.city +
  //       ' ' +
  //       this.Patient.postalCode
  //   );

  //   for(let i=0; i<this.selectedItemsList.length; i++){
  //     this.precon.push(this.selectedItemsList[i].label);//use i instead of 0
  //   }

  //   if(this.medcheck){
  //     this.precon.push(this.otherSymp);
  //   }
  //   for(let i=0; i<this.precon.length; i++){
  //     console.log('pre: '+this.precon[i]);
  //   }


  //    this.router.navigate(['patient-display',this.id]);

  // }


  takeOthers(e: any) {
    if (e.target.checked) {
      this.Checked = true;
    }
    else{
      this.Checked=false;
    }
  }



  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Cholestrol',
      isChecked: false
    },

    {
      id: 'C003',
      label: 'Diabetes',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Asthama',
      isChecked: false
    }
  ]



  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.medcond = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.medcond.push(value.id);
      }
    });
  }

  options = [
    "Bangalore",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Delhi"
  ];
  clearStorage(){
    localStorage.clear();
  }

}
