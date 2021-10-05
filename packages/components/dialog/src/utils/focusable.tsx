// Reference: https://github.com/whatwg/html/issues/2071#issuecomment-263736022
function getFocusableChildElement(rootElement: HTMLElement) {
  const nodes: HTMLElement[] = []

  const treeWalker = document.createTreeWalker(
    rootElement,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node: any) => {
        if (node.hidden || node.disabled || node.tabIndex < 0) {
          return NodeFilter.FILTER_SKIP
        }

        return NodeFilter.FILTER_ACCEPT
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
