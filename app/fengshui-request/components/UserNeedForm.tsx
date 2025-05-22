'use client'

import { Textarea, Button } from '@heroui/react'

export default function UserNeedForm() {
  return (
    <form
      action="https://formspree.io/f/xnndypqk"
      method="POST"
      className="space-y-6 max-w-2xl"
    >
      <div>
        <Textarea
          label="💡 What feature would you like to see on our site?"
          name="feature_request"
          placeholder="For example: automatic Feng Shui layout, learn Feng Shui basics, analyze multiple rooms, etc."
          isRequired
          minRows={4}
          labelPlacement="outside"
        />
      </div>

      <div>
        <Textarea
          label="📍 Why do you need this feature?"
          name="use_case"
          placeholder="E.g. I want to optimize my new apartment layout."
          minRows={3}
          labelPlacement="outside"
        />
      </div>

      <div>
        <Textarea
          label="📧 Your email (optional, for follow-up):"
          name="email"
          placeholder="your@email.com"
          minRows={1}
          labelPlacement="outside"
        />
      </div>

      <Button
        type="submit"
        color='primary'
        size='lg'
      >
        Submit Your Idea
      </Button>
    </form>
  )
}