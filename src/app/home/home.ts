import { Component, OnInit, OnDestroy } from '@angular/core';
import { Uchat } from '../uchat/uchat';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Uchat, RouterOutlet, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  showUchat: boolean = false;


  ngOnInit() {

  }

  ngOnDestroy() {

  }

  toggleUchat() {
    this.showUchat = !this.showUchat;
  }
}
