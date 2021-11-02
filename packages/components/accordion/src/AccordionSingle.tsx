import React, { useMemo } from 'react'
import { useComponentStateControl } from '@basal-ui/component-state-control'

import { AccordionContext } from './useAccordionContext'
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
        value: state ? [state] : [],
        onOpen: (value?: string) => value && setState(value),
        onClose: () => {
          if (!allowZeroCollapse) {
            return
          }

          setState('')
        }
      }),
      [allowZeroCollapse, setState, state]
    )

    return (
      <AccordionContext.Provider value={context}>
        <div ref={forwardRef} {...restProps} data-basal-accordion="" />
      </AccordionContext.Provider>
    )
  }
)
