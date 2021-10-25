import React, { useCallback } from 'react'

type Ref<T> = React.Ref<T>

function composeRef<T>(...refs: Ref<T>[]) {
  return (element: T) =>
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element)
      } else {
        (ref as React.MutableRefObject<T>).current = element
      }
    })
}

function useComposeRef<T>(...refs: Ref<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(composeRef(...refs), [])
}

export { useComposeRef, composeRef }
