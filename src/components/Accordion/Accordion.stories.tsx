import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'

import Accordion from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as Meta

const Template: Story = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Header>This is header 1</Accordion.Header>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Header>This is header 2</Accordion.Header>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Header>This is header 3</Accordion.Header>
      <Accordion.Content>Content 3</Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

export const Single = Template.bind({})
Single.args = {}

export const Multiple = Template.bind({})
Multiple.args = { type: 'multiple' }
