import { FiPlayCircle } from 'react-icons/fi';
import React from 'react';

interface HighlightProps {
  image: string;
  title: string;
  views: string;
  time: string;
  duration: string;
}

const HighlightCard: React.FC<HighlightProps> = ({ image, title, views, time, duration }) => {
  return (
    <div 
      className="group cursor-pointer"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
  <FiPlayCircle size={48} />
</span>
        </div>
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded">{duration}</span>
      </div>
      <h3 className="font-bold text-xs md:text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-[10px] md:text-xs text-slate-500 mt-1">{views} • {time}</p>
    </div>
  );
}

export default function Highlights() {
  const highlights = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE0g4DR1zk73w2kDSvGvUGgow7bUXZeeHDQZIZoI_GRBZO_UDeu0OUGvrzlGm-PrfrXLLsORUeWZW43bBfVj9j6rvG0k4op3RHNOM2ZsdMxEV8v3ousgOJaN9r86iVyBHMuHLcDJSqMxiiNMYy5IQXPo-bhVGxQErcpRzoJeNdm3Sq1j2VcyYLP_ymUAb_qDDXdFnLv265OYfQpOLmaUuqyI8GPOsml-ukXODmOFqopgbxMGWp_QeIQYMmiU53UifRUYq-VaFkli0E",
      title: "Kohli's Masterclass: Unbeaten 82* vs Pakistan Highlights",
      views: "2.4M views",
      time: "2 days ago",
      duration: "08:42"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpJnIMt_I4xrRZ5SxxqncQhfYmaUz004WM7wOhVgdFYibyQSq0nZK2BWColC6LxB3xHsna3w_TU9AC1JDsAOgAAzSLKC_yZVScvOu_XoaWh9-3sl6v8Jj2gNwHGrzlRZSapNA8kWHT_TqTpfjJhqdXMrNF5IOGEeqmDozQ9CyzP3L3NrVKBsF9OQ_wyoDCAZmT_pgLa6VGwUpQDxoVi-rE_xBfd7JOSeflJrLCR21XuiL2op3lycI3Uw_puUcn584hsJoGBm8jK_l7",
      title: "Starc's Fiery Spell: Every Wicket from the Final Over",
      views: "1.1M views",
      time: "5 hours ago",
      duration: "05:15"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCuA4Tp8x5RdEwkbTcbuumHImvb2qK3IdQIt7p7PFoLfpurSwWnnlDCYJImZ7vUzztS8CUfk37AtzEK_1Rt9Z8NZ-p5TACmscQNtkXIYu0keM1aplTAGznkc9lYkksHt9rFmroPwKpXdpni3aPpEdcKo13YcoELC60X_GT5g2QLuitzmwmMwI1kXfwM0wM66zi3buLp5R6d6GdUH92AUtGvYo79wIG9DdynWJqt79kVHbqwWwMEvz1OXQFkNobJMYNhiI5y2WwAEmE",
      title: "Best Catches of the Week: Unbelievable Boundary Saves",
      views: "850K views",
      time: "1 day ago",
      duration: "12:30"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSDMMbt-IxxZYybL8XcwOeOl1ZD8nkG48humSqR7ZCXjNMceQgQw4GRF-9s-eOPusG5Si1dFgh_hDpvdWTNSzsOH2w-r17DYG__JfIu4_Im0DnOCPljXIy_2T-1Zb3_fhpjv1gpHmCmOUK4IXx1e4ww8RVUXsFWcvSbSLdJ4E_BikQaUpY0FN1rkVZ9t9X1a2lWq8bf9FSK7qXRJtOKeHzwykpQfhS0hrgSIPuXHRMWlyMK-1lPpofG87-sxvDGTmwREIP07GNNN8l",
      title: "Babar Azam Century: Sublime Timing and Grace",
      views: "1.8M views",
      time: "3 days ago",
      duration: "06:22"
    }
  ];

  return (
    <section className="px-4 lg:px-20 py-12 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Top Highlights</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((h, i) => (
            <HighlightCard 
              key={i} 
              image={h.image}
              title={h.title}
              views={h.views}
              time={h.time}
              duration={h.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
