import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  showToolbar = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.homeService.onDataChanged.subscribe((res: any) => {
      console.log('homeService.onDataChanged')
      console.log(res);
      this.data = res;
    });
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 141;
    }
  }

}
