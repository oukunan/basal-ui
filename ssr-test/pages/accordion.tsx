import { Accordion } from '@basal-ui/accordion'

export default function AccordionPage() {
  return (
    <div>
      <Accordion type="single" preExpand="one">
        <Accordion.Item value="one">
          <Accordion.Header>Header 1</Accordion.Header>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="two">
          <Accordion.Header>Header 2</Accordion.Header>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="three">
          <Accordion.Header>Header 3</Accordion.Header>
          <Accordion.Content>Content 3</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
