import React, { useContext, createContext } from 'react'

type BreadcrumbContextType = {
  separator: React.ReactNode
}

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null)

export function BreadcrumbProvider(props: {
  separator: React.ReactNode
  children: React.ReactNode
}) {
  const { separator, children } = props

  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      {children}
    </BreadcrumbContext.Provider>
  )
}

export default function useBreadcrumbContext(): BreadcrumbContextType {
  const context = useContext(BreadcrumbContext)

  if (!context) {
    throw new Error('Must be used inside BreadcrumbContext Provider.')
  }

  return context
}
