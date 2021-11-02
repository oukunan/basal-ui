import React, { useCallback } from 'react'
import keyboardKey from '@basal-ui/keyboard-keycode'

import useAccordionItemContext from './useAccordionItemContext'
import {
  focusFirstSibling,
  focusLastSibling,
  focusNextSibling,
  focusPreviousSibling
} from './utils/focus'

type AccordionButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default React.forwardRef<HTMLButtonElement, AccordionButtonProps>(
  function AccordionButton(props, forwardedRef) {
    const { open, onClose, onOpen, headerId, contentId, itemId } =
      useAccordionItemContext()

    const handleToggle = useCallback(() => {
      if (open) {
        onClose(itemId)
      } else {
        onOpen(itemId)
      }
    }, [itemId, onClose, onOpen, open])

    const navigateFocus = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        const elem = e.target as HTMLButtonElement

        switch (e.key) {
          case keyboardKey.SPACE:
          case keyboardKey.ENTER:
            e.preventDefault()
            handleToggle()
            break
          case keyboardKey.DOWN:
            e.preventDefault()
            focusNextSibling(elem)
            break
          case keyboardKey.UP:
            e.preventDefault()
            focusPreviousSibling(elem)
            break
          case keyboardKey.HOME:
            e.preventDefault()
            focusFirstSibling(elem)
            break
          case keyboardKey.END:
            focusLastSibling(elem)
            break
          default:
        }
      },
      [handleToggle]
    )

    return (
      <button
        id={headerId}
        ref={forwardedRef}
        aria-controls={contentId}
        aria-expanded={open}
        aria-disabled={open}
        onClick={handleToggle}
        onKeyDown={navigateFocus}
        {...props}
        data-basal-accordion-button=""
      />
    )
  }
)
