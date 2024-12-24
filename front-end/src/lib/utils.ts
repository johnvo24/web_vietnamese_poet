import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"

const API_URL = "http://localhost:8000"
const API_AI = "http://192.168.2.162:8000"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const apiAI = axios.create({
  baseURL: API_AI
})