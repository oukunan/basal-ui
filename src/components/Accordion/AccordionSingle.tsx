import { useMemo } from 'react'

import { CommonAccordionProps } from './Accordion'
import { AccordionContext } from './useAccordionContext'
import useSingleAccordionState from './useSingleAccordionState'

export type AccordionSingleProps = {
  value?: string
  preExpand?: string
  onToggle?: (value: string) => void
} & CommonAccordionProps

export default function AccordionSingle(props: AccordionSingleProps) {
  const { value, onToggle } = useSingleAccordionState({
    value: props.value,
    allowZeroCollapse: props.allowZeroCollapse,
    preExpand: props.preExpand,
    onToggle: props.onToggle
  })

  const context = useMemo(
    () => ({
      value: value ? [value] : [],
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
