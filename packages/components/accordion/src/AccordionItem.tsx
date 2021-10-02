import React from 'react'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'
import { ItemID } from './types'

type AccordionItemProps = {
  /**
   * Unique for each item
   */
  value: ItemID
  children: React.ReactNode
}
export default function AccordionItem(props: AccordionItemProps) {
  return <Provider itemId={props.value}>{props.children}</Provider>
}
