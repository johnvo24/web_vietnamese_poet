"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { FaUser } from "react-icons/fa"
import { TbPassword } from "react-icons/tb"
import { MdEmail } from "react-icons/md"
import { FaAddressCard } from "react-icons/fa"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/utils"
import { AxiosError } from "axios"
import React from 'react'

const formSchema = z.object({
  full_name: z.string().max(100),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(16),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(100),
})

type FormValues = z.infer<typeof formSchema>

const RegisterForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const response = await api.post("/auth/register", values)
      alert("Registration successful!")
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.detail || "Registration failed")
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField 
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter fullname" icon={<FaAddressCard/>} {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter email" icon={<MdEmail/>} {...field}/>
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
                <Input type="password" placeholder="Enter password" icon={<TbPassword/>} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Create account</Button>
      </form>
    </Form>
  )
}

export default RegisterForm