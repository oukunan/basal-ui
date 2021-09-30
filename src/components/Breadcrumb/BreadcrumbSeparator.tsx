import React from 'react'
import { styled } from '../../../stitches.config'

const Separator = styled('li', {
  display: 'inline',
  margin: '0 8px'
})

export default function BreadcrumbSeparator(props: {
  separator: React.ReactNode
  separatorGap?: string | number
}) {
  const { separator = '/', separatorGap } = props
  return (
    <Separator
      css={{ margin: separatorGap && `0 ${separatorGap}px` }}
      data-breadcrumb-component="BreadcrumbSeparator"
      aria-hidden
    >
      {separator}
    </Separator>
  )
}
