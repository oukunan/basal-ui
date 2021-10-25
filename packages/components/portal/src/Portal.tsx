import React from 'react'
import ReactDOM from 'react-dom'

type PortalProps = {
  children: React.ReactNode
}

export default React.forwardRef<HTMLDivElement, PortalProps>(function Portal(
  props,
  forwardedRef
) {
  const rootContainer = globalThis?.document?.body
  /**
   * Skip rendering when there is no portal during the SSR
   */
  if (!rootContainer) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      {...props}
      ref={forwardedRef}
      data-basal-portal=""
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
      }}
    />,
    rootContainer
  )
})
