'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "Arsh@gmail.com",
        password: "Abcdefghijk"
    })

    console.log(user)

    const SignUpHandler = async () => {
        try {
            const response = await axios.post('/server/api/users/signup', user)
            // router.push('/login')
            console.log("Sign Up success", response)
        } catch (error) {
            console.log("Sign Up Failed", error.message)
        }
    }

    return (
        <div className="z-99 h-full pt-40">
            <label htmlFor="username">Email</label>
            <input
                id="email"
                value={user.email}
                placeholder="Email@example.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
            />
            <label>Password</label>
            <input
                id="password"
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
            />
            <button className="bg-black text-white font-white" onClick={SignUpHandler}>Sign Up</button>
        </div>
    )
}