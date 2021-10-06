import React from 'react'

import BreadcrumbLink, { BreadcrumbLinkType } from './BreadcrumbLink'
import BreadcrumbSeparator from './BreadcrumbSeparator'

type BreadcrumbProps = {
  links: BreadcrumbLinkType[]
  separator?: React.ReactNode
  separatorGap?: string | number
  navClassName?: string
  listClassName?: string
  linkClassName?: string
}

export default React.forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb(props, forwardedRef) {
    return (
      <nav
        aria-label="Breadcrumb"
        ref={forwardedRef}
        className={props.navClassName}
      >
        <ol className={props.listClassName}>
          {props.links.reduce((acc: React.ReactNode[], link, index) => {
            if (index < props.links.length - 1) {
              acc = acc.concat(
                <BreadcrumbLink
                  key={`item-${index}`}
                  className={props.linkClassName}
                  link={link}
                />,
                <BreadcrumbSeparator
                  key={`separator-${index}`}
                  separator={props.separator}
                  separatorGap={props.separatorGap}
                />
              )
            } else {
              acc = acc.concat(
                <BreadcrumbLink
                  className={props.linkClassName}
                  key={`item-${index}`}
                  link={link}
                  lastLink
                />
              )
            }

            return acc
          }, [])}
        </ol>
      </nav>
    )
  }
)
