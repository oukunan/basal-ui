import { useState, useCallback, useMemo } from 'react'

export function useUncontrolledAccordionState() {
  const [expanded, setExpanded] = useState<boolean[]>([])

  const onToggle = useCallback(
    (index: number) => {
      setExpanded(
        Object.assign([], expanded, {
          [index]: !expanded[index]
        })
      )
    },
    [expanded]
  )

  return useMemo(
    () => ({
      expanded,
      onToggle
    }),
    [expanded, onToggle]
  )
}
