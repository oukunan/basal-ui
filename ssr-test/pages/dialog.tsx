import { useState } from 'react'
import Dialog from '@x-ui/dialog'

export default function DialogPage() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open the dialog</button>
      <Dialog
        open={open}
        title="Dialog title"
        content="Dialog content"
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
