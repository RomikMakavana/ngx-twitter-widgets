enum SourceType { "profile", "list", "collection", "likes" }

export class TimelineSource {
    sourceType: SourceType|string;
    screenName?: string;
    ownerScreenName?: string;
    slug?: string;
    url?: string;
}
