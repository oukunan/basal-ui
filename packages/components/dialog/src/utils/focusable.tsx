// Reference: https://github.com/whatwg/html/issues/2071#issuecomment-263736022
function getFocusableChildElement(rootElement: HTMLElement) {
  const nodes: HTMLElement[] = []

  const treeWalker = document.createTreeWalker(
    rootElement,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: any) => {
        return node.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP
      }
    }
  )

  while (treeWalker.nextNode()) {
    nodes.push(treeWalker.currentNode as HTMLElement)
  }

  return nodes
}

export function getFirstLastFocusableElement(rootElement: HTMLElement) {
  const nodes = getFocusableChildElement(rootElement)

  return [nodes[0], nodes[nodes.length - 1]]
}
