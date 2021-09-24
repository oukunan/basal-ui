import React, { createContext, useContext, useMemo, useRef } from 'react'

import useAccordionStore from './useAccordionStore'
import { AccordionProps } from './Accordion'

type AccordionContextType = {
  expanded?: string[]
  onToggle?: (itemId: string) => void
}

const AccordionContext = createContext<AccordionContextType | null>(null)

type AccordionProviderProps = {
  children: React.ReactNode
} & Omit<AccordionProps, 'children'>

export function AccordionProvider(props: AccordionProviderProps) {
  const uncontrolled = useAccordionStore({ type: props.type })
  const isControlledRef = useRef(!!props.expanded)

  const expanded = isControlledRef.current
    ? props.expanded
    : uncontrolled.expanded

  const onToggle = isControlledRef.current
    ? props.onToggle
    : uncontrolled.onToggle

  const context = useMemo(
    () => ({
      expanded,
      onToggle
    }),
    [expanded, onToggle]
  )
  return (
    <AccordionContext.Provider value={context}>
      {props.children}
    </AccordionContext.Provider>
  )
}

export default function useAccordionContext() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      'Accordion components are compound component. Must be used inside Accordion.'
    )
  }

  return context
}
