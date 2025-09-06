import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton,IonToolbar, IonItem ,IonLabel, IonInput, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem,IonLabel, IonInput,]
})
export class LoginPage {

  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  entrar() {
      const loga = this.usuario.trim() === 'RyanRogerRodrigues' && this.senha === '123';
      if (loga) {
        this.router.navigateByUrl('/sobre');
      } else {
        this.router.navigateByUrl('/invalido');
      }
    }

}
