import Portal from '../../portal/src'

import { styled } from '../../../../stitches.config'
import useDialogContext from './useDialogContext'

const Wrapper = styled('div', {
  position: 'fixed',
  inset: 0
})

type DialogOverProps = {
  className?: string
}

export default function DialogOverlay(props: DialogOverProps) {
  const context = useDialogContext()

  if (!context.open) {
    return null
  }

  return (
    <Portal>
      <Wrapper className={props.className} data-x-dialog-overlay="" />
    </Portal>
  )
}
