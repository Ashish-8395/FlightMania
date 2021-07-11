import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {


  
  constructor(private router: Router) {}


  
  ngOnInit(): void {
  }

  login() {
   
    this.router.navigate(['/']);

     

  }
}
