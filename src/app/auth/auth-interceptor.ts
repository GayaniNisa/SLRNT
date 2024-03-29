import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService:AuthService){

  }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    const authToken = this.authService.getToken();
    console.log("interceptor")
    console.log(authToken)
    //cloning and adding header(not only cloning)
    const authRequest = req.clone({
      headers: req.headers.set('Authorization',"Bearer "+authToken)
    })
    return next.handle(authRequest);
  }
}
