import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor-profile/Doctor';
import { Volunteer } from './volunteer';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  id!: number;
  Volunteer: Volunteer = new Volunteer();
  Volunteers:any[]=[]
  userfile:any = File
  
  submitted = false;
  file!: File;

  imageError!: string;
  isImageSaved!: boolean;
  cardImageBase64!: string;

  selectedFile!: File;

  constructor(private route: ActivatedRoute,private router: Router,
    private VolunteerService: VolunteerService, private http: HttpClient) { }

  ngOnInit() {
    this.Volunteer = new Volunteer();

    this.id = this.route.snapshot.params['id'];
    
    this.VolunteerService.getVolunteer(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.Volunteer = data;
      }, (error: any) => console.log(error));
      this.reloadData()
  }
  reloadData() {
    
    
    this.VolunteerService.getVolunteer(this.id).subscribe(
     data=>{
       this.Volunteers.push(data);
       
     }
   );

  
 }
  updateVolunteer() {
    
    this.VolunteerService.updateVolunteer(this.id, this.Volunteer)
      .subscribe((data: any) => {
        console.log(data);
        this.Volunteer = new Volunteer();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

 
  
  onSubmit() {
    this.submitted = true;
    this.updateVolunteer(); 
    // this.updateimage();
    this.updateProduct();
    alert("DONE")
    this.router.navigate(['volunteer-display',this.id]);   
  }
  
  gotoList() {
    this.router.navigate(['volunteer-display']);
  }

  getFiles(event:any) {
  
    let f:any=event.target as HTMLElement;
    
    
    this.file = (f.files as FileList)[0]
    console.log(this.file );

    
        
    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //     const image = new Image();
    //     image.src = e.target.result;
    //     image.onload = rs => {
        
    //             const imgBase64Path = e.target.result;
    //             this.cardImageBase64 = imgBase64Path;
    //             console.log(imgBase64Path);
                
    //             this.isImageSaved = true;
    //             // this.previewImagePath = imgBase64Path;
    //         }
    //     };
    
    //     console.log(event.target.files[0])
    //   reader.readAsDataURL(event.target.files[0]);
    //     console.log(reader);
        

  }

  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  updateProduct(){
    let fd = new FormData();
    console.log(this.file);
    
    fd.set("imgFile",this.file)
    // fd.append("imgFile",this.file);
    console.log(fd.get("imgFile"));
    
    this.VolunteerService.sendimage(this.id,fd.get("imgFile")).subscribe();
     
    }

    
  }

  









