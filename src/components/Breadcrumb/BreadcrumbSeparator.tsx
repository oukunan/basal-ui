import React from 'react'
import { styled } from '../../../stitches.config'

const Separator = styled('li', {
  display: 'inline',
  margin: '0 8px'
})

export default function BreadcrumbSeparator(props: {
  separator: React.ReactNode
}) {
  return <Separator aria-hidden>{props.separator}</Separator>
}
