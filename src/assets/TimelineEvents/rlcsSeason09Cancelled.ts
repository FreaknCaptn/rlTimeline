import { TimelineEvent, ReferenceLink } from '../timelineEvents';

export const rlcsSeason09Cancelled: TimelineEvent = {
    Header: 'Season 9 World Championship cancelled',
    HeaderContent: 'Due to worldwide health concerns surrounding the developing situation around the Coronavirus (COVID-19), Psyonix cancelled the Rocket League Season 9 World Championship scheduled from April 24-26 in Dallas, Texas',
    SideImage: 'temp.jpg',
    Date: new Date('2020-03-05'),
    Videos: [
        new ReferenceLink('Venue Announcement', 'https://www.youtube.com/embed/MwD2O_jrYwY')
    ],
    Links: [
        new ReferenceLink('Important Rocket League eSports update', 'https://www.rocketleagueesports.com/news/important-rocket-league-esports-update/'),
    ],
}