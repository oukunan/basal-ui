import { render, cleanup, fireEvent } from '@testing-library/react'

import Accordion from './Accordion'
import keyboardKey from '../../../utils/keyboardKey'

afterEach(cleanup)

const BaseComponent = ({
  type,
  preExpand,
  allowZeroCollapse,
  value,
  onToggle
}: any) => (
  <Accordion
    type={type}
    preExpand={preExpand}
    allowZeroCollapse={allowZeroCollapse}
    value={value}
    onToggle={onToggle}
  >
    <Accordion.Item value="one">
      <Accordion.Header>Header 1</Accordion.Header>
      <Accordion.Content>Content 1</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="two">
      <Accordion.Header>Header 2</Accordion.Header>
      <Accordion.Content>Content 2</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="three">
      <Accordion.Header>Header 3</Accordion.Header>
      <Accordion.Content>Content 3</Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

describe('single type', () => {
  it('should not render the accordion content', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    expect(getByText('Header 1')).toBeVisible()
    expect(getByText('Header 2')).toBeVisible()
    expect(getByText('Header 3')).toBeVisible()
    expect(getByText('Content 1')).not.toBeVisible()
    expect(getByText('Content 2')).not.toBeVisible()
    expect(getByText('Content 3')).not.toBeVisible()
  })

  it('should render the `second` item with `preExpand` props', () => {
    const { getByText } = render(
      <BaseComponent type="single" preExpand="two" />
    )

    expect(getByText('Content 1')).not.toBeVisible()
    expect(getByText('Content 2')).toBeVisible()
    expect(getByText('Content 3')).not.toBeVisible()
  })

  it('should able to collapse all the items when `allowZeroCollapse=true`', () => {
    const { getByText } = render(
      <BaseComponent type="single" allowZeroCollapse />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    fireEvent.click(header1)
    expect(content1).toBeVisible()
    fireEvent.click(header1)
    expect(content1).not.toBeVisible()
  })

  it('should NOT able to collapse all the items when `allowZeroCollapse=false`', () => {
    const { getByText } = render(
      <BaseComponent type="single" allowZeroCollapse={false} />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    fireEvent.click(header1)
    expect(content1).toBeVisible()
    fireEvent.click(header1)
    expect(content1).toBeVisible()
  })
})

describe('multiple type', () => {
  it('should not render the accordion content', () => {
    const { getByText } = render(<BaseComponent type="multiple" />)

    expect(getByText('Header 1')).toBeVisible()
    expect(getByText('Header 2')).toBeVisible()
    expect(getByText('Header 3')).toBeVisible()
    expect(getByText('Content 1')).not.toBeVisible()
    expect(getByText('Content 2')).not.toBeVisible()
    expect(getByText('Content 3')).not.toBeVisible()
  })

  it('should render the `second` item with `preExpand` props', () => {
    const { getByText } = render(
      <BaseComponent type="multiple" preExpand={['two', 'three']} />
    )

    expect(getByText('Content 1')).not.toBeVisible()
    expect(getByText('Content 2')).toBeVisible()
    expect(getByText('Content 3')).toBeVisible()
  })

  it('should able to collapse all the items when `allowZeroCollapse=true`', () => {
    const { getByText } = render(
      <BaseComponent type="multiple" allowZeroCollapse />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    const header2 = getByText('Header 2')
    const content2 = getByText('Content 2')

    fireEvent.click(header1)
    expect(content1).toBeVisible()
    fireEvent.click(header2)
    expect(content2).toBeVisible()

    fireEvent.click(header1)
    expect(content1).not.toBeVisible()
    fireEvent.click(header2)
    expect(content2).not.toBeVisible()
  })

  it('should NOT able to collapse all the items when `allowZeroCollapse=false`', () => {
    const { getByText } = render(
      <BaseComponent type="multiple" allowZeroCollapse={false} />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    fireEvent.click(header1)
    expect(content1).toBeVisible()
    fireEvent.click(header1)
    expect(content1).toBeVisible()
  })
})

describe('Accessibility', () => {
  it('should have all headers focusable', async () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header1 = getByText('Header 1')
    const header2 = getByText('Header 2')
    header1.focus()
    expect(header1).toHaveFocus()
    header2.focus()
    expect(header2).toHaveFocus()
  })

  it('should expand & hide header with SPACE key', () => {
    const { getByText } = render(
      <BaseComponent type="single" allowZeroCollapse />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    // TODO: Do we really need to focus this first?
    header1.focus()

    fireEvent.keyDown(header1, { key: keyboardKey.SPACE, keyCode: 32 })
    expect(header1).toHaveFocus()
    expect(content1).toBeVisible()

    fireEvent.keyDown(header1, { key: keyboardKey.SPACE, keyCode: 32 })
    expect(content1).not.toBeVisible()
    expect(header1).toHaveFocus()
  })

  it('should expand & hide header with ENTER key', () => {
    const { getByText } = render(
      <BaseComponent type="single" allowZeroCollapse />
    )

    const header1 = getByText('Header 1')
    const content1 = getByText('Content 1')

    // TODO: Do we really need to focus this first?
    header1.focus()

    fireEvent.keyDown(header1, { key: keyboardKey.ENTER, keyCode: 13 })
    expect(header1).toHaveFocus()
    expect(content1).toBeVisible()
    fireEvent.keyDown(header1, { key: keyboardKey.ENTER, keyCode: 13 })
    expect(content1).not.toBeVisible()
    expect(header1).toHaveFocus()
  })

  it('should focus a next header with DOWN ARROW key', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header1 = getByText('Header 1')
    fireEvent.keyDown(header1, {
      key: keyboardKey.DOWN,
      keyCode: 40
    })
    expect(getByText('Header 2')).toHaveFocus()
  })

  it('should focus a previous header with UP ARROW key', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header2 = getByText('Header 2')
    fireEvent.keyDown(header2, {
      key: keyboardKey.UP,
      keyCode: 38
    })
    expect(getByText('Header 1')).toHaveFocus()
  })

  it('should focus the first header with DOWN ARROW key when on the last', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header3 = getByText('Header 3')
    fireEvent.keyDown(header3, {
      key: keyboardKey.DOWN,
      keyCode: 40
    })
    expect(getByText('Header 1')).toHaveFocus()
  })

  it('should focus the last header with DOWN ARROW key when on the first', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header1 = getByText('Header 1')
    fireEvent.keyDown(header1, {
      key: keyboardKey.UP,
      keyCode: 38
    })
    expect(getByText('Header 3')).toHaveFocus()
  })

  it('should focus the first header with HOME key is pressed', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header2 = getByText('Header 2')
    fireEvent.keyDown(header2, {
      key: keyboardKey.HOME,
      keyCode: 36
    })
    expect(getByText('Header 1')).toHaveFocus()
  })

  it('should focus the first header with END key is pressed', () => {
    const { getByText } = render(<BaseComponent type="single" />)

    const header1 = getByText('Header 1')
    fireEvent.keyDown(header1, {
      key: keyboardKey.END,
      keyCode: 35
    })
    expect(getByText('Header 3')).toHaveFocus()
  })
})

describe.skip('controlled Accordion', () => {})

it('should throw en error when pass INVALID accordion type', () => {
  let errorMessage
  try {
    render(<BaseComponent type="invalidType" />)
  } catch (e: any) {
    errorMessage = e.message
  }
  expect(errorMessage).toBe(
    "Invalid Accordion `type` props. It's should be either `single` or `multiple`"
  )
})
