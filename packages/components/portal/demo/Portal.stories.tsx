import { Meta } from '@storybook/react/types-6-0'

import Portal from '../src/Portal'

export default {
  title: 'Components/Portal',
  component: Portal
} as Meta

export const Default = () => <Portal>This is content inside portal</Portal>
