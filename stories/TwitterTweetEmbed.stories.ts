// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterTweetComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-tweet.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Twitter Tweet Embed',
    component: NgxTwitterTweetComponent,
    decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterTweetComponent> = (args: NgxTwitterTweetComponent) => ({
    props: args,
});

export const TweetEmbed = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
TweetEmbed.storyName = "Tweet Embed";
TweetEmbed.args = {
    tweetID: "1437057815156191237",
    options: { width: 350 }
};