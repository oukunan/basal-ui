import React from 'react'

export default function BreadcrumbSeparator(props: {
  separator: React.ReactNode
  separatorGap?: string | number
}) {
  const { separator = '/', separatorGap } = props
  return (
    <li
      css={{ margin: separatorGap && `0 ${separatorGap}px` }}
      data-breadcrumb-component="BreadcrumbSeparator"
      aria-hidden
    >
      {separator}
    </li>
  )
}
