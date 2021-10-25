import React, { useMemo } from 'react'

import { AccordionContext } from './useAccordionContext'
import useMultipleAccordionState from './useMultipleAccordionState'
import { AccordionCommonProps } from './Accordion'

type AccordionMultipleInternalProps = AccordionCommonProps & {
  value?: string[]
  preExpand?: string[]
  onToggle?: (value: string[]) => void
}

export type AccordionMultipleProps = AccordionMultipleInternalProps & {
  type: 'multiple'
}

export default React.forwardRef<HTMLDivElement, AccordionMultipleProps>(
  function AccordionMultiple(props, forwardedRef) {
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
        <div ref={forwardedRef} {...restProps} data-basal-accordion="" />
      </AccordionContext.Provider>
    )
  }
)
