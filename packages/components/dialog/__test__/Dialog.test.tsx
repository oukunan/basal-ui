import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dialog } from '@basal-ui/dialog'

const baseProps: React.ComponentProps<typeof Dialog> = {
  open: true,
  onClose: () => null,
  children: (
    <>
      <Dialog.Overlay />
      <Dialog.Content>
        <input disabled />
        <input data-testid="input1" />
        <input hidden />
        <div tabIndex={0} data-testid="div1">
          Some div
        </div>
        <button data-testid="button1">Close</button>
      </Dialog.Content>
    </>
  )
}

describe('Tab focusable element', () => {
  it('should focus the first focusable element when dialog is open', () => {
    const { getByTestId } = render(<Dialog {...baseProps} />)

    expect(getByTestId('input1')).toHaveFocus()
  })

  it('should focus next focusable element', () => {
    const { getByTestId } = render(<Dialog {...baseProps} />)

    userEvent.tab()

    expect(getByTestId('div1')).toHaveFocus()
  })

  describe('Trapping focus within the dialog', () => {
    it('should focus the first focusable element when on the last', () => {
      const { getByTestId } = render(<Dialog {...baseProps} />)

      getByTestId('button1').focus()
      userEvent.tab()

      expect(getByTestId('input1')).toHaveFocus()
    })

    it('should focus the last focusable element when on the first', () => {
      const { getByTestId } = render(<Dialog {...baseProps} />)

      userEvent.tab({ shift: true })

      expect(getByTestId('button1')).toHaveFocus()
    })
  })
})
