import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = {
  className?: string
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, forwardedRef) {
    const context = useAccordionItemContext()
    return (
      <div
        id={context.contentId}
        ref={forwardedRef}
        className={props.className}
        role="region"
        aria-labelledby={context.headerId}
        hidden={!open}
        data-state={context.open ? 'open' : 'closed'}
        data-basal-accordion-content=""
      >
        {props.children}
      </div>
    )
  }
)
