import React, { useEffect, useRef } from 'react'

import useAccordionContext from './useAccordionContext'

type Props = {
  children: React.ReactNode
  header: React.ReactNode
}

export default function AccordionSection(props: Props) {
  // HACKED: Find the better way to keep `props` private without expose to the consumer.
  const privateIndex = 'index'
  const index = props[privateIndex]

  const headerRef = useRef<HTMLDivElement | null>(null)
  const { focusRef, selected, expandedAll, onToggle, id, onNavigation } =
    useAccordionContext()

  const expanded = expandedAll[index]

  const collapseId = `${id}-${index}-collapse`
  const headerId = `${id}-${index}-header`

  useEffect(() => {
    if (index === selected[0]) {
      headerRef.current && headerRef.current.focus()
    }
  }, [index, selected])

  return (
    <>
      <div
        id={headerId}
        role="button"
        tabIndex={0}
        aria-expanded={!!expanded}
        aria-controls={collapseId}
        onClick={() => onToggle(index)}
        onKeyDown={(e) => {
          switch (e.key) {
            case ' ':
            case 'Enter':
              e.preventDefault()
              onToggle(index)
              break
            case 'ArrowDown':
              e.preventDefault()
              onNavigation('ArrowDown')
              break
            case 'ArrowUp':
              e.preventDefault()
              onNavigation('ArrowUp')
              break
            case 'Home':
              e.preventDefault()
              onNavigation('Home')
              break
            case 'End':
              e.preventDefault()
              onNavigation('End')
              break
            default:
          }
        }}
        onFocus={() => {
          focusRef.current = index
        }}
        onBlur={() => {
          focusRef.current = null
        }}
        ref={headerRef}
      >
        {props.header}
      </div>
      <div
        id={collapseId}
        role="region"
        aria-labelledby={headerId}
        hidden={!expanded}
      >
        {expanded && props.children}
      </div>
    </>
  )
}
