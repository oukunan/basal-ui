import { Meta } from '@storybook/react/types-6-0'

import { Breadcrumb } from '../src/'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb
} as Meta

export const Default = () => (
  <Breadcrumb>
    <Breadcrumb.LinkWrapper>
      <Breadcrumb.Link href="/#1">Link 1</Breadcrumb.Link>
      <Breadcrumb.Link href="/#2">Link 2</Breadcrumb.Link>
      <Breadcrumb.Link href="/#3">Link 3</Breadcrumb.Link>
    </Breadcrumb.LinkWrapper>
  </Breadcrumb>
)

export const WithStringSeparator = () => (
  <Breadcrumb separator="<--->">
    <Breadcrumb.LinkWrapper>
      <Breadcrumb.Link href="/#1">Link 1</Breadcrumb.Link>
      <Breadcrumb.Link href="/#2">Link 2</Breadcrumb.Link>
      <Breadcrumb.Link href="/#3">Link 3</Breadcrumb.Link>
    </Breadcrumb.LinkWrapper>
  </Breadcrumb>
)

const MockSeparator = () => <>😎</>
export const WithComponentSeparator = () => (
  <Breadcrumb separator={<MockSeparator />}>
    <Breadcrumb.LinkWrapper>
      <Breadcrumb.Link href="/#1">Link 1</Breadcrumb.Link>
      <Breadcrumb.Link href="/#2">Link 2</Breadcrumb.Link>
      <Breadcrumb.Link href="/#3">Link 3</Breadcrumb.Link>
    </Breadcrumb.LinkWrapper>
  </Breadcrumb>
)
