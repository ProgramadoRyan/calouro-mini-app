import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {globe} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast ,CommonModule, FormsModule, RouterLink],
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({globe});
   }

  ngOnInit() {
  }

}
