/**
 * @internal only
 */
function getAllItemSiblings(elem: HTMLButtonElement): HTMLDivElement[] {
  const root = elem.closest('[data-basal-accordion=""]')

  return root
    ? Array.from(root.querySelectorAll('[data-basal-accordion-item=""]'))
    : []
}

export function focusLastSibling(elem: HTMLButtonElement) {
  const siblings = getAllItemSiblings(elem)
  const lastSibling = siblings[siblings.length - 1].querySelector(
    '[data-basal-accordion-button]'
  ) as HTMLDivElement

  lastSibling?.focus()
}

export function focusFirstSibling(elem: HTMLButtonElement) {
  const siblings = getAllItemSiblings(elem)
  const firstSibling = siblings[0].querySelector(
    '[data-basal-accordion-button]'
  ) as HTMLDivElement

  firstSibling.focus()
}

export function focusNextSibling(elem: HTMLButtonElement) {
  const siblings = getAllItemSiblings(elem)
  const currentElemIndex = siblings.indexOf(
    elem.closest('[data-basal-accordion-item=""]') as HTMLDivElement
  )

  // Focus first item when focus ring is on the last item.
  if (currentElemIndex === siblings.length - 1) {
    focusFirstSibling(elem)
    return
  }

  const nextSibling = siblings[currentElemIndex + 1].querySelector(
    '[data-basal-accordion-button]'
  ) as HTMLDivElement

  nextSibling.focus()
}

export function focusPreviousSibling(elem: HTMLButtonElement) {
  const siblings = getAllItemSiblings(elem)

  const currentElemIndex = siblings.indexOf(
    elem.closest('[data-basal-accordion-item=""]') as HTMLDivElement
  )

  if (currentElemIndex === 0) {
    focusLastSibling(elem)
    return
  }

  const previousSibling = siblings[currentElemIndex - 1].querySelector(
    '[data-basal-accordion-button]'
  ) as HTMLDivElement

  previousSibling.focus()
}
