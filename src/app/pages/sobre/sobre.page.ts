import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline,syncOutline } from 'ionicons/icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, CommonModule, FormsModule, RouterLink],
})
export class SobrePage implements OnInit {

  constructor() {
    addIcons({arrowBackCircleOutline,syncOutline});
  }

  ngOnInit() {
  }

}
