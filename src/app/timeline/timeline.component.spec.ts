import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { DeviceDetectorService } from 'ngx-device-detector';

describe('Timeline Component', () => {
  let timelineComponent: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(() => {
    const declarations = [
      TimelineComponent
    ];

    const providers = [
      { provide: DeviceDetectorService, useValue: { isMobile: () => false } }
    ];

    TestBed.configureTestingModule({
      declarations,
      providers
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    timelineComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize timeline component', () => {
    expect(timelineComponent).toBeTruthy();
  });
});
