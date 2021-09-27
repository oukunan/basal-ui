import React, { useMemo } from 'react'

import { AccordionContext } from './useAccordionContext'
import useMultipleAccordionState from './useMultipleAccordionState'
import { AccordionCommonProps } from './Accordion'
import { ItemID } from './types'

type AccordionMultipleInternalProps = AccordionCommonProps & {
  value?: ItemID[]
  preExpand?: ItemID[]
  onToggle?: (value: ItemID[]) => void
}

export type AccordionMultipleProps = AccordionMultipleInternalProps & {
  type: 'multiple'
}

export default React.forwardRef<HTMLDivElement, AccordionMultipleProps>(
  function AccordionMultiple(props, ref) {
    const { allowZeroCollapse, value, preExpand, onToggle, ...restProps } =
      props

    const state = useMultipleAccordionState({
      value,
      preExpand,
      allowZeroCollapse,
      onToggle
    })

    const context = useMemo(
      () => ({
        value: state.value,
        onToggle: state.onToggle
      }),
      [state.onToggle, state.value]
    )

    return (
      <AccordionContext.Provider value={context}>
        <div ref={ref} {...restProps} />
      </AccordionContext.Provider>
    )
  }
)
