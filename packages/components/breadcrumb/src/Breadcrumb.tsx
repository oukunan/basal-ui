import React from 'react'

import { BreadcrumbProvider } from './useBreadcrumbContext'
import BreadcrumbLinkWrapper from './BreadcrumbLinkWrapper'
import BreadcrumbLink from './BreadcrumbLink'

type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  separator?: React.ReactNode
  children: React.ReactNode
}

type BreadcrumbCompoundedComponentType = React.ForwardRefExoticComponent<
  BreadcrumbProps & React.RefAttributes<HTMLElement>
> & {
  LinkWrapper: typeof BreadcrumbLinkWrapper
  Link: typeof BreadcrumbLink
}

const DEFAULT_BREADCRUMB_SEPARATOR = '>'

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (props, forwardedRef) => {
    const { separator = DEFAULT_BREADCRUMB_SEPARATOR, ...restProps } = props
    return (
      <BreadcrumbProvider separator={separator}>
        <nav
          aria-label="Breadcrumb"
          {...restProps}
          ref={forwardedRef}
          data-basal-breadcrumb=""
        />
      </BreadcrumbProvider>
    )
  }
) as BreadcrumbCompoundedComponentType

Breadcrumb.LinkWrapper = BreadcrumbLinkWrapper
Breadcrumb.Link = BreadcrumbLink

export default Breadcrumb
