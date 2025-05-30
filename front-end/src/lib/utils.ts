import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const apiAI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AI_API_BASE_URL
})