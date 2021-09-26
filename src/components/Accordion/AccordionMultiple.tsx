import { useMemo } from 'react'

import { CommonAccordionProps } from './Accordion'
import { AccordionContext } from './useAccordionContext'
import useMultipleAccordionState from './useMultipleAccordionState'

export type AccordionMultipleProps = {
  value?: string[]
  preExpand?: string[]
  onToggle?: (value: string[]) => void
} & CommonAccordionProps

export default function AccordionMultiple(props: AccordionMultipleProps) {
  const { value, onToggle } = useMultipleAccordionState({
    value: props.value,
    preExpand: props.preExpand,
    allowZeroCollapse: props.allowZeroCollapse,
    onToggle: props.onToggle
  })

  const context = useMemo(
    () => ({
      value,
      onToggle
    }),
    [onToggle, value]
  )

  return (
    <AccordionContext.Provider value={context}>
      <div className={props.className}>{props.children}</div>
    </AccordionContext.Provider>
  )
}
