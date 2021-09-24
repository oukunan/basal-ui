import { useState, useCallback, useMemo } from 'react'

import { AccordionProps } from './Accordion'

type Props = Pick<AccordionProps, 'type'>

export default function useUncontrolledAccordionState(props: Props) {
  const [expanded, setExpanded] = useState<string[]>([])

  const onToggle = useCallback(
    (newItemId: string) => {
      switch (props.type) {
        case 'single':
          if (expanded.includes(newItemId)) {
            setExpanded([])
          } else {
            setExpanded([newItemId])
          }
          break
        case 'multiple':
          if (expanded.includes(newItemId)) {
            setExpanded((prevIds) => prevIds.filter((id) => id !== newItemId))
          } else {
            setExpanded((prevIds) => [...prevIds, newItemId])
          }
          break
        default:
      }
    },
    [expanded, props.type]
  )

  return useMemo(
    () => ({
      expanded,
      onToggle
    }),
    [expanded, onToggle]
  )
}
