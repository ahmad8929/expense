import React, {useState} from "react"
import AuthLayout from "../../components/layout/AuthLayout";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <AuthLayout>
    <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p className="text-x5 text-slate-700 mt-[5x] mb-6">Please enter your details to log in</p>
      {/* <form onSubmit={handleLogin}>
        <Input 
        value={email}
        />
      </form> */}
    </div>
    </AuthLayout>
  )
}

export default Login;