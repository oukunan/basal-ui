import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  className?: string
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, forwardedRef) {
    const { contentId, headerId, open } = useAccordionItemContext()
    return (
      <div
        id={contentId}
        ref={forwardedRef}
        className={props.className}
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
        data-basal-accordion-content=""
      >
        {props.children}
      </div>
    )
  }
)
