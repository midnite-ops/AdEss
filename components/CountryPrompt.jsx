"use client"

import { useEffect, useState } from "react"

export default function CountryPrompt() {
  const [showDefault, setShowDefault] = useState(true)
  console.log(document.cookie)

  useEffect(() => {
    const cookie = document.cookie.includes("LR")
    if (!cookie) {
      setShowDefault(false)
    }
  }, [])


 const selectCountry = (country) => {
    const path = window.location.pathname.replace('/liberia', '') || '/'

    document.cookie = `preferred-country=${country}; path=/; max-age=31536000`
    window.location.href = path
}

  if (showDefault) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-4 shadow-xl flex items-center gap-4">
      <span className="text-sm">
        We noticed you're visiting from Liberia. Switch to your local site?
      </span>

      <button
        onClick={() => selectCountry("LR")}
        className="bg-secondary text-black px-4 py-2 text-sm"
      >
        Liberia
      </button>

      <button
        onClick={() => setShow(false)}
        className="text-white/70 text-sm"
      >
        Stay
      </button>
    </div>
  )
}