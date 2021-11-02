import React, { useState, useRef, useCallback, useMemo } from 'react'

/**
 * @internal type guard
 */
function isSetterFunction<T>(
  setter: React.SetStateAction<T>
): setter is (prevState: T) => T {
  return typeof setter === 'function'
}

function useComponentStateControl<T>({
  value,
  onValueChange,
  initialValue
}: {
  /**
   * Consumer value for the `control flow`
   */
  value: T | undefined
  /**
   * Consumer onChange function for the `control flow`
   */
  onValueChange: (value: T) => void
  initialValue: T | undefined
}) {
  const [internalValue, setInternalValue] = useState(initialValue)
  const isControlled = useRef(!!value).current
  const state = useMemo(
    () => (isControlled ? value : internalValue),

    [internalValue, isControlled, value]
  )

  const setState: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (nextValue) => {
      if (isControlled && value) {
        const setter = nextValue
        const updatedValue = isSetterFunction(setter)
          ? setter(value)
          : nextValue

        if (updatedValue !== value) {
          onValueChange(nextValue as T)
        }
      } else {
        setInternalValue(nextValue as T)
      }
    },
    [isControlled, onValueChange, setInternalValue, value]
  )

  return useMemo(() => [state, setState] as const, [setState, state])
}

export { useComponentStateControl }
