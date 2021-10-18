// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterFollowComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-follow.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Twitter Follow Button',
  component: NgxTwitterFollowComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterFollowComponent> = (args: NgxTwitterFollowComponent) => ({
  props: args,
});

export const FollowButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
FollowButton.storyName = "Follow Button";
FollowButton.args = {
  username: "makavana_romik"
};

export const FollowButtonLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
FollowButtonLarge.storyName = "Follow Button - Large";
FollowButtonLarge.args = {
  username: "makavana_romik",
  options: { size: "large" }
};