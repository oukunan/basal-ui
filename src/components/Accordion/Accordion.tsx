import React from 'react'

import { AccordionProvider } from './useAccordionContext'

import AccordionHeader from './AccordionHeader'
import AccordionItem from './AccordionItem'
import AccordionContent from './AccordionContent'

export type AccordionProps = {
  expanded?: string[]
  children: React.ReactNode
  onToggle?: (itemId: string) => void
}

function Accordion(props: AccordionProps) {
  const { children, ...restProps } = props
  return (
    <div>
      <AccordionProvider {...restProps}>{props.children}</AccordionProvider>
    </div>
  )
}

Accordion.Item = AccordionItem
Accordion.Header = AccordionHeader
Accordion.Content = AccordionContent

// Need to export here, Storybook give an error `Uncaught SyntaxError: Unexpected token 'default'`
export default Accordion
