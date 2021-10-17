import React from 'react'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'

type AccordionItemProps = {
  /**
   * Unique for each item
   */
  value: string
  children: React.ReactNode
}
export default function AccordionItem(props: AccordionItemProps) {
  return <Provider itemId={props.value}>{props.children}</Provider>
}
