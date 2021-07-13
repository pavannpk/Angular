import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubQuery:string = "";
  public gitProfile:any;
  public gitRepos:any;
  public errorMSG:string = "";
  constructor(private githubService: GithubService) { }

  public searchUser(){

    this.githubService.getProfile(this.githubQuery).subscribe((data) => {
      this.gitProfile = data;
    }, error => (err:any) => {
      this.errorMSG = err;
    });

    //to get the github profile
    this.githubService.getRepos(this.githubQuery).subscribe((data) => {
      this.gitRepos = data;
    }, error => (err:any) => {
      this.errorMSG = err;
    });


  }
  ngOnInit(): void {
  }

}
