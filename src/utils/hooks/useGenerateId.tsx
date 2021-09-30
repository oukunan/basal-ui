// Reference: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/ssr/src/SSRProvider.tsx

import { useMemo, createContext, useContext } from 'react'

type IdContextValue = {
  current: number
}

const IdContext = createContext<IdContextValue>({ current: 0 })

export function IdProvider(props) {
  const context = useMemo(
    () => ({
      current: 0
    }),
    []
  )

  return <IdContext.Provider value={context} {...props} />
}

export default function useGenerateId(): string {
  const context = useContext(IdContext)

  return useMemo(() => `id-${++context.current}`, [])
}
