import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,  FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   loginform:FormGroup;
   constructor ( public fb:FormBuilder, private router:Router ){
      this.loginform=this.fb.group({
        username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
        password:['',[Validators.required,Validators.minLength(8)]]
      })
      console.log(this.loginform)
   }

   login(){
    this.router.navigate(['/home'])
   }

}
