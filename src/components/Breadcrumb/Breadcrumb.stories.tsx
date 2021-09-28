import { Meta } from '@storybook/react/types-6-0'

import Breadcrumb from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta

export const Basic = () => (
  <Breadcrumb
    links={[
      {
        label: 'Link 1',
        href: ''
      },
      {
        label: 'Link 2',
        href: ''
      },
      {
        label: 'Link 3',
        href: ''
      }
    ]}
  />
)
