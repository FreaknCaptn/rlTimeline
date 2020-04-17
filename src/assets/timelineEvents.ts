export interface TimelineEvent {
    Header: string;
    HeaderContent: string;
    SideImage: string;
    Links: ReferenceLink[]
    Date: Date
}

class ReferenceLink {
    LinkText: string
    LinkUrl: string
}