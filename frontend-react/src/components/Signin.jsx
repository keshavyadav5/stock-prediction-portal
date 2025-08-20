import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "@/AuthProvider"

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

function Signin() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        values);
      localStorage.setItem('accessToken', response.data?.access)
      localStorage.setItem('refreshToken', response.data?.refresh)
      setIsLoggedIn(true)
      console.log("Login successful", response.data);
      navigate("/");
      form.reset();
    } catch (error) {
      console.log("Backend error:", error.response?.data);
      alert(error.response?.data?.detail || "Invalid credentials");
    }
  };

console.log(isLoggedIn)
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md"
      >

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Log In</h1>
          <p className="text-gray-600 text-sm">Access your account to continue</p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
              {errors?.username && <p className="text-red-600 text-sm">{errors.username}</p>}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage className="text-red-600" />
              {errors?.password && <p className="text-red-600 text-sm">{errors.password}</p>}
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 cursor-pointer">
          Sign In
        </Button>


        <div className="text-center text-sm text-gray-600">
          <p>Don't have an account?{" "}
            <Link to="/register" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>


    </Form>
  )
}

export default Signin
