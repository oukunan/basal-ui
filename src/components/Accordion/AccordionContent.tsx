import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  children: React.ReactNode
}

export default function AccordionContent(props: AccordionContentProps) {
  const { headerId, isExpanded } = useAccordionItemContext()
  return (
    <div role="region" aria-labelledby={headerId} hidden={!isExpanded}>
      {props.children}
    </div>
  )
}
