import { Component, OnInit } from '@angular/core';
import {IUser} from '../../model/IUser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  public user: IUser = {
    name : '',
    email : '',
    password : ''
  };
  // @ts-ignore
  public errMSG: string;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // register
  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  public submitRegister(){
    this.userService.register(this.user).subscribe((data) => {
      this.router.navigate(['/login']);
    }, (err) => {
      this.errMSG = err.error.msg;
    });
  }
}
