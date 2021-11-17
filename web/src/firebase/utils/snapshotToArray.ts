export default function<T> (snapshot: Record<string, T>): (T & { id: string })[] {
  return Object
    .entries(snapshot)
    .map((
      [key, value],
    ) => ({ ...value, id: key }))
}
