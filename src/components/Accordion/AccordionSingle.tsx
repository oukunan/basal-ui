import { useMemo } from 'react'

import { AccordionContext } from './useAccordionContext'
import useSingleAccordionState from './useSingleAccordionState'
import { AccordionCommonProps } from './Accordion'
import { ItemID } from './types'

type AccordionSingleInternalProps = AccordionCommonProps & {
  value?: ItemID
  preExpand?: ItemID
  onToggle?: (value: ItemID) => void
}

export type AccordionSingleProps = AccordionSingleInternalProps & {
  type: 'single'
}

export default function AccordionSingle(props: AccordionSingleProps) {
  const { allowZeroCollapse, value, preExpand, onToggle, ...restProps } = props

  const state = useSingleAccordionState({
    value,
    allowZeroCollapse,
    preExpand,
    onToggle
  })

  const context = useMemo(
    () => ({
      value: state.value ? [state.value] : [],
      onToggle: state.onToggle
    }),
    [state.onToggle, state.value]
  )

  return (
    <AccordionContext.Provider value={context}>
      <div {...restProps} />
    </AccordionContext.Provider>
  )
}
