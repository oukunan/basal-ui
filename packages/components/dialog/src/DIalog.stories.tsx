import { Meta } from '@storybook/react/types-6-0'

import Dialog from './Dialog'

export default {
  title: 'Components/Dialog',
  component: Dialog
} as Meta

export const Default = () => {
  return (
    <Dialog open onClose={() => console.log('onClose')}>
      <Dialog.Overlay />
      <Dialog.Content css>
        <input disabled />
        <input hidden />
        <input data-testid="input1" />
        <button data-testid="button1">Close</button>
      </Dialog.Content>
    </Dialog>
  )
}
