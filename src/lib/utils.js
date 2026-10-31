import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Teach tailwind-merge about the custom type scale so `text-step-3` isn't
// mistaken for a colour and dropped when combined with `text-laterite`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['step--1', 'step-0', 'step-1', 'step-2', 'step-3', 'step-4', 'step-5'] }],
    },
  },
})

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
