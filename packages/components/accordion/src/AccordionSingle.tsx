import React, { useMemo } from 'react'

import { AccordionContext } from './useAccordionContext'
import useSingleAccordionState from './useSingleAccordionState'
import { AccordionCommonProps } from './Accordion'

type AccordionSingleInternalProps = AccordionCommonProps & {
  value?: string
  preExpand?: string
  onToggle?: (value: string) => void
}

export type AccordionSingleProps = AccordionSingleInternalProps & {
  type: 'single'
}

export default React.forwardRef<HTMLDivElement, AccordionSingleProps>(
  function AccordionSingle(props, forwardRef) {
    const { allowZeroCollapse, value, preExpand, onToggle, ...restProps } =
      props

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
        <div ref={forwardRef} {...restProps} />
      </AccordionContext.Provider>
    )
  }
)
