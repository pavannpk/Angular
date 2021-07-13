import { Component, OnInit } from '@angular/core';
import {IUser} from '../../model/IUser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  // login
  // tslint:disable-next-line:typedef
  public submitLogin(){
    // login logic
    this.userService.login(this.user).subscribe((data) => {
      // store the token in browser local storage
      // @ts-ignore
      localStorage.setItem('token', data.token);


      // get the user info
      // tslint:disable-next-line:no-shadowed-variable
      this.userService.getUserInfo().subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data));
      });

      this.router.navigate(['/events/pro']);
    }, (err) => {
      this.errMSG = err.error.msg;
    });
  }
}
