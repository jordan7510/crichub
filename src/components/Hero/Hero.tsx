import Image from 'next/image';
import Link from 'next/link';
import { FiPlayCircle } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="relative px-4 lg:px-20 py-6 md:py-10">
            <div className="mx-auto max-w-7xl">
                <div
                    className="relative overflow-hidden rounded-xl bg-slate-900 aspect-video md:aspect-21/9 flex flex-col items-center justify-center text-center p-6 md:p-8"
                >
                    <div className="absolute inset-0 opacity-60">
                        <Image
                            width={100}
                            height={100}
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUG4DAHuAe_7sF5up9JIOdhKqOU9Evlc67OLQahXZt5CIDOiFy3XrW1grfzxKQ-E661e0_riAkOmNRAm9F6vGCBPh8mdLDWLG1YG_LgUANNwI7MWtlRolxj0xRk8BwVqK2ZDDlbeclsc38eyw-J840xdv6D1czMaYQhsmbyE6oU3ejQOGjDQW2JTqnFMTv8IwCEODrcn5A_VwXL14rt0aTbQCXu46lx0zcK5xvTLjmkbeb_Y7IWTUvukcrIjkp_7zCDjs-ZzT7N43j"
                            alt="High quality cricket stadium lights cinematic shot"
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/40 to-transparent" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <h1
                            className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 md:mb-6"
                        >
                            Cricket Like <span className="text-primary italic">Never</span> Before
                        </h1>

                        <p
                            className="text-sm md:text-xl text-slate-200 mb-6 md:mb-8 font-light px-4"
                        >
                            Experience every boundary, wicket, and roar in stunning 4K resolution. Stream live matches and exclusive content anywhere, anytime.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                            <Link href={"/live"}>
                                <button
                                    className="bg-primary cursor-pointer text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary/90 active:scale-95"
                                >
                                    <FiPlayCircle size={24} />
                                    Watch Live Now
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
