import React, { useMemo } from 'react'
import { useComponentStateControl } from '@basal-ui/component-state-control'

import { AccordionContext } from './useAccordionContext'
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
    const {
      allowZeroCollapse,
      value,
      preExpand,
      onToggle = () => {},
      ...restProps
    } = props

    const [state, setState] = useComponentStateControl({
      value,
      onValueChange: onToggle,
      initialValue: preExpand
    })

    const context = useMemo(
      () => ({
        value: state ?? [],
        onOpen: (value?: string) => {
          if (!value) {
            return
          }

          state
            ? setState((prevState) => [...prevState, value])
            : setState([value])
        },
        onClose: (value?: string) => {
          if (!state) {
            return
          }

          if (state.length === 1 && !allowZeroCollapse) {
            return
          }

          setState((prevState) => prevState.filter((id) => id !== value))
        }
      }),
      [allowZeroCollapse, setState, state]
    )

    return (
      <AccordionContext.Provider value={context}>
        <div ref={forwardedRef} {...restProps} data-basal-accordion="" />
      </AccordionContext.Provider>
    )
  }
)
