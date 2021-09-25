import React, { createContext, useContext, useMemo } from 'react'

import useAccordionContext from './useAccordionContext'

type AccordionItemContextType = {
  itemId: string
  headerId: string
  contentId: string
  isExpanded: boolean
  onToggle?: () => void
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(
  null
)

export function AccordionItemProvider(props: {
  itemId: string
  headerId: string
  contentId: string
  children: React.ReactNode
}) {
  const accordionContext = useAccordionContext()

  const context = useMemo(
    () => ({
      itemId: props.itemId,
      headerId: props.headerId,
      contentId: props.contentId,
      isExpanded: !!accordionContext.value?.includes(props.itemId),
      onToggle: () =>
        accordionContext.onToggle && accordionContext.onToggle(props.itemId)
    }),
    [accordionContext, props.contentId, props.headerId, props.itemId]
  )

  return (
    <AccordionItemContext.Provider value={context}>
      {props.children}
    </AccordionItemContext.Provider>
  )
}

export default function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)

  if (!context) {
    throw new Error('Must be used inside AccordionItemContext Provider.')
  }

  return context
}
