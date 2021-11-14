import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public apiMessage: String='';
  public formData: any = {};
  public showMessage: boolean = false;

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ]);

  loginForm : FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  })

  constructor(private builder: FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  registerUser(): void{
    this.formData = this.loginForm.value;
    this.loginService.loginPost(this.formData).subscribe((item)=>{      
      //alert('Service Ok');
      //console.log(item);
      this.apiMessage = item.message;
    },
    (error)=>{
      alert('Error Found');
    });
    this.showMessage = true;
    this.reset();
  }

  public reset(): void{
    this.formData = {};
  }

}
