// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterTimelineComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-timeline.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Twitter Timeline Embed',
  component: NgxTwitterTimelineComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterTimelineComponent> = (args: NgxTwitterTimelineComponent) => ({
  props: args,
});

export const TimelineProfileWithScreenName = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineProfileWithScreenName.storyName = "Timeline Profile -  Screen Name";
TimelineProfileWithScreenName.args = {
  source: {
    sourceType: "profile",
    screenName: 'makavana_romik'
  },
  options: { height: '400', width: "300" }
};

export const TimelineProfileWithUserId = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineProfileWithUserId.storyName = "Timeline Profile - User ID";
TimelineProfileWithUserId.args = {
  source: {
    sourceType: "profile",
    userId: "1029587508445630465"
  },
  options: { height: '400', width: "300" }
};

export const TimelineLikesWithScreenName = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineLikesWithScreenName.storyName = "Timeline Likes - Screen Name";
TimelineLikesWithScreenName.args = {
  source: {
    sourceType: "likes",
    screenName: 'makavana_romik'
  },
  options: { height: '400', width: "300" }
};

export const TimelineLikesWithUserId = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineLikesWithUserId.storyName = "Timeline Likes - User ID";
TimelineLikesWithUserId.args = {
  source: {
    sourceType: "likes",
    userId: "1029587508445630465"
  },
  options: { height: '400', width: "300" }
};

export const TimelineListWithScreenNameSlug = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineListWithScreenNameSlug.storyName = "Timeline List";
TimelineListWithScreenNameSlug.args = {
  source: {
    sourceType: "list",
    ownerScreenName: "TwitterDev",
    slug: "national-parks"
  },
  options: { height: '400', width: "300" }
};

export const TimelineListWithListId = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineListWithListId.storyName = "Timeline List - List ID";
TimelineListWithListId.args = {
  source: {
    sourceType: "list",
    id: "8044403"
  },
  options: { height: '400', width: "300" }
};

export const TimelineCollection = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineCollection.storyName = "Timeline collection";
TimelineCollection.args = {
  source: {
    sourceType: "collection",
    id: "576828964162965504"
  },
  options: { height: '400', width: "300" }
};

export const TimelineUrlWithCollectionUrl = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineUrlWithCollectionUrl.storyName = "Timeline Collection URL";
TimelineUrlWithCollectionUrl.args = {
  source: {
    sourceType: "url",
    url: "https://twitter.com/NYTNow/timelines/576828964162965504"
  },
  options: { height: '400', width: "300" }
};

export const TimelineUrlWithProfileUrl = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineUrlWithProfileUrl.storyName = "Timeline Profile URL";
TimelineUrlWithProfileUrl.args = {
  source: {
    sourceType: "url",
    url: "https://twitter.com/makavana_romik"
  },
  options: { height: '400', width: "300" }
};

export const TimelineUrlWithListUrl = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineUrlWithListUrl.storyName = "Timeline List URL";
TimelineUrlWithListUrl.args = {
  source: {
    sourceType: "url",
    url: "https://twitter.com/TwitterDev/lists/national-parks"
  },
  options: { height: '400', width: "300" }
};

export const TimelineUrlWithLikesUrl = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineUrlWithLikesUrl.storyName = "Timeline Likes URL";
TimelineUrlWithLikesUrl.args = {
  source: {
    sourceType: "url",
    url: "https://twitter.com/makavana_romik/likes"
  },
  options: { height: '400', width: "300" }
};

export const TimelineDarkTheme = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineDarkTheme.storyName = "Timeline Dark Theme";
TimelineDarkTheme.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", theme: "dark" }
};

export const TimelineCustomBorderColor = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineCustomBorderColor.storyName = "Timeline Border Color";
TimelineCustomBorderColor.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", borderColor: "#F44336"}
};

export const TimelineNoHeaderNoFooter = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineNoHeaderNoFooter.storyName = "Timeline No Header & No Footer";
TimelineNoHeaderNoFooter.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", chrome : ["noheader", "nofooter"]}
};

export const TimelineNoBorder = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineNoBorder.storyName = "Timeline No Border";
TimelineNoBorder.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", chrome : ["noborders"]}
};

export const TimelineNoScrollbar = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineNoScrollbar.storyName = "Timeline  No Scrollbar";
TimelineNoScrollbar.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", chrome : ["noscrollbar"]}
};

export const TimelineTweetLimit = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TimelineTweetLimit.storyName = "Timeline Tweet Limit";
TimelineTweetLimit.args = {
  source: {
    sourceType: "profile",
    screenName: "makavana_romik"
  },
  options: { height: '400', width: "300", tweetLimit : 1}
};
