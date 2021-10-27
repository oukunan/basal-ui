import React from 'react'
import ReactDOM from 'react-dom'

type PortalProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, PortalProps>(function Portal(
  props,
  forwardedRef
) {
  const { style, ...restProps } = props
  const rootContainer = globalThis?.document?.body
  /**
   * Skip rendering when there is no portal during the SSR
   */
  if (!rootContainer) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      {...restProps}
      ref={forwardedRef}
      data-basal-portal=""
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        ...style
      }}
    />,
    rootContainer
  )
})
