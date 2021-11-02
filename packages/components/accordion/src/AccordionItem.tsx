import React from 'react'

import { AccordionItemProvider } from './useAccordionItemContext'

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Unique for each item
   */
  value: string
  children: React.ReactNode
}
export default React.forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem(props, forwardedRef) {
    return (
      <AccordionItemProvider itemId={props.value}>
        <div {...props} ref={forwardedRef} data-basal-accordion-item="" />
      </AccordionItemProvider>
    )
  }
)
