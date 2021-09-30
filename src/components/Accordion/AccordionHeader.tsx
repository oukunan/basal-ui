import React, { useCallback } from 'react'

import { styled } from '../.././../stitches.config'
import useAccordionItemContext from './useAccordionItemContext'
import {
  focusFirstSibling,
  focusLastSibling,
  focusNextSibling,
  focusPreviousSibling
} from './utils/focus'

import keyboardKey from './keyboardKey'

const Header = styled('h3', {
  margin: 0
})

type AccordionHeaderProps = {
  children: React.ReactNode
  headerClassName?: string
  buttonClassName?: string
}

export default React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  function AccordionHeader(props, forwardedRef) {
    const { onToggle, contentId, headerId, isExpanded } =
      useAccordionItemContext()

    const navigateFocus = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>) => {
        const elem = e.target as HTMLButtonElement

        switch (e.key) {
          case keyboardKey.SPACE:
          case keyboardKey.ENTER:
            e.preventDefault()
            onToggle && onToggle()
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
      [onToggle]
    )

    return (
      <Header
        ref={forwardedRef}
        className={props.headerClassName}
        data-accordion-component="AccordionHeader"
      >
        <button
          className={props.buttonClassName}
          id={headerId}
          aria-controls={contentId}
          aria-expanded={isExpanded}
          aria-disabled={isExpanded}
          onClick={onToggle}
          onKeyDown={navigateFocus}
        >
          {props.children}
        </button>
      </Header>
    )
  }
)
