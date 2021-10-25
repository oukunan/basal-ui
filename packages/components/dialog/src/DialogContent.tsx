import React, { useCallback, useEffect, useRef } from 'react'

import Portal from '@basal-ui/portal'
import keyboardKey from '@basal-ui/keyboard-keycode'
import { useComposeRef } from '@basal-ui/compose-ref'

import useDialogContext from './useDialogContext'
import { getFirstLastFocusableElement } from './utils/focusable'

type DialogContentProps = React.HTMLAttributes<HTMLDivElement>

export default React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(props, forwardedRef) {
    const context = useDialogContext()
    const contentRef = useRef<HTMLDivElement>(null)
    const callbackRef = useComposeRef(contentRef, forwardedRef)

    // Initial focus in the first element node
    useEffect(() => {
      if (!contentRef.current) {
        return
      }

      const elements = getFirstLastFocusableElement(contentRef.current)

      if (elements.length === 0) {
        return
      }

      elements[0].focus()
    }, [])

    const handleClickOutside = useCallback(
      (e) => {
        if (contentRef.current && !contentRef.current.contains(e.target)) {
          context.onClose()
        }
      },
      [context]
    )

    // TODO: Find the better solution that avoid attach the event to the DOM 🥲
    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true)

      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    }, [handleClickOutside])

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

    if (!context.open) {
      return null
    }

    return (
      <Portal>
        <div
          {...props}
          data-x-dialog-content=""
          role="dialog"
          aria-modal="true"
          ref={callbackRef}
          onKeyDown={handleKeydown}
        />
      </Portal>
    )
  }
)
