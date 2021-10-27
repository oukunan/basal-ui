import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionHeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  function AccordionHeader(props, forwardedRef) {
    const context = useAccordionItemContext()
    return (
      <h3
        {...props}
        ref={forwardedRef}
        data-state={context.open ? 'open' : 'closed'}
        data-basal-accordion-header=""
      />
    )
  }
)
