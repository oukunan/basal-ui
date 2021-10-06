import React, { useCallback, useEffect, useRef } from 'react'
import Portal from '../../portal/src'

import keyboardKey from '../../../utils/keyboardKey'
import useDialogContext from './useDialogContext'
import { getFirstLastFocusableElement } from './utils/focusable'

type DialogContentProps = {
  className?: string
  children: React.ReactNode
}

export default function DialogContent(props: DialogContentProps) {
  const context = useDialogContext()
  const contentRef = useRef<HTMLDivElement>(null)

  // Initial focus in the first element node
  useEffect(() => {
    if (!contentRef.current) {
      return
    }

    const elems = getFirstLastFocusableElement(contentRef.current)

    if (elems.length === 0) {
      return
    }

    elems[0].focus()
  }, [])

  // Trap the focus inside the dialog content and close dialog when ESCAPE key pressed
  const handleKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === keyboardKey.ESCAPE) {
        context.onClose()
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
    [context]
  )

  return (
    <Portal>
      <div
        className={props.className}
        data-x-dialog-content=""
        role="dialog"
        aria-modal="true"
        ref={contentRef}
        onKeyDown={handleKeydown}
      >
        {props.children}
      </div>
    </Portal>
  )
}
