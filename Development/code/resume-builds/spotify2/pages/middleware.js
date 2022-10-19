import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(NextRequest){
    //token will exist if user is logged in
    const token = await getToken({ NextRequest, secret: process.env.JWT_SECRET });

    const { pathname } = NextRequest.nextUrl

    
    // allow the requests if the folllowing is true..
    // 1. if the token exists
    if (pathname.includes("/api/auth") || token){
        return NextResponse.next();
    } 

    // redirect them to login if no token
    if(!token && pathname !== "/login"){
        return NextResponse.redirect("/login")
    }
}