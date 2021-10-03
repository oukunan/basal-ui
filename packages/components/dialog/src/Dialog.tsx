import React, { useRef, useEffect } from 'react'

import { styled } from '../../../../stitches.config'
import Portal from '../../portal/src/Portal'

type DialogProps = {
  open: boolean
  children: React.ReactNode
  overlayClassName?: string
  contentClassName?: string
  onClose: () => void
}

const DialogOverlay = styled('div', {
  position: 'fixed',
  inset: 0
})

const DialogContent = styled('div', {
  position: 'relative'
})

function Dialog(props: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleTabKey = (e) => {
    const focusableModalElements = dialogRef.current?.querySelectorAll(
      'a[href], button, textarea, input, select'
    )

    if (!focusableModalElements) {
      return
    }

    const firstElement = focusableModalElements[0] as any

    const lastElement = focusableModalElements[
      focusableModalElements.length - 1
    ] as any

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }

  const keyListenersMap = new Map([
    [27, props.onClose],
    [9, handleTabKey]
  ])

  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode)
      return listener && listener(e)
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })

  if (!props.open) {
    return null
  }

  return (
    <Portal>
      <DialogOverlay
        data-x-dialog-overlay=""
        className={props.overlayClassName}
        onClick={props.onClose}
      />
      <DialogContent
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog1_label"
        ref={dialogRef}
        className={props.contentClassName}
      >
        {props.children}
      </DialogContent>
    </Portal>
  )
}

export default Dialog
