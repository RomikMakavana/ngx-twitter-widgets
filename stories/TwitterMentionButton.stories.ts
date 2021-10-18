// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, storiesOf } from "@storybook/angular";
import { NgxTwitterMentionComponent } from '../projects/ngx-twitter-widgets/src/lib/ngx-twitter-mention.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Twitter Mention Button',
    component: NgxTwitterMentionComponent,
    decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {},
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NgxTwitterMentionComponent> = (args: NgxTwitterMentionComponent) => ({
    props: args,
});

export const MentionButton = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
MentionButton.storyName = "Mention Button";
MentionButton.args = {
    username: "makavana_romik",
    options: { text: "Web Developer" }
};

export const MentionButtonLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
MentionButtonLarge.storyName = "Mention Button - Large";
MentionButtonLarge.args = {
    username: "makavana_romik",
    options: { size: "large", text: "Web Developer" }
};