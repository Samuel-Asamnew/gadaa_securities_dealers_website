import { useEffect } from 'react'

// Sets document.title for the current page, mirroring the unique <title>
// each original HTML page had (e.g. "About Us - Gadaa Securities Dealer S.C").
export default function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
