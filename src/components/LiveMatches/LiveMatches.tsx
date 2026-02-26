interface MatchCardProps {
  status: 'Live' | 'Upcoming';
  tournament: string;
  team1: { name: string; code: string; score?: string; overs?: string };
  team2: { name: string; code: string; score?: string; overs?: string };
  footer: string;
}

function MatchCard({ status, tournament, team1, team2, footer }: MatchCardProps) {
  return (
    <div 
      className="bg-slate-100 border border-primary/10 rounded-xl p-6 transition-all cursor-pointer group dark:bg-zinc-900 hover:border-primary/40"
    >
      <div className="flex justify-between items-center mb-6">
        <span className={`${status === 'Live' ? 'bg-red-500' : 'bg-primary'} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}>
          {status}
        </span>
        <span className="text-xs text-slate-500 font-medium">{tournament}</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-800">{team1.code}</div>
            <span className="font-bold">{team1.name}</span>
          </div>
          {team1.score && (
            <div className="text-right">
              <div className="text-xl font-black">{team1.score}</div>
              <div className="text-[10px] text-slate-500 uppercase">{team1.overs}</div>
            </div>
          )}
        </div>
        
        <div className={`flex items-center justify-between ${!team2.score ? 'opacity-60' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-800">{team2.code}</div>
            <span className="font-bold">{team2.name}</span>
          </div>
          {team2.score ? (
            <div className="text-right">
              <div className="text-xl font-black">{team2.score}</div>
              <div className="text-[10px] text-slate-500 uppercase">{team2.overs}</div>
            </div>
          ) : (
            <div className="text-right">
              <div className="text-xl font-black">Yet to bat</div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-primary/10 text-center">
        <p className="text-xs text-primary font-semibold">{footer}</p>
      </div>
    </div>
  );
}

export default function LiveMatches() {
  return (
    <section className="px-4 lg:px-20 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-primary rounded-full animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold">Live Matches</h2>
          </div>
          <a href="#" className="text-xs md:text-sm text-primary font-medium hover:underline">View All Schedule</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MatchCard 
            status="Live"
            tournament="ICC T20 World Cup"
            team1={{ name: 'India', code: 'IND', score: '182/4', overs: '18.2 Overs' }}
            team2={{ name: 'Australia', code: 'AUS' }}
            footer="India needs 18 runs from 10 balls to reach 200"
          />
          <MatchCard 
            status="Live"
            tournament="The Ashes - Day 3"
            team1={{ name: 'England', code: 'ENG', score: '342 & 89/2', overs: 'Lead by 12 runs' }}
            team2={{ name: 'Australia', code: 'AUS', score: '419', overs: 'All Out' }}
            footer="Tea Break - England leading by 12 runs"
          />
          <div 
            className="bg-slate-100 border border-primary/10 rounded-xl p-6 transition-all cursor-pointer group dark:bg-zinc-900 hover:border-primary/40"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Upcoming</span>
              <span className="text-xs text-slate-500 font-medium">SA20 League</span>
            </div>
            <div className="space-y-4 py-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-8 mb-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold text-slate-800">MI</div>
                  <span className="text-xs font-bold">MICT</span>
                </div>
                <span className="text-2xl font-black italic opacity-20">VS</span>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold text-slate-800">JSK</div>
                  <span className="text-xs font-bold">JSK</span>
                </div>
              </div>
              <p className="text-sm font-bold mt-2">Starts in 2h 45m</p>
            </div>
            <div className="mt-2 pt-4 border-t border-primary/10 text-center">
              <p className="text-xs text-slate-500">Cape Town Stadium, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
