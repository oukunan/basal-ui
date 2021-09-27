import React from 'react'

import { DivAttributeProps } from './types'
import AccordionHeader from './AccordionHeader'
import AccordionItem from './AccordionItem'
import AccordionContent from './AccordionContent'
import AccordionSingle, { AccordionSingleProps } from './AccordionSingle'
import AccordionMultiple, { AccordionMultipleProps } from './AccordionMultiple'

export type AccordionCommonProps = DivAttributeProps & {
  allowZeroCollapse?: boolean
  className?: string
  children: React.ReactNode
}

type AccordionCompoundedComponentType = React.ForwardRefExoticComponent<
  (AccordionSingleProps | AccordionMultipleProps) &
    React.RefAttributes<HTMLDivElement>
> & {
  Item: typeof AccordionItem
  Header: typeof AccordionHeader
  Content: typeof AccordionContent
}

const Accordion = React.forwardRef<
  HTMLDivElement,
  AccordionSingleProps | AccordionMultipleProps
>((props, ref) => {
  if (props.type === 'single') {
    return <AccordionSingle {...(props as AccordionSingleProps)} ref={ref} />
  }
  if (props.type === 'multiple') {
    return (
      <AccordionMultiple {...(props as AccordionMultipleProps)} ref={ref} />
    )
  }

  throw new Error(
    "Invalid Accordion `type` props. It's should be either `single` or `multiple`"
  )
}) as AccordionCompoundedComponentType

Accordion.displayName = 'Accordion'

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Content = AccordionContent

export default Accordion
