"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { FaUser } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(16),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(100),
})

type FormValues = z.infer<typeof formSchema>

const LoginForm = () => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const formData = new URLSearchParams()
      formData.append("username", values.username)
      formData.append("password", values.password)

      const response = await api.post("/auth/login", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })
      localStorage.setItem("token", response.data.access_token)
      router.push('/')
    } catch (error) {
      alert("Username or Password wrong")
    }
  }

  if (!isMounted) return <div>Loading...</div>

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField 
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter username" icon={<FaUser/>} {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Enter password" icon={<FaLock/>} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
  )
}

export default LoginForm