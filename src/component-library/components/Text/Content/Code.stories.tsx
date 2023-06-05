import { StoryFn, Meta } from "@storybook/react";
import { createSubscriptionMeta } from "test/fixtures/table-fixtures";
import { Code as C } from "./Code";

export default {
    title: 'Components/Text/Content',
    component: C,
} as Meta<typeof C>;

const Template: StoryFn<typeof C> = (args) => <C {...args} />;

export const Code = Template.bind({});
Code.args = {
    children: createSubscriptionMeta().replication_rules
};
