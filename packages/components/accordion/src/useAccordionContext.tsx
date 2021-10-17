import { createContext, useContext } from 'react'

type AccordionContextType = {
  value?: string[]
  onToggle?: (value: string) => void
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
