// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterShareComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-share.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Twitter Share Button',
  component: NgxTwitterShareComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterShareComponent> = (args: NgxTwitterShareComponent) => ({
  props: args,
});

export const ShareButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ShareButton.storyName = "Share Button";
ShareButton.args = {
  url: "https://romik-mk.medium.com/angular-twitter-widgets-dbaf858143ea",
  options: { text: "Ngx Twitter Widgets - Romik Makavana" }
};

export const ShareButtonLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ShareButtonLarge.storyName = "Share Button - Large";
ShareButtonLarge.args = {
  url: "https://romik-mk.medium.com/angular-twitter-widgets-dbaf858143ea",
  options: { text: "Ngx Twitter Widgets - Romik Makavana", size: "large" }
};