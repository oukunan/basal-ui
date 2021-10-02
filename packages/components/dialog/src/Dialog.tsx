import React, { useRef, useEffect } from 'react'

import { styled } from '../../../../stitches.config'
import Portal from '../../portal/src/Portal'

type DialogProps = {
  open?: boolean
  title: React.ReactNode
  content: React.ReactNode
  onClose: () => void
}

const DialogOverlay = styled('div', {
  position: 'fixed',
  inset: 0,
  display: 'grid',
  placeContent: 'center'
})

const DialogClickOutsideArea = styled('div', {
  position: 'fixed',
  inset: 0,
  opacity: 0.5,
  background: 'lightgray'
})

const DialogBox = styled('div', {
  position: 'relative',
  width: '50vw',
  maxWidth: '450px',
  height: '40vh',
  maxHeight: '600px',
  border: '1px solid',
  backgroundColor: 'white'
})

const DialogCloseButton = styled('button', {
  position: 'absolute',
  top: '10px',
  right: '10px'
})

export default function Dialog(props: DialogProps) {
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
      <DialogOverlay>
        <DialogClickOutsideArea onClick={props.onClose} />
        <DialogBox
          id=""
          ref={dialogRef}
          aria-labelledby="dialog1_label"
          aria-modal="true"
          role="dialog"
        >
          <h2 id="dialog1_label">{props.title}</h2>
          <div>{props.content}</div>
          <DialogCloseButton onClick={props.onClose}>
            <span aria-hidden="true">×</span>
          </DialogCloseButton>
          <button>Another button</button>
        </DialogBox>
      </DialogOverlay>
    </Portal>
  )
}
