import { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Dialog } from '../src/'

export default {
  title: 'Components/Dialog',
  component: Dialog
} as Meta

export const Default = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Overlay />
        <Dialog.Content>
          <input disabled />
          <input hidden />
          <input />
          <button>Close</button>
        </Dialog.Content>
      </Dialog>
    </>
  )
}
