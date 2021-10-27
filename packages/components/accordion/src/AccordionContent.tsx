import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, forwardedRef) {
    const context = useAccordionItemContext()
    return (
      <div
        id={context.contentId}
        role="region"
        aria-labelledby={context.headerId}
        hidden={!context.open}
        {...props}
        ref={forwardedRef}
        data-state={context.open ? 'open' : 'closed'}
        data-basal-accordion-content=""
      />
    )
  }
)
