import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  children: React.ReactNode
  className?: string
}

export default React.forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, forwardedRef) {
    const { contentId, headerId, isExpanded } = useAccordionItemContext()
    return (
      <div
        id={contentId}
        ref={forwardedRef}
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
