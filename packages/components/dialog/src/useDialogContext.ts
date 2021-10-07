import { createContext, useContext } from 'react'

type DialogContextType = {
  open?: boolean
  onClose: () => void
}

export const DialogContext = createContext<DialogContextType | null>(null)

export default function useDialogContext() {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error(
      'Dialog components are compound component. Must be used inside Dialog.'
    )
  }

  return context
}
