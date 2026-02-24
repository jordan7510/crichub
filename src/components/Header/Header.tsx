import Image from "next/image"
import logo from "../../../public/images/crichub-logo.png"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

function Header() {
    return (
        <header className="bg-gray-800 fixed top-0 w-full">
            <nav className="flex justify-between items-center px-4 py-2">
                {/* Left side Logo*/}
                <div>
                    <Link href={"/"} className="flex items-center justify-center gap-1">
                        <Image
                            alt="logo"
                            src={logo}
                            width={150}  // Original aspect ratio width
                            height={40}  // Desired navbar height
                            style={{
                                height: '40px', // Forces consistent height
                                width: 'auto',  // Maintains aspect ratio
                            }}
                            priority
                        />
                        <p className="font-semibold text-sm text-white ">CRIC-HUB</p>
                    </Link>
                </div>


                {/* Right side */}
                <div>
                    <SignedOut>
                        Sign-In
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            afterSwitchSessionUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10"
                                }
                            }}

                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header