import { Component, OnInit } from '@angular/core';
import {UserEnroll} from '../../model/userEnroll';
import {FormBuilder, Validators} from '@angular/forms';
import {UserNameValidator} from './validators/userNameValidator';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public courses: string[] = ['Angular', 'Node', 'Mongo', 'React'];

  // @ts-ignore
  public isEmpty: boolean;
  // @ts-ignore
  public isSubmitted: boolean;
  // @ts-ignore
  public message: string;

  // lets declare form builder from angular
  constructor(private formbuilder: FormBuilder,
              private userService: UserService) { }

  public registrationForm = this.formbuilder.group({
    userName: ['', [Validators.required, UserNameValidator.noSpecialCharacters] ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, UserNameValidator.noSpecialCharacters]],
    course: ['', [Validators.required]]
  });


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public getUsername(){
    return this.registrationForm.get('userName');
  }
  // tslint:disable-next-line:typedef
  public getEmail(){
    return this.registrationForm.get('email');
  }
  // tslint:disable-next-line:typedef
  public getPassword(){
    return this.registrationForm.get('password');
  }
  // tslint:disable-next-line:typedef
  public getCourse(){
    return this.registrationForm.get('course');
  }

  // tslint:disable-next-line:typedef
  public submitRegister(){
    // we have to create object
    // @ts-ignore
    const RegisterData: UserEnroll = {
      // @ts-ignore: Object is possibly 'null'.
      name: this.getUsername().value,
      // @ts-ignore: Object is possibly 'null'.
      email: this.getEmail().value,
      // @ts-ignore: Object is possibly 'null'.
      password: this.getPassword().value,
      // @ts-ignore: Object is possibly 'null'.
      course: this.getCourse().value
    };
    if (RegisterData.name !== '' && RegisterData.email !== '' && RegisterData.password !== '' && RegisterData.course !== ''){
      this.isEmpty = false;
      this.userService.enroll(RegisterData).subscribe((data) => {
        this.message = data.msg;
        this.isSubmitted = true;
      });
    }
  else
    {
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }
}
