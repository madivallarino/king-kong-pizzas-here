import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware( req ){
    //token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl

    
    // allow the requests if the folllowing is true..
    // 1. if the token exists
    if (pathname.includes('/api/auth') || token){
        return NextResponse.next();
    } 

    // redirect them to login if no token
    if(!token && pathname !== '/login'){
        // const url = req.nextUrl.clone()
        // url.pathname = '/login';
        return NextResponse.redirect('/login');
    }
}