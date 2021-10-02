import { createContext, useContext } from 'react'
import { ItemID } from './types'

type AccordionContextType = {
  value?: ItemID[]
  onToggle?: (value: ItemID) => void
}

export const AccordionContext = createContext<AccordionContextType | null>(null)

export default function useAccordionContext() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      'Accordion components are compound component. Must be used inside Accordion.'
    )
  }

  return context
}
