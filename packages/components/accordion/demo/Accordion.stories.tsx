import { Meta } from '@storybook/react/types-6-0'
import { useState } from 'react'

import Accordion from '../src/Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion
} as Meta

const AccordionChildren = () => (
  <>
    <Accordion.Item value="one">
      <Accordion.Header>
        <Accordion.Button>This is header 1</Accordion.Button>
      </Accordion.Header>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="two">
      <Accordion.Header>
        <Accordion.Button>This is header 2</Accordion.Button>
      </Accordion.Header>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="three">
      <Accordion.Header>
        <Accordion.Button>This is header 3</Accordion.Button>
      </Accordion.Header>
      <Accordion.Content>Content 3</Accordion.Content>
    </Accordion.Item>
  </>
)

// ------------------------------ Single type  ------------------------------
export const SingleUncontrolled = () => (
  <>
    <Accordion type="single">
      <AccordionChildren />
    </Accordion>
  </>
)

export const SingleUncontrolledPreExpand = () => (
  <>
    <Accordion type="single" preExpand="three">
      <AccordionChildren />
    </Accordion>
  </>
)

export const SingleUncontrolledAllowZeroCollapse = () => (
  <>
    <Accordion type="single" allowZeroCollapse>
      <AccordionChildren />
    </Accordion>
  </>
)

export const SingleControlled = () => {
  const [value, setValue] = useState('one')

  return (
    <>
      <Accordion type="single" value={value} onToggle={setValue}>
        <AccordionChildren />
      </Accordion>
    </>
  )
}

export const SingleControlledAllowZeroCollapse = () => {
  const [value, setValue] = useState('one')

  return (
    <>
      <Accordion
        type="single"
        value={value}
        onToggle={setValue}
        allowZeroCollapse
      >
        <AccordionChildren />
      </Accordion>
    </>
  )
}

// ------------------------------ Multiple type  ------------------------------
export const MultipleUncontrolled = () => (
  <>
    <Accordion type="multiple">
      <AccordionChildren />
    </Accordion>
  </>
)

export const MultipleUncontrolledPreExpand = () => (
  <>
    <Accordion type="multiple" preExpand={['two', 'three']}>
      <AccordionChildren />
    </Accordion>
  </>
)

export const MultipleUncontrolledAllowZeroCollapse = () => (
  <>
    <Accordion type="multiple" allowZeroCollapse>
      <AccordionChildren />
    </Accordion>
  </>
)

export const MultipleControlled = () => {
  const [value, setValue] = useState(['one', 'two'])

  return (
    <>
      <Accordion type="multiple" value={value} onToggle={setValue}>
        <AccordionChildren />
      </Accordion>
    </>
  )
}

export const MultipleControlledAllowZeroCollapse = () => {
  const [value, setValue] = useState(['one', 'two'])

  return (
    <>
      <Accordion
        type="multiple"
        value={value}
        onToggle={setValue}
        allowZeroCollapse
      >
        <AccordionChildren />
      </Accordion>
    </>
  )
}
