import { Meta } from '@storybook/react/types-6-0'

import Dialog from './Dialog'

export default {
  title: 'Components/Dialog',
  component: Dialog
} as Meta

export const Default = () => (
  <Dialog open onClose={() => console.log('onClose')}>
    Dialog content
  </Dialog>
)
