import React from 'react'
import { render } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'

const baseProps: React.ComponentProps<typeof Breadcrumb> = {
  links: [
    { label: 'Label 1', href: '/label1' },
    { label: 'Label 2', href: '/label2' },
    { label: 'Label 3', href: '/label3' }
  ]
}

it('should renders all links successfully', () => {
  const { container } = render(<Breadcrumb {...baseProps} />)
  expect(container).toMatchInlineSnapshot(`
<div>
  <nav
    aria-label="Breadcrumb"
  >
    <ol
      class="c-dCVQcb"
    >
      <li
        class="c-cEkrQs"
      >
        <a
          href="/label1"
        >
          Label 1
        </a>
      </li>
      <li
        aria-hidden="true"
        class="c-ezuMSY c-ezuMSY-iPJLV-css"
        data-breadcrumb-component="BreadcrumbSeparator"
      >
        /
      </li>
      <li
        class="c-cEkrQs"
      >
        <a
          href="/label2"
        >
          Label 2
        </a>
      </li>
      <li
        aria-hidden="true"
        class="c-ezuMSY c-ezuMSY-iPJLV-css"
        data-breadcrumb-component="BreadcrumbSeparator"
      >
        /
      </li>
      <li
        aria-current="page"
        class="c-cEkrQs"
      >
        <a
          href="/label3"
        >
          Label 3
        </a>
      </li>
    </ol>
  </nav>
</div>
`)
})

it('should renders `aria-current="page" with the last link`', () => {
  const { container } = render(<Breadcrumb {...baseProps} />)

  expect(container.querySelector('[aria-current="page"]')?.textContent).toEqual(
    'Label 3'
  )
})

it('should not renders a default separator', () => {
  const { container } = render(<Breadcrumb {...baseProps} separator=">" />)

  expect(
    container.querySelector('[data-breadcrumb-component="BreadcrumbSeparator"]')
      ?.textContent
  ).toBe('>')
})
