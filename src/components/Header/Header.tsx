// import Image from "next/image"
import logo from "../../../public/images/crichub-logo.png"
// import Link from "next/link"
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

// function Header() {
//     return (
//         <header className="bg-gray-800 fixed top-0 w-full">
//             <nav className="flex justify-between items-center px-4 py-2">
//                 {/* Left side Logo*/}
//                 <div>
// <Link href={"/"} className="flex items-center justify-center gap-1">
//     <Image
//         alt="logo"
//         src={logo}
//         width={150}  // Original aspect ratio width
//         height={40}  // Desired navbar height
//         style={{
//             height: '40px', // Forces consistent height
//             width: 'auto',  // Maintains aspect ratio
//         }}
//         priority
//     />
//     <p className="font-semibold text-sm text-white ">CRIC-HUB</p>
// </Link>
//                 </div>


//                 {/* Right side */}
// <div>
//     <SignedOut>
//         Sign-In
//     </SignedOut>
//     <SignedIn>
//         <UserButton
//             afterSwitchSessionUrl="/"
//             appearance={{
//                 elements: {
//                     avatarBox: "w-10 h-10"
//                 }
//             }}

//         />
//     </SignedIn>
// </div>
//             </nav>
//         </header>


//     )
// }

// export default Header



import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 lg:px-20 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:gap-8">

        {/* <Link href={"/"}>
          <div className="flex items-center gap-4 lg:gap-12">
            <div className="flex items-center gap-2 text-primary shrink-0">
              <FiAward size={32} />
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Cric-Hub</h2>
            </div>
          </div>
        </Link> */}

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
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-primary duration-300">Cric-Hub</h2>
        </Link>

        <div className="flex items-center justify-center gap-2 md:gap-6">
          {/* Search section */}
          {/* <div className="hidden lg:flex relative items-center">
            <span className="absolute left-3 text-slate-400">
              <FiSearch size={16} />
            </span>
            <input
              type="text"
              placeholder="Search matches..."
              className="h-10 w-48 xl:w-64 rounded-full border-none bg-slate-200/50 dark:bg-zinc-800 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div> */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {[{ id: 1, name: 'Home', link: "/" }, { id: 2, name: 'Live', link: "/live" }].map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-sm font-semibold hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 md:gap-4">

            {/* Avatar Section */}
            <div>
              <SignedOut>
                <SignInButton>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all active:scale-95">
                    Sign In
                  </button>
                </SignInButton>

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



            {/* <button className="md:hidden text-slate-900 dark:text-slate-100 p-2">
              <FiMenu size={24} />
            </button> */}

          </div>

        </div>


      </div>
    </header>
  );
}
