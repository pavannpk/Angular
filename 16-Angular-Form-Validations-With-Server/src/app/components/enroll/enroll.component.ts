import { Component, OnInit } from '@angular/core';
import {UserEnroll} from '../../model/userEnroll';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  public user: UserEnroll = {
    name: '',
    email: '',
    password: '',
    course: ''
  };

  public courses: string[] = ['Angular', 'Node', 'Mongo', 'React'];
  // @ts-ignore
  public isEmpty: boolean;
  // @ts-ignore
  public isSubmitted: boolean;
  // @ts-ignore
  public message: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  // submit form
  // tslint:disable-next-line:typedef
  public submitEnroll(){
    if (this.user.name !== '' && this.user.email !== '' && this.user.password !== '' && this.user.course !== ''){
      this.isEmpty = false;
      this.userService.enroll(this.user).subscribe((data) => {
        this.message = data.msg;
        this.isSubmitted = true;
      });
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
    }
  }

}
