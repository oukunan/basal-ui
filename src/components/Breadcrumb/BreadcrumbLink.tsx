import React from 'react'
import { styled } from '../../../stitches.config'

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
    <ListItem className={props.className}>
      <a href={props.link.href} aria-current={props.lastLink && 'page'}>
        {props.link.label}
      </a>
    </ListItem>
  )
}
