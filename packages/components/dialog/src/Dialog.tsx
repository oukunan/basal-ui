import React, { useMemo } from 'react'

import { DialogContext } from './useDialogContext'

import DialogContent from './DialogContent'
import DialogOverlay from './DialogOverlay'

export type DialogProps = {
  open?: boolean
  children: React.ReactNode
  onClose: () => void
}

function Dialog(props: DialogProps) {
  const context = useMemo(
    () => ({
      open: props.open,
      onClose: props.onClose
    }),
    [props.onClose, props.open]
  )

  return (
    <DialogContext.Provider value={context}>
      {props.children}
    </DialogContext.Provider>
  )
}

Dialog.Overlay = DialogOverlay
Dialog.Content = DialogContent

export default Dialog
