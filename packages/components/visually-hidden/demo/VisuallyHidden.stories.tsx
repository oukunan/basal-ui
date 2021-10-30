import { Meta } from '@storybook/react/types-6-0'

import { VisuallyHidden } from '../src'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden
} as Meta

export const Default = () => {
  return <VisuallyHidden>This is content</VisuallyHidden>
}
