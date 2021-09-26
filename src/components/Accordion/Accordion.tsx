import React from 'react'

import AccordionHeader from './AccordionHeader'
import AccordionItem from './AccordionItem'
import AccordionContent from './AccordionContent'
import AccordionSingle, { AccordionSingleProps } from './AccordionSingle'
import AccordionMultiple, { AccordionMultipleProps } from './AccordionMultiple'

export type CommonAccordionProps = {
  type: 'single' | 'multiple'
  children: React.ReactNode
  allowZeroCollapse?: boolean
  className?: string
}

function Accordion(props: AccordionSingleProps | AccordionMultipleProps) {
  if (props.type === 'single') {
    return <AccordionSingle {...(props as AccordionSingleProps)} />
  }
  if (props.type === 'multiple') {
    return <AccordionMultiple {...(props as AccordionMultipleProps)} />
  }

  throw new Error(
    "Invalid Accordion `type` props. It's should be either `single` or `multiple`"
  )
}

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Content = AccordionContent

// Need to export here, Storybook give an error `Uncaught SyntaxError: Unexpected token 'default'`
export default Accordion
