import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit{
  [x: string]: any;

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  isLoggedIn:boolean = false;

  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }
ngOnInit(): void {

}
login(email : string, password : string) {
  this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      localStorage.setItem('token','true');

      if(res.user?.emailVerified == true) {
        this.router.navigate(['/main']);
      } else {
        this.router.navigate(['/main']);
      }

  }, err => {
      // alert(err.message);
      alert("Nesto je krenulo naopako!!!")
      this.router.navigate(['/login']);
  })
}
register(email : string, password : string) {
  this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
    alert('Registration Successful');
    this['sendEmailForVarification'](res.user);
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);

    this.router.navigate(['/register']);
  })
}
logout() {
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
  })
}

}