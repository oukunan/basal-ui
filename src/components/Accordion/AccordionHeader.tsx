import React, { useCallback } from 'react'

import useAccordionItemContext from './useAccordionItemContext'
import {
  focusFirstSibling,
  focusLastSibling,
  focusNextSibling,
  focusPreviousSibling
} from './utils/focus'

type AccordionHeaderProps = {
  children: React.ReactNode
}

type AccordionKeyboardNavigationKey =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'Home'
  | 'End'
  | 'Enter'
  | ' '

export default function AccordionHeader(props: AccordionHeaderProps) {
  const { onToggle, contentId, headerId, isExpanded } =
    useAccordionItemContext()

  const navigateFocus = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const keyCode = e.key as AccordionKeyboardNavigationKey
      const elem = e.target as HTMLButtonElement

      switch (keyCode) {
        case ' ':
        case 'Enter':
          e.preventDefault()
          onToggle && onToggle()
          break
        case 'ArrowDown':
          e.preventDefault()
          focusNextSibling(elem)
          break
        case 'ArrowUp':
          e.preventDefault()
          focusPreviousSibling(elem)
          break
        case 'Home':
          e.preventDefault()
          focusFirstSibling(elem)
          break
        case 'End':
          focusLastSibling(elem)
          break
        default:
      }
    },
    [onToggle]
  )

  return (
    <h3 data-accordion-component="AccordionHeader">
      <button
        id={headerId}
        aria-controls={contentId}
        aria-expanded={isExpanded}
        aria-disabled={isExpanded}
        onClick={onToggle}
        onKeyDown={navigateFocus}
      >
        {props.children}
      </button>
    </h3>
  )
}
