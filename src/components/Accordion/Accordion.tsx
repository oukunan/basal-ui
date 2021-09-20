import React, { useMemo, useRef, useState } from 'react'
import { nanoid } from 'nanoid'

import { AccordionKeyboardNavigationKey } from './types'
import { AccordionContext } from './AccordionContext'
import { useUncontrolledAccordionState } from './useUncontrolledAccordionState'

type Props = {
  expanded?: any
  onToggle?: any
  children: React.ReactNode
}

export default function Accordion(props: Props) {
  const defaultExpand = props.expanded || null
  const isControlledRef = useRef(defaultExpand !== null)
  const uncontrolled = useUncontrolledAccordionState()

  const expanded = isControlledRef.current
    ? defaultExpand
    : uncontrolled.expanded

  const onToggle = isControlledRef.current
    ? props.onToggle
    : uncontrolled.onToggle

  const focusRef = useRef<number | null>(null)
  const [selected, setSelected] = useState<number[]>([])
  const id = useMemo(() => nanoid(5), [])

  const context = useMemo(
    () => ({
      focusRef,
      selected,
      expandedAll: expanded,
      onToggle,
      id,
      onNavigation: (key: AccordionKeyboardNavigationKey) => {
        if (focusRef.current === null) {
          return
        }
        switch (key) {
          case 'ArrowDown':
            if (focusRef.current >= React.Children.count(props.children) - 1) {
              setSelected([0])
            } else {
              setSelected([focusRef.current + 1])
            }
            break
          case 'ArrowUp':
            if (focusRef.current <= 0) {
              setSelected([React.Children.count(props.children) - 1])
            } else {
              focusRef.current && setSelected([focusRef.current - 1])
            }
            break
          case 'Home':
            setSelected([0])
            break
          case 'End':
            setSelected([React.Children.count(props.children) - 1])
            break
          default:
        }
      }
    }),
    [expanded, onToggle, props.children, selected, id]
  )

  return (
    <AccordionContext.Provider value={context}>
      {React.Children.map(props.children, (child, index) => {
        if (React.isValidElement(child)) {
          if (child.props.index !== undefined) {
            console.error(
              'Do not pass the `index` props to AccordionSection component'
            )
          }
          return React.cloneElement(child, {
            ...child.props,
            index
          })
        }
      })}
    </AccordionContext.Provider>
  )
}
