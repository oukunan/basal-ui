import React from 'react'

import { AccordionItemProvider as Provider } from './useAccordionItemContext'

type AccordionItemProps = {
  /**
   * Unique for each item
   */
  value: string
  className?: string
  children: React.ReactNode
}
export default React.forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem(props, forwardedRef) {
    return (
      <Provider itemId={props.value}>
        <div
          ref={forwardedRef}
          className={props.className}
          data-basal-accordion-item=""
        >
          {props.children}
        </div>
      </Provider>
    )
  }
)
