import React, { useRef, useCallback, useEffect } from 'react'

import { styled } from '../../../../stitches.config'
import Portal from '../../portal/src/Portal'
import { getFirstLastFocusableElement } from './utils/focusable'
import keyboardKey from '../../../utils/keyboardKey'

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

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (props, forwardRef) => {
    const contentRef = useRef<HTMLDivElement>(null)

    // Initial focus in the first element node
    useEffect(() => {
      if (!contentRef.current) {
        return
      }

      const [firstElement] = getFirstLastFocusableElement(contentRef.current)
      firstElement.focus()
    }, [])

    // Trap the focus inside the dialog content and close dialog when ESCAPE key pressed
    const handleKeydown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === keyboardKey.ESCAPE) {
          props.onClose()
          return
        }

        if (!contentRef.current) {
          return
        }

        const currentFocusElement = document.activeElement
        const [firstElement, lastElement] = getFirstLastFocusableElement(
          contentRef.current
        )

        if (e.key === keyboardKey.TAB) {
          if (e.shiftKey) {
            if (currentFocusElement === firstElement) {
              e.preventDefault()
              lastElement.focus()
            }
          } else {
            if (currentFocusElement === lastElement) {
              e.preventDefault()
              firstElement.focus()
            }
          }
        }
      },
      [props]
    )

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
          data-x-dialog-content=""
          role="dialog"
          aria-modal="true"
          ref={contentRef}
          className={props.contentClassName}
          onKeyDown={handleKeydown}
        >
          {props.children}
        </DialogContent>
      </Portal>
    )
  }
)

export default Dialog
