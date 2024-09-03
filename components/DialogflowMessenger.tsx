"use client"

// Mark this component as a Client Component
import React, { useEffect } from "react"

const DialogflowMessenger = () => {
  useEffect(() => {
    // Dynamically load the Dialogflow Messenger script after the component mounts
    const script = document.createElement("script")
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      {/* Include Dialogflow Messenger stylesheet */}
      <link
        rel="stylesheet"
        href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
      />
      {/* Add Dialogflow Messenger component */}
      <df-messenger
        project-id="bionic-path-434311-d2"
        agent-id="e16cb9ff-788d-43de-9e3b-876cd35aae85"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat-bubble chat-title="MC Mulenga and CO."></df-messenger-chat-bubble>
      </df-messenger>
      {/* Custom styling for Dialogflow Messenger */}
      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000; /* Updated font color */
            --df-messenger-font-family: Roboto; /* Updated font family */
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
          }
        `}
      </style>
    </>
  )
}

export default DialogflowMessenger
