import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { Breadcrumb } from '../src'

expect.extend(toHaveNoViolations)

const BaseComponent = ({ separator }: { separator?: React.ReactNode }) => (
  <Breadcrumb separator={separator}>
    <Breadcrumb.LinkWrapper>
      <Breadcrumb.Link href="label1">Label 1</Breadcrumb.Link>
      <Breadcrumb.Link href="label2">Label 2</Breadcrumb.Link>
      <Breadcrumb.Link href="label3">Label 3</Breadcrumb.Link>
    </Breadcrumb.LinkWrapper>
  </Breadcrumb>
)

it('should have no break accessibility violations', async () => {
  const { container } = render(<BaseComponent />)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should renders all links successfully', () => {
  const { container } = render(<BaseComponent />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <nav
        aria-label="Breadcrumb"
        data-basal-breadcrumb=""
      >
        <ol
          data-basal-breadcrumb-link-wrapper=""
        >
          <li
            data-basal-breadcrumb-link=""
          >
            <a
              href="/label1"
            >
              Label 1
            </a>
          </li>
          <li
            arial-hidden="true"
            data-basal-breadcrumb-separator=""
          >
            &gt;
          </li>
          <li
            data-basal-breadcrumb-link=""
          >
            <a
              href="/label2"
            >
              Label 2
            </a>
          </li>
          <li
            arial-hidden="true"
            data-basal-breadcrumb-separator=""
          >
            &gt;
          </li>
          <li
            aria-current="page"
            data-basal-breadcrumb-link=""
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
  const { container } = render(<BaseComponent />)

  expect(container.querySelector('[aria-current="page"]')?.textContent).toBe(
    'Label 3'
  )
})

it('should not renders a default separator', () => {
  const { container } = render(<BaseComponent separator="➡️" />)

  expect(
    container.querySelector('[data-basal-breadcrumb-separator=""]')?.textContent
  ).toBe('➡️')
})
