import React from 'react'
import { styled } from '../../../stitches.config'

import BreadcrumbLink, { BreadcrumbLinkType } from './BreadcrumbLink'
import BreadcrumbSeparator from './BreadcrumbSeparator'

const OrderList = styled('ol', {
  listStyle: 'none',
  padding: 0,
  margin: 0
})

type BreadcrumbProps = {
  links: BreadcrumbLinkType[]
  separator?: React.ReactNode
  separatorGap?: string | number
  navClassName?: string
  listClassName?: string
  linkClassName?: string
}

export default React.forwardRef<HTMLElement, BreadcrumbProps>(
  function Breadcrumb(props, ref) {
    return (
      <nav aria-label="Breadcrumb" ref={ref} className={props.navClassName}>
        <OrderList className={props.listClassName}>
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
        </OrderList>
      </nav>
    )
  }
)
