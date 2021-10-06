import React from 'react'

import Portal from '../../portal/src'
import useDialogContext from './useDialogContext'

type DialogOverProps = React.HTMLAttributes<HTMLDivElement>

export default React.forwardRef<HTMLDivElement, DialogOverProps>(
  function DialogOverlay(props, forwardedRef) {
    const context = useDialogContext()

    if (!context.open) {
      return null
    }

    return (
      <Portal>
        <div ref={forwardedRef} data-x-dialog-overlay="" {...props} />
      </Portal>
    )
  }
)
