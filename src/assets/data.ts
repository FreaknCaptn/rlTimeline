import { TimelineEvent } from './timelineEvents';
import { rlcsSeason09Cancelled } from './TimelineEvents/rlcsSeason09Cancelled';
import {rlcsSeason01Champions } from './TimelineEvents/rlcsSeason01Champions'
import { rlcsSeason03Champions } from './TimelineEvents/rlcsSeason03Champions';
import { rlcsSeason04Champions } from './TimelineEvents/rlcsSeason04Champions';
import { rlcsSeason05Champions } from './TimelineEvents/rlcsSeason05Champions';
import { rlcsSeason06Champions } from './TimelineEvents/rlcsSeason06Champions';
import { rlcsSeason07Champions } from './TimelineEvents/rlcsSeason07Champions';
import { rlcsSeason08Champions } from './TimelineEvents/rlcsSeason08Champions';
import { rlcsSeason02Champions } from './TimelineEvents/rlcsSeason02Champions';

export const rocketLegueEvents: TimelineEvent[] = [
    rlcsSeason01Champions,
    rlcsSeason02Champions,
    rlcsSeason03Champions,
    rlcsSeason04Champions,
    rlcsSeason05Champions,
    rlcsSeason06Champions,
    rlcsSeason07Champions,
    rlcsSeason08Champions,
    rlcsSeason09Cancelled,
]



