import React from 'react'
import Link from 'next/link'

type BreadcrumbLinkProps = React.ComponentProps<typeof Link>

export default function BreadcrumbLink(props: BreadcrumbLinkProps) {
  return <Link {...props} />
}
