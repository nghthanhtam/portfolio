import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  aosImageDuration,
  aosImageOffset,
  imagePath,
} from '../shared/app.const';
import * as AOS from 'aos';
import { SeeNextProjectComponent } from '../see-next-project/see-next-project.component';
import { ShareService } from '../shared/share.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, SeeNextProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit, OnDestroy {
  public imagePath = imagePath;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private shareService: ShareService
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: aosImageDuration,
        offset: aosImageOffset,
      });
    }
  }

  public ngOnDestroy(): void {
    this.shareService.ngOnDestroy();
  }
}
