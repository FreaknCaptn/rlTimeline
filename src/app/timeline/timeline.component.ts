import { Component, OnInit } from '@angular/core';
import { rocketLegueEvents } from 'src/assets/data';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TimelineEvent } from 'src/assets/timelineEvents';
import { DomSanitizer, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public timelineEvents: TimelineEvent[];
  public assestsLocation = '../../assets/images/';
  public isMobile: boolean;

  constructor(
    private deviceService: DeviceDetectorService,
    public sanitizer: DomSanitizer,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.titleService.setTitle('Rocket League: Timeline')
    this.organizeEventsByDate();
  }

  private organizeEventsByDate(): void {
    this.timelineEvents = rocketLegueEvents.sort((a, b) => {
      if (a.Date === b.Date) {
        return 0;
      }
      if (a.Date > b.Date) {
        return -1;
      }
      return 1;
    });
  }

}
