import React from 'react'
import { styled } from '../../../stitches.config'

import BreadcrumbLink, { BreadcrumbLinkType } from './BreadcrumbLink'
import BreadcrumbSeparator from './BreadcrumbSeparator'

const OrderList = styled('ol', {
  listStyle: 'none'
})

type BreadcrumbProps = {
  links: BreadcrumbLinkType[]
  separator?: React.ReactNode
  navClassName?: string
  listClassName?: string
  linkClassName?: string
}

export default React.forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb(props, ref) {
    const { separator = '/', links } = props

    return (
      <nav aria-label="Breadcrumb" ref={ref} className={props.navClassName}>
        <OrderList className={props.listClassName}>
          {links.reduce((acc: React.ReactNode[], link, index) => {
            if (index < links.length - 1) {
              acc = acc.concat(
                <BreadcrumbLink
                  key={`item-${index}`}
                  className={props.linkClassName}
                  link={link}
                />,
                <BreadcrumbSeparator
                  key={`separator-${index}`}
                  separator={separator}
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
        </OrderList>
      </nav>
    )
  }
)
