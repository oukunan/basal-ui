import React from 'react'

type AccordionHeaderProps = {
  className?: string
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  function AccordionHeader(props, forwardedRef) {
    return (
      <h3
        ref={forwardedRef}
        className={props.className}
        data-basal-accordion-header=""
      >
        {props.children}
      </h3>
    )
  }
)
