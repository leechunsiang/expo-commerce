import { SignIn } from "@clerk/clerk-react"
import React from "react"

const LoginPage = () => {
  return (
    <div className="text-white">
      <SignIn />
      Login Page
    </div>
  )
}

export default LoginPage
