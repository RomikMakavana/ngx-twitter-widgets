enum ChromeOptions { "noheader", "nofooter", "noborders", "transparent", "noscrollbar" }
enum ThemeOptions { "dark", "light" }
enum AreaPoliteOptions { "polite", "assertive", "rude" }
export class TimelineOptions {
    chrome?: string[] | ChromeOptions[];
    width?: string | any;
    height?: string | any;
    tweetLimit?: number;
    borderColor?: string;
    theme?: ThemeOptions | string;
    ariaPolite?: string[] | AreaPoliteOptions[];
    dnt?: boolean;
}
