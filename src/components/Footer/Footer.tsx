import { FiAward, FiSend } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-slate-100 border-t border-primary/10 px-4 lg:px-20 py-12 dark:bg-zinc-900/60">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12">
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 text-primary mb-6">
                            <FiAward size={32} />
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Cric-Hub</h2>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            The ultimate destination for cricket fans. Live streaming, real-time stats, and expert insights all in one place.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            {['Live Streaming', 'Video Highlights', 'Schedule', 'Rankings'].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            {['About Us', 'Careers', 'Press', 'Contact'].map(item => (
                                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Newsletter</h4>
                        <p className="text-xs text-slate-500 mb-4">Get the latest cricket updates delivered to your inbox.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="grow h-10 rounded-full border-none bg-white dark:bg-zinc-800 px-4 text-xs outline-none ring-1 ring-primary/20 focus:ring-primary transition-all"
                            />
                            <button
                                className="bg-primary text-white size-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"
                            >
                                <FiSend size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-primary/10 flex flex-col  justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold text-center md:text-center">
                    <p>CricHub does not host, store, or distribute any of the video content found on this platform. All streaming content is provided by non-affiliated third parties. CricHub is a discovery and interface tool that organizes publicly available links; we do not claim ownership of any media displayed.</p>
                    <p>© 2024 Cric-Hub Streaming Platforms. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
