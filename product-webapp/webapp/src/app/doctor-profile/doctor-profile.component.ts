import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Event } from '@angular/router';
import Swal from 'sweetalert2';
import { Doctor } from './Doctor';
import { DoctorService } from './doctor-profile.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent implements OnInit {
  id!: number;
  Doctor = new Doctor();
  Doctors: any[] = [];
  userfile: any = File;

  submitted = false;
  Checked: any;
  medcheck: any;
  otherSymp: any;
  selectedItemsList: any[] = [];
  medcond: any[] = [];
  precon: any[] = [];

  file!: File;
  imageError!: string;
  isImageSaved!: boolean;
  cardImageBase64!: string;

  selectedFile!: File;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.Doctor = new Doctor();

    this.id = this.route.snapshot.params['id'];

    this.doctorService.getDoctor(this.id).subscribe(
      (data: any) => {
        // console.log(data);
        this.Doctor = data;
      },
      (error: any) => console.log(error)
    );
    this.reloadData();
  }
  reloadData() {
    this.doctorService.getDoctor(this.id).subscribe((data) => {
      this.Doctors.push(data);
      // console.log(data);
    });
  }

  onsubmit() {
    this.submitted = true;
    this.updateDoctor();

    this.router.navigate(['doctor-display', this.id]);
  }
  updateDoctor() {
    this.doctorService.updateDoctor(this.id, this.Doctor).subscribe(
      (data: any) => {
        console.log(this.Doctor);
        // this.Doctor = new Doctor();
        this.gotoList();
        console.log(this.Doctor);
        
      },
      (error: any) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['doctor-display', this.id]);
  }
  getFiles(event: any) {
    let f: any = event.target as HTMLElement;

    this.file = (f.files as FileList)[0];
    console.log(this.file);
  }

  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  clearStorage() {
    Swal.fire(
      'Successfully logged out',
      'Click on Login Button to Login',
      'success'
    );
    localStorage.clear();
  }
}
