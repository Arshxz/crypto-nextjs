import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

import dbConnect from "@/app/server/dbconfig";
import User from "@/app/server/models/User";
export const runtime = 'edge';

// Calls the connect function to establish a connection to the database.
dbConnect()

export async function POST(req, res) {
    try {
        const reqBody = await req.json()
        const { email, password } = reqBody
        console.log(reqBody)

        const user = await User.findOne({ email })
        if (user) {
            return res.json({ error: "User Already Exists" }, { status: 400 })
        }

        // Hash Password using Bcrypt
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            email,
            password: hashedPassword
        })

        const saveUser = await newUser.save()

        return NextResponse.json({
            message: "User Created Successfully",
            success: true,
            saveUser
        })
    } catch (error) {
        console.log("Eror")
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}