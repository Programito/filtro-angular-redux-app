import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad{

  constructor(public authService: AuthService) { }

  canActivate() {
    return this.authService.isAuth();
  }

  // devuelve un observable
  // take para hacerlo solo una vez y cancelarlo
  canLoad() {
    return this.authService.isAuth()
      .pipe(
        take(1)
      );
  }
}
