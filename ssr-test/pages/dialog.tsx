import { useState } from 'react'
import Dialog from '@x-ui/dialog'

export default function DialogPage() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open the dialog</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>Dialog Header</Dialog.Header>
        <Dialog.Description>Dialog Description</Dialog.Description>
      </Dialog>
    </div>
  )
}
