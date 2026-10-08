import { twMerge } from "tailwind-merge"

export default function (...args: Array<string | undefined>): string {
  return twMerge(args)
}