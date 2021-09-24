import { useState, useCallback, useMemo } from 'react'

export default function useUncontrolledAccordionState() {
  const [expanded, setExpanded] = useState<string[]>([])

  const onToggle = useCallback(
    (itemId: string) => {
      if (expanded.includes(itemId)) {
        setExpanded([])
      } else {
        setExpanded([itemId])
      }
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
