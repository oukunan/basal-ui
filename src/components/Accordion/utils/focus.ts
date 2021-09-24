/**
 * @internal only
 */
function getRootAccordionNode(elem: HTMLButtonElement) {
  return elem.parentElement?.parentElement
}

/**
 * @internal only
 */
function getAllHeaderSiblings(elem: HTMLButtonElement) {
  const root = elem.parentElement?.parentElement
  return root
    ? Array.from(
        root.querySelectorAll('[data-accordion-component="AccordionHeader"]')
      )
    : []
}

export function focusLastSibling(elem: HTMLButtonElement) {
  const siblings = getAllHeaderSiblings(elem)

  const lastSibling = siblings[siblings.length - 1]
    .firstChild as HTMLButtonElement

  lastSibling.focus()
}

export function focusFirstSibling(elem: HTMLButtonElement) {
  const firstChild = getRootAccordionNode(elem)?.firstChild
    ?.firstChild as HTMLButtonElement

  firstChild.focus()
}

export function focusNextSibling(elem: HTMLButtonElement) {
  const siblings = getAllHeaderSiblings(elem)

  const currentElemIndex = siblings.indexOf(
    elem.parentElement as HTMLButtonElement
  )

  if (currentElemIndex === siblings.length - 1) {
    focusFirstSibling(elem)
    return
  }

  const nextSibling = siblings[currentElemIndex + 1]
    .firstChild as HTMLButtonElement

  nextSibling.focus()
}

export function focusPreviousSibling(elem: HTMLButtonElement) {
  const siblings = getAllHeaderSiblings(elem)

  const currentElemIndex = siblings.indexOf(
    elem.parentElement as HTMLButtonElement
  )

  if (currentElemIndex === 0) {
    focusLastSibling(elem)
    return
  }

  const previousSibling = siblings[currentElemIndex - 1]
    .firstChild as HTMLButtonElement

  previousSibling.focus()
}
