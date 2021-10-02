import React from 'react'
import Link from 'next/link'

import { styled } from '../../../../stitches.config'

export type BreadcrumbLinkType = { label: React.ReactNode; href: string }

const ListItem = styled('li', {
  display: 'inline'
})

export default function BreadcrumbLink(props: {
  link: BreadcrumbLinkType
  className?: string
  lastLink?: boolean
}) {
  return (
    <ListItem
      className={props.className}
      aria-current={props.lastLink && 'page'}
    >
      <Link href={props.link.href}>{props.link.label}</Link>
    </ListItem>
  )
}
