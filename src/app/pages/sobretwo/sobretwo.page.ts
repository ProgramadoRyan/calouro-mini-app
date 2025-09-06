import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline,syncOutline } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobretwo',
  templateUrl: './sobretwo.page.html',
  styleUrls: ['./sobretwo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon,IonImg, CommonModule, FormsModule, RouterLink],
})
export class SobretwoPage implements OnInit {

  constructor() { 
    addIcons({arrowBackCircleOutline,syncOutline});
  }

  ngOnInit() {
  }

}
