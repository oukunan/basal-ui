import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'

type AccordionItemProps = {
  children: React.ReactNode
}
export default function AccordionItem(props: AccordionItemProps) {
  const [itemId] = useState(`item-${nanoid(5)}`)
  const [headerId] = useState(`header-${nanoid(5)}`)
  const [contentId] = useState(`content-${nanoid(5)}`)

  return (
    <Provider itemId={itemId} headerId={headerId} contentId={contentId}>
      {props.children}
    </Provider>
  )
}
