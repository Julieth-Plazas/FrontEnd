import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  
  email:String;
  password:String;
  constructor(public userService: UserService, public route: Router) { }

  ngOnInit() {
  }

  loginUser() {
    const user = { email: this.email, password: this.password };
    console.log(this.email,this.password)
    this.userService.login(user).subscribe((data) => {
      this.userService.setToken(data.token);
      this.route.navigateByUrl("/");
    });
  }
  


  
 /* formSubmit(){
    if(this.user.email.trim() == '' || this.user.email.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.user.password.trim() == '' || this.user.password.trim() == null){
      this.snack.open('La contraseña es requerida !!','Aceptar',{
        duration:3000
      })
      return;
    }

    this.userService.generateToken(this.user).subscribe(
      (data:any) => {
        console.log(data);
        this.userService.loginUser(data.token);
        this.userService.getCurrentUser().subscribe((user:any) => {
          this.userService.setUser(user);
          console.log(user);

          if(this.userService.getUserRole() == 'Administrador'){
            //dashboard admin
            //window.location.href = '/admin';
            this.route.navigate(['admin']);
            this.userService.loginStatusSubjec.next(true);
          }
          else if(this.userService.getUserRole() == ' '){
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.route.navigate(['user-dashboard']);
            this.userService.loginStatusSubjec.next(true);
          }
          else{
            this.userService.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )
  }*/
}
