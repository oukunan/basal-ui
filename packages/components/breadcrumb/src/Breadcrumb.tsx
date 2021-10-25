import React from 'react'

import { BreadcrumbProvider } from './useBreadcrumbContext'
import BreadcrumbLinkWrapper from './BreadcrumbLinkWrapper'
import BreadcrumbLink from './BreadcrumbLink'

type BreadcrumbProps = {
  className?: string
  separator?: React.ReactNode
  children: React.ReactNode
}

type BreadcrumbCompoundedComponentType = React.ForwardRefExoticComponent<
  BreadcrumbProps & React.RefAttributes<HTMLElement>
> & {
  LinkWrapper: typeof BreadcrumbLinkWrapper
  Link: typeof BreadcrumbLink
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (props, forwardedRef) => (
    <BreadcrumbProvider separator={props.separator || '>'}>
      <nav ref={forwardedRef} aria-label="Breadcrumb" data-basal-breadcrumb="">
        {props.children}
      </nav>
    </BreadcrumbProvider>
  )
) as BreadcrumbCompoundedComponentType

Breadcrumb.LinkWrapper = BreadcrumbLinkWrapper
Breadcrumb.Link = BreadcrumbLink

export default Breadcrumb
