export interface TimelineEvent {
    Header: string;
    HeaderContent: string;
    SideImage: string;
    Videos: ReferenceLink[];
    Links: ReferenceLink[];
    Date: Date;
}

export class ReferenceLink {
    LinkText: string
    LinkUrl: string

    constructor(linkText: string, linkUrl:string) {
        this.LinkText = linkText;
        this.LinkUrl = linkUrl;
    }
}