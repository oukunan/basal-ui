import { createContext, MutableRefObject } from 'react'
import { AccordionKeyboardNavigationKey } from './types'

type ContextType = {
  focusRef: MutableRefObject<number | null>
  selected: (number | null)[]
  expandedAll: any[]
  onNavigation: (key: AccordionKeyboardNavigationKey) => void
  onToggle: any
  id: string | null
}

export const AccordionContext = createContext<ContextType>({
  focusRef: { current: null },
  selected: [null],
  expandedAll: [],
  onNavigation: () => null,
  onToggle: () => null,
  id: null
})
