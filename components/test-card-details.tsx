"use client"

import React, { useState } from "react"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 font-medium text-blue-600 hover:underline"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  )
}

export function TestCardDetails() {
  return (
    <ul className="mt-2 list-disc pl-4">
      <li>
        <strong>Card Holder Details:</strong> Use your own name details
      </li>
      <li>
        <strong>Card Numbers:</strong>
        <div className="flex items-center">
          <span>5436 8862 6984 8367</span>
          <CopyButton text="5436886269848367" />
        </div>
        <div className="flex items-center">
          <span>4012 8888 8888 1881</span>
          <CopyButton text="4012888888881881" />
        </div>
        <div className="flex items-center">
          <span>3456 7890 1234 564</span>
          <CopyButton text="345678901234564" />
        </div>
      </li>
      <li>
        <strong>Expiry:</strong> 12/24
      </li>
      <li>
        <strong>CVV:</strong> 123
      </li>
    </ul>
  )
}
