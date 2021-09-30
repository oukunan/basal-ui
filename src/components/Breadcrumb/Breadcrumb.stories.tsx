import { Meta } from '@storybook/react/types-6-0'

import Breadcrumb from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta

const baseLinks = [
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
]

export const Default = () => <Breadcrumb links={baseLinks} />

export const WithStringSeparator = () => (
  <Breadcrumb separator=">" links={baseLinks} />
)

const MockSeparator = () => <>😎</>
export const WithComponentSeparator = () => (
  <Breadcrumb separator={<MockSeparator />} links={baseLinks} />
)
