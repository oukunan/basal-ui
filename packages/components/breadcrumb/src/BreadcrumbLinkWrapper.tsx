import React, { useMemo } from 'react'

import useBreadcrumbContext from './useBreadcrumbContext'

type BreadcrumbLinkWrapperProps = {
  className?: string
  children: React.ReactNode
}

export default React.forwardRef<HTMLOListElement, BreadcrumbLinkWrapperProps>(
  function BreadcrumbLinkWrapper(props, forwardedRef) {
    const context = useBreadcrumbContext()

    const linkItems = useMemo(
      () => React.Children.toArray(props.children),
      [props.children]
    )

    const content = useMemo(
      () =>
        linkItems.reduce((acc: React.ReactNode[], currentLink, index) => {
          if (index < linkItems.length - 1) {
            acc = acc.concat(
              <li key={`link-${index}`} data-basal-breadcrumb-link="">
                {currentLink}
              </li>,
              <li
                key={`separator-${index}`}
                arial-hidden="true"
                data-basal-breadcrumb-separator=""
              >
                {context.separator}
              </li>
            )
          } else {
            acc = acc.concat(
              <li
                key={`link-${index}`}
                aria-current="page"
                data-basal-breadcrumb-link=""
              >
                {currentLink}
              </li>
            )
          }

          return acc
        }, []),
      [linkItems, context.separator]
    )

    return (
      <ol
        ref={forwardedRef}
        className={props.className}
        data-basal-breadcrumb-link-wrapper=""
      >
        {content}
      </ol>
    )
  }
)
