import { useState } from 'react'
import Dialog from '@basal-ui/dialog'

export default function DialogPage() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open the dialog</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Overlay />
        <Dialog.Content>Dialog Content</Dialog.Content>
      </Dialog>
    </div>
  )
}
