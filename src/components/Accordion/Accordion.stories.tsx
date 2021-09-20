import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'

import Accordion from './Accordion'
import AccordionSection from './AccordionSection'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as Meta

const Template: Story = (args) => (
  <Accordion {...args}>
    <AccordionSection header="Title 1">Content 1</AccordionSection>
    <AccordionSection header="Title 2">Content 2</AccordionSection>
    <AccordionSection header="Title 3">Content 3</AccordionSection>
  </Accordion>
)

export const Primary = Template.bind({})
Primary.args = {}
