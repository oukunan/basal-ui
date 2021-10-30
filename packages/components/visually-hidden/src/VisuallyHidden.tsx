import React from 'react'

type VisuallyHiddenProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode
}

export default React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  function VisuallyHidden(props, forwardedRef) {
    const { style, ...restProps } = props

    return (
      <span
        {...restProps}
        style={{
          ...style,
          // See: https://accessibility.18f.gov/hidden-content
          position: 'absolute',
          width: 1,
          height: 1,
          margin: -1,
          padding: 0,
          border: 0,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal'
        }}
        ref={forwardedRef}
      />
    )
  }
)
