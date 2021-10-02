import React from 'react'

type DialogHeaderProps = {
  children: React.ReactNode
}

export default React.forwardRef<HTMLHeadingElement, DialogHeaderProps>(
  function DialogHeader(props, forwardedRef) {
    return (
      <h2 id="" ref={forwardedRef}>
        {props.children}
      </h2>
    )
  }
)
