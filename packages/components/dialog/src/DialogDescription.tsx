import React from 'react'

type DialogDescriptionProps = {
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, DialogDescriptionProps>(
  function DialogDescription(props, forwardedRef) {
    return <div ref={forwardedRef}>{props.children}</div>
  }
)
