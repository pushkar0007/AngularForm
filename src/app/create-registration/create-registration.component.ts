import { Component, OnInit } from '@angular/core';
import { UserDetails } from './user-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.css']
})
export class CreateRegistrationComponent implements OnInit {
  firstName:string='';
  lastName:string='';
  phone:number=0;
  password:string='';
  endPoint="http://localhost/create.php"
  //headers:any;

  //user:UserDetails ; 
  private user: UserDetails = new UserDetails();

  constructor(private http:HttpClient) { 
  
    
  }

  ngOnInit() {
    
  }
  setUserFormDetails(){
    this.user.firstName=this.firstName;
    this.user.lastName=this.lastName;
    this.user.password=this.password;
    this.user.phone=this.phone;

  }
  create(){
    this.setUserFormDetails()
    //console.log(this.firstName+ " "+this.lastName +" "+ this.password+" "+ this.phone);
   // const headers = new HttpHeaders().set('Content-type','text/plain; charset=utf-8');
    console.log(this.user);
    return this.http.post(this.endPoint,this.user).subscribe(
      data  => {
        console.log("POST Request is successful ", data);
      },
      error  => {
        console.log("Error", error);
      }
      );
      
  }

}
