import { useState } from "react";
import Input from "./Input";

export default function UserLogin () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newEamil, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return(
        <div class="flex flex-col justify-start">
            <h1 class="grid justify-start my-4 text-4xl">Sign in</h1>
            <p class="grid justify-start mb-4">Sign into your account</p>
            <div class="flex flex-col gap-4">
                <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                />
                <button 
                class="
                w-1/3
                h-16
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                bg-sky-600
                hover:opacity-80
                transition
                border-2">
                    Sign in
                </button>
                <button class="grid justify-start underline">forgot password?</button>
            </div>
            <h1 class="grid justify-start my-4 text-4xl">Register a new account</h1>
            <p class="grid justify-start mb-4">Make an account for ev car rental</p>
            <div class="flex flex-col gap-4">
                <Input
                placeholder="Email"
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEamil}
                />
                <Input
                placeholder="Password"
                onChange={(e) =>  setNewPassword(e.target.value)}
                value={newPassword}
                type="password"
                />
                <Input
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                />
                 <button 
                class="
                w-1/3
                h-16
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                bg-sky-600
                hover:opacity-80
                transition
                border-2">
                Create account
                </button>
            </div>

        </div>
    )
}