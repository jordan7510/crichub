import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isRootRoute = createRouteMatcher([
    "/",
])
const isLiveRoute = createRouteMatcher([
    "/live(.*)",
])

export default clerkMiddleware(async(auth, req)=>{
    const { isAuthenticated, redirectToSignIn, userId } = await auth()
    const url = req.nextUrl;

if(isLiveRoute(req)){
    await auth.protect()
}

if(isRootRoute(req)){
    if(isAuthenticated){
        return NextResponse.redirect(new URL("/live", url));
    }else{
        return redirectToSignIn()
    }
}

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}