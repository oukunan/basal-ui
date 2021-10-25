import React from 'react'
import useAccordionItemContext from './useAccordionItemContext'

type AccordionHeaderProps = {
  className?: string
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  function AccordionHeader(props, forwardedRef) {
    const context = useAccordionItemContext()
    return (
      <h3
        ref={forwardedRef}
        className={props.className}
        data-state={context.open ? 'open' : 'closed'}
        data-basal-accordion-header=""
      >
        {props.children}
      </h3>
    )
  }
)
