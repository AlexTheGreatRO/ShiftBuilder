import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logIn(email: string, password: string) {
    return this.afauth.signInWithEmailAndPassword(email, password);
  }
  constructor(public afauth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }
}
