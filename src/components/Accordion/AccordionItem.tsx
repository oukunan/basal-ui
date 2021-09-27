import React, { useState } from 'react'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'
import { ItemID } from './types'
import { generateID } from '../../utils/generateID'

type AccordionItemProps = {
  /**
   * Unique for each item
   */
  value: ItemID
  children: React.ReactNode
}
export default function AccordionItem(props: AccordionItemProps) {
  const [headerId] = useState(`header-${generateID()}`)
  const [contentId] = useState(`content-${generateID()}`)

  return (
    <Provider itemId={props.value} headerId={headerId} contentId={contentId}>
      {props.children}
    </Provider>
  )
}
