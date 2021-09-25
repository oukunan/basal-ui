import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'

type AccordionItemProps = {
  /**
   * Unique for each item
   */
  value: string
  children: React.ReactNode
}
export default function AccordionItem(props: AccordionItemProps) {
  const [headerId] = useState(`header-${nanoid(5)}`)
  const [contentId] = useState(`content-${nanoid(5)}`)

  return (
    <Provider itemId={props.value} headerId={headerId} contentId={contentId}>
      {props.children}
    </Provider>
  )
}
