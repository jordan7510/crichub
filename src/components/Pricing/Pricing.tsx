import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface PlanProps {
  name: string;
  price: string;
  period: string;
  features: { text: string; included: boolean }[];
  featured?: boolean;
}

function PricingCard({ name, price, period, features, featured }: PlanProps) {
  return (
    <div 
      className={`p-6 md:p-8 rounded-xl border flex flex-col transition-all ${
        featured 
          ? 'bg-primary/10 dark:bg-primary/20 border-primary md:scale-105 shadow-xl shadow-primary/10 relative' 
          : 'bg-slate-100 dark:bg-zinc-900 border-primary/10'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      
      <h3 className={`text-lg md:text-xl font-bold mb-2 ${featured ? 'text-primary' : ''}`}>{name}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl md:text-4xl font-black">{price}</span>
        <span className="text-slate-500 text-sm">{period}</span>
      </div>
      
      <ul className="space-y-3 md:space-y-4 mb-8 grow">
        {features.map((f, i) => (
          <li key={i} className={`flex items-center gap-3 text-xs md:text-sm ${!f.included ? 'opacity-40' : ''}`}>
            {f.included ? (
              <span className="text-primary shrink-0">
  <FiCheckCircle size={20} />
</span>
            ) : (
              <span className="shrink-0">
  <FiXCircle size={20} />
</span>
            )}
            {f.text}
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 rounded-full text-sm md:text-base font-bold transition-all active:scale-95 ${
          featured 
            ? 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30' 
            : 'border-2 border-primary/30 hover:bg-primary/10'
        }`}
      >
        {featured ? 'Get Pro Access' : 'Select Plan'}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="px-4 lg:px-20 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Choose Your Access</h2>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">Get uninterrupted access to live matches, expert analysis, and exclusive locker room content.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <PricingCard 
            name="Fan Starter"
            price="$4.99"
            period="/mo"
            features={[
              { text: "720p HD Streaming", included: true },
              { text: "1 Screen Access", included: true },
              { text: "Match Highlights", included: true },
              { text: "Ad-free Experience", included: false }
            ]}
          />
          <PricingCard 
            name="Cric-Hub Pro"
            price="$12.99"
            period="/mo"
            featured
            features={[
              { text: "4K Ultra HD Streaming", included: true },
              { text: "3 Screens Access", included: true },
              { text: "Ad-free Experience", included: true },
              { text: "Multi-angle View", included: true }
            ]}
          />
          <PricingCard 
            name="Elite Yearly"
            price="$99.99"
            period="/yr"
            features={[
              { text: "All Pro Features", included: true },
              { text: "Exclusive Player Interviews", included: true },
              { text: "Locker Room VR Content", included: true },
              { text: "Priority Tickets Booking", included: true }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
