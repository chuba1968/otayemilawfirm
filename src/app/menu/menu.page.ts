import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectCube, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import {
  BannerAd,
  InterstitialAd,
  RewardedAd,
  RewardedInterstitialAd,
} from '@admob-plus/capacitor';
SwiperCore.use([Autoplay, EffectCube, Keyboard, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
