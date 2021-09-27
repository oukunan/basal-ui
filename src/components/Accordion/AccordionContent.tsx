import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  children: React.ReactNode
  className?: string
}

export default React.forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, ref) {
    const { headerId, isExpanded } = useAccordionItemContext()
    return (
      <div
        ref={ref}
        className={props.className}
        role="region"
        aria-labelledby={headerId}
        hidden={!isExpanded}
      >
        {props.children}
      </div>
    )
  }
)
