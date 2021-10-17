import { useCallback, useMemo, useRef, useState } from 'react'
import { AccordionMultipleProps } from './AccordionMultiple'

type UseMultipleAccordionStateProps = Pick<
  AccordionMultipleProps,
  'allowZeroCollapse' | 'onToggle' | 'value' | 'preExpand'
>

// TODO: Shall we merge this with `useSingleAccordionState?`
export default function useMultipleAccordionState(
  props: UseMultipleAccordionStateProps
) {
  const isControlled = useRef(!!props.value)
  const [uncontrolledValue, setUncontrolledValue] = useState<string[]>(() => {
    if (!isControlled.current) {
      return props.preExpand || []
    }

    return []
  })

  const value = isControlled.current ? props.value : uncontrolledValue

  const updateAccordionValue = isControlled.current
    ? props.onToggle
    : setUncontrolledValue

  const onToggle = useCallback(
    (newValue: string) => {
      if (!updateAccordionValue) {
        return
      }

      // TODO: Refactor this condition
      if (value) {
        if (value.includes(newValue)) {
          if (value.length > 1) {
            updateAccordionValue(value.filter((val) => val !== newValue))
          }

          if (value.length === 1) {
            props.allowZeroCollapse && updateAccordionValue([])
          }
        } else {
          updateAccordionValue(Array.from(new Set([...value, newValue])))
        }
      }
    },
    [props.allowZeroCollapse, updateAccordionValue, value]
  )

  return useMemo(() => ({ value, onToggle }), [onToggle, value])
}
