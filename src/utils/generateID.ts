let counter = 1

export function generateID(): string {
  const current = counter
  counter++

  return String(current)
}
