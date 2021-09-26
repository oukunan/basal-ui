import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  children: React.ReactNode
  className?: string
}

export default function AccordionContent(props: AccordionContentProps) {
  const { headerId, isExpanded } = useAccordionItemContext()
  return (
    <div
      className={props.className}
      role="region"
      aria-labelledby={headerId}
      hidden={!isExpanded}
    >
      {props.children}
    </div>
  )
}
