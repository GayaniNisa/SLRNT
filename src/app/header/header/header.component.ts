import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isLoggedIn:boolean=false;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrent()
    .subscribe(
      data=>{
        console.log(data)
        this.isLoggedIn=true
        console.log(this.isLoggedIn)

      },
      error=>{
        this.isLoggedIn=false
      }
    )
  }

  onLogout(){
    this.authService.logout()
    this.isLoggedIn=false
  }

  ngOnDestroy(){
  }
}
