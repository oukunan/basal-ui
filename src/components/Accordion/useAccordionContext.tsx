import { useContext } from 'react'

import { AccordionContext } from './AccordionContext'

export default function useAccordionContext() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(
      'Accordion components are compound component. Must be used inside Accordion.'
    )
  }

  return context
}
