import { Component, OnInit } from '@angular/core';
import { TimelineEvent, rocketLegueEvents } from 'src/assets/data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public timelineEvents: TimelineEvent[];
  public assestsLocation = '../../assets/images/';

  constructor() { }

  ngOnInit(): void {
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
