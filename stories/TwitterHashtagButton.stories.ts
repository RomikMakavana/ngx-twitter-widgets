// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterHashtagComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-hashtag.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Twitter Hashtag Button',
  component: NgxTwitterHashtagComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterHashtagComponent> = (args: NgxTwitterHashtagComponent) => ({
  props: args,
});

export const HashtagButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
HashtagButton.storyName = "Hashtag Button";
HashtagButton.args = {
  hashtag: "twitterdev"
};

export const HashtagButtonLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
HashtagButtonLarge.storyName = "Hashtag Button - Large";
HashtagButtonLarge.args = {
  hashtag: "twitterdev",
  options: { size: "large" }
};