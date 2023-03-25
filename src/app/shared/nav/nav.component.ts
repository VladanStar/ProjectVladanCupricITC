import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  implements OnInit{
constructor(public auth: AuthService){
  this.auth.updateLoginStatus(false);
}
  ngOnInit(): void {
    
  }
  register() {
    this.auth.logout();
  }
}
