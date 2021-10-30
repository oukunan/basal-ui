import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import VisuallyHidden from '../src/VisuallyHidden'

expect.extend(toHaveNoViolations)

it('should have no break accessibility violations', async () => {
  const { container } = render(<VisuallyHidden>This is content</VisuallyHidden>)
  const results = await axe(container)

  expect(results).toHaveNoViolations()
})

it('should renders any `children` props', async () => {
  const { container } = render(
    <VisuallyHidden>
      <div>This is content</div>
    </VisuallyHidden>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <span
        style="position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0px; border: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; word-wrap: normal;"
      >
        <div>
          This is content
        </div>
      </span>
    </div>
  `)
})
