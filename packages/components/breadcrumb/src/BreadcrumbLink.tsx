import React from 'react'
import Link from 'next/link'

export type BreadcrumbLinkType = { label: React.ReactNode; href: string }

export default function BreadcrumbLink(props: {
  link: BreadcrumbLinkType
  className?: string
  lastLink?: boolean
}) {
  return (
    <li className={props.className} aria-current={props.lastLink && 'page'}>
      <Link href={props.link.href}>{props.link.label}</Link>
    </li>
  )
}
