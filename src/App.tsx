import React, { useState, useRef } from 'react';
import { Hexagon, ArrowRightLeft, Shield, CheckCircle, Gavel, UserCheck, Coins, ArrowRight, ArrowLeft, Bot, Database, Network, Activity, Radio, Truck, Zap } from 'lucide-react';

// Chain Logos
import SolLogo from './assets/sol.png';
import BnbLogo from './assets/bnb-bnb-logo.png';
import EthLogo from './assets/ethereum-eth-logo.png';
import TronLogo from './assets/tron-trx-logo.png';
import BaseLogo from './assets/base-logo-in-blue.png';

const AbstractLogo = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="16" rx="6" ry="13" transform="rotate(45 16 16)" stroke="url(#fluidGrad)" strokeWidth="2.5" />
    <ellipse cx="16" cy="16" rx="6" ry="13" transform="rotate(-45 16 16)" stroke="url(#fluidGrad2)" strokeWidth="2.5" />
    <defs>
      <linearGradient id="fluidGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.4" stopColor="#A78BFA" />
        <stop offset="1" stopColor="#4C1D95" />
      </linearGradient>
      <linearGradient id="fluidGrad2" x1="28" y1="4" x2="4" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F3E8FF" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
  </svg>
);

const SOLUTIONS_DATA = [
  {
    title: "Agent Marketplaces",
    icon: Bot,
    description: "Let developers fund autonomous agent tasks. Conditional payouts from escrow trigger instantly upon oracle verification.",
    tags: ["AutoTask", "GigNode"]
  },
  {
    title: "Data & API Monetization",
    icon: Database,
    description: "Enable agents to seamlessly purchase datasets and API access using sub-cent micro-transactions.",
    tags: ["DataOcean", "ComputeGrid"]
  },
  {
    title: "Multi-Agent Swarms",
    icon: Network,
    description: "Distribute payouts and joint budgets across specialized AI models working together to solve complex problems.",
    tags: ["SwarmLink", "AutoDev"]
  },
  {
    title: "AI DeFi & Arbitrage",
    icon: Activity,
    description: "Equip trading algorithms with built-in escrow mechanisms (USDT.N) to safely execute cross-chain operations.",
    tags: ["QuantBot", "YieldStream"]
  },
  {
    title: "DePIN Networks",
    icon: Radio,
    description: "Machines paying machines. Instantly settle IoT sensor data purchases and decentralized compute resources onchain.",
    tags: ["SensorMesh", "PowerGrid"]
  },
  {
    title: "Supply Chain Logistics",
    icon: Truck,
    description: "Agents autonomously paying for freight, clearing customs, and verifying delivery through immutable ledgers.",
    tags: ["LogisticsAI", "FreightNode"]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('bridge');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple the data for infinite effect
  const infiniteData = [...SOLUTIONS_DATA, ...SOLUTIONS_DATA, ...SOLUTIONS_DATA];

  React.useEffect(() => {
    // Start in the middle
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 310; // approximate width + gap
      container.scrollLeft = cardWidth * SOLUTIONS_DATA.length;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = 310;
    const totalWidth = cardWidth * SOLUTIONS_DATA.length;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = totalWidth;
    } else if (container.scrollLeft >= totalWidth * 2) {
      container.scrollLeft = totalWidth;
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-3 md:p-5">
        <div className="w-full h-[85vh] md:h-[calc(90vh-30px)] bg-black text-white font-sans selection:bg-purple-500/30 overflow-hidden relative rounded-2xl md:rounded-3xl border border-black/10">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-50"
            >
              <source src="https://cdn.dribbble.com/userupload/46841885/file/ad42bfb6935f9b405defcf628916f821.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>

          {/* Navigation */}
          <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8 w-full">
            <div className="flex items-center gap-3">
              <AbstractLogo />
              <span className="font-semibold text-xl tracking-tight">NeonBridge</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all duration-300 hover:scale-105">Features</button>
              <button onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all duration-300 hover:scale-105">Solutions</button>
              <button onClick={() => document.getElementById('frameworks')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all duration-300 hover:scale-105">Frameworks</button>
              <button onClick={() => document.getElementById('built-for')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white transition-all duration-300 hover:scale-105">Built For</button>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Total Value Locked</span>
                <span className="text-sm font-bold text-emerald-400 font-mono tracking-tight">$12.4M USD</span>
              </div>

              <div className="relative flex flex-col items-center">
                <button className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  Deploy Agent Gig
                </button>
                <span className="font-hand text-[#A78BFA] text-xl absolute -bottom-6 -right-3 transform rotate-[-6deg] whitespace-nowrap drop-shadow-md">
                  coming soon...
                </span>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <main className="relative z-10 px-6 md:px-12 w-full h-full flex flex-col justify-center items-center text-center pb-20">
            <div className="max-w-4xl mt-12 flex flex-col items-center">
              <h1 className="text-[3.5rem] md:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-6">
                Trustless<br />
                Settlement<br />
                For AI Agents
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                Smart contract escrow for the machine economy. We secure the bag while your agents execute the gig. Zero trust required, programmatic payouts.
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 text-black">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-gray-900">
            Powering Transactions that Move at the Speed of Ideas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            For nearly a decade, the world's most complex financial platforms have relied on NeonBridge to support onchain services for millions of customers.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-x-8 gap-y-16">
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-3">$33M+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                In Transaction Volume<br />Settled
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-3">120k+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                Successful Gigs
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-3">4.2k+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                Agents Settled
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-3">100+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                Assets Supported
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-medium mb-3">99.9%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                Up Time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-black">
        <div className="flex flex-col items-center text-center max-w-3xl mb-16">
          <span className="bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full mb-6">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-gray-900">
            A Programmable Gateway to<br />Autonomous Finance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            NeonBridge gives you the trustless building blocks to move money onchain.
            From conditional escrow to cross-chain routing, we make agentic finance
            easier to launch and operate at scale.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full flex border-b border-gray-200 mb-10 overflow-x-auto hide-scrollbar">
          <div className="flex gap-12 px-2">
            <button
              onClick={() => setActiveTab('bridge')}
              className={`pb-4 border-b-2 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'bridge' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
            >
              <span className={activeTab === 'bridge' ? 'text-gray-400 font-normal' : 'text-gray-300 font-normal'}>1</span> USDT BRIDGE
            </button>
            <button
              onClick={() => setActiveTab('escrow')}
              className={`pb-4 border-b-2 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'escrow' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
            >
              <span className={activeTab === 'escrow' ? 'text-gray-400 font-normal' : 'text-gray-300 font-normal'}>2</span> ESCROW
            </button>
            <button
              onClick={() => setActiveTab('resolution')}
              className={`pb-4 border-b-2 font-semibold text-sm tracking-widest uppercase flex items-center gap-2 whitespace-nowrap transition-colors ${activeTab === 'resolution' ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
            >
              <span className={activeTab === 'resolution' ? 'text-gray-400 font-normal' : 'text-gray-300 font-normal'}>3</span> RESOLUTION
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full bg-[#f8f9fa] rounded-3xl p-4 md:p-8">

          {activeTab === 'escrow' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-default group">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <Shield className="w-5 h-5 text-emerald-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Escrow</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Programmatic, conditional payouts securely locked for your agents.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <ArrowRightLeft className="w-5 h-5 text-purple-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-chain Routing</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Seamlessly route stablecoins across multiple L1s and L2s natively.
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-default group">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <CheckCircle className="w-5 h-5 text-blue-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oracle Verification</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Cryptographic proofs to automatically verify task completion.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-default group">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <Gavel className="w-5 h-5 text-orange-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dispute Resolution</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  DAO-powered or whitelisted arbiters to resolve edge-case conflicts.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-indigo-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <UserCheck className="w-5 h-5 text-indigo-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Identity</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Onchain reputation and verifiable credentials for autonomous actors.
                </p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-default group">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-8 relative">
                  <div className="absolute -inset-1 bg-yellow-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                  <Coins className="w-5 h-5 text-yellow-600 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Locked Yield</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  Automatically earn and distribute yield on locked stablecoin deposits.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'bridge' && (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                  </span>
                  Tether USDT Bridged NeonBridge (USDT.N)
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  A Purpose-Built Stablecoin for Agent Settlement
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We've built a custom stablecoin bridged on Tron, designed specifically for rapid settlement between AI agents. Our core innovation is a specialized token contract with <strong className="text-gray-900">native escrow capabilities built directly into the token layer</strong>.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-600"><strong>Fully Backed 1:1</strong> by standard USDT in verifiable reserves.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-600"><strong>Native Escrow:</strong> Smart contract locks assets securely without needing secondary deposit vaults.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-600"><strong>Tron Speed:</strong> Sub-cent fees and instant finality for micro-transactions between machine actors.</span>
                  </li>
                </ul>
                <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  Read the Whitepaper <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-teal-50 to-blue-50 rounded-full flex items-center justify-center border-8 border-white shadow-xl">
                  {/* Abstract representation of the coin */}
                  <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 shadow-inner flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm transform -rotate-45 translate-x-12"></div>
                    <span className="text-white text-4xl font-bold tracking-tighter drop-shadow-md">USDT.N</span>
                  </div>

                  {/* Orbital decorative elements */}
                  <div className="absolute w-full h-full border border-teal-200 rounded-full animate-[spin_10s_linear_infinite]">
                    <div className="absolute -top-3 left-1/2 w-6 h-6 bg-white border-2 border-teal-400 rounded-full"></div>
                  </div>
                  <div className="absolute w-[120%] h-[120%] border border-dashed border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                    <div className="absolute top-1/4 -right-2 w-4 h-4 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resolution' && (
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <Gavel className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resolution Framework</h3>
              <p className="text-gray-500 max-w-lg mb-8">
                In the rare event of an agent conflict, our decentralized arbitration system steps in. Real humans, staked AI models, or specialized DAOs can resolve disputes securely and transparently.
              </p>
              <span className="text-sm font-semibold tracking-widest text-[#A78BFA] uppercase">Coming Q3 2026</span>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between text-sm text-gray-500 px-4">
            <button className="hover:text-gray-900 transition-colors flex items-center gap-1 font-medium">
              Explore API <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-6 font-semibold opacity-60">
              <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer text-gray-700">
                <img src={SolLogo} alt="Solana" className="w-5 h-5" />
                Solana
              </span>
              <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer text-gray-700">
                <img src={BnbLogo} alt="BNB Chain" className="w-5 h-5 rounded-full bg-white p-0.5" />
                BNB Chain
              </span>
              <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer text-gray-700">
                <img src={EthLogo} alt="Ethereum" className="w-4 h-5" />
                Ethereum
              </span>
              <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer text-gray-700">
                <img src={TronLogo} alt="Tron" className="w-5 h-5" />
                Tron
              </span>
              <span className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer text-gray-700">
                <img src={BaseLogo} alt="Base" className="w-5 h-5" />
                Base
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <div id="solutions" className="p-3 md:p-5">
        <section className="w-full bg-black text-white py-24 px-6 md:px-12 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#A78BFA]/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none"></div>


          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full mb-6 inline-block">
                Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
                Unlocking the Autonomous Economy
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                NeonBridge provides a 100% on-chain environment for your machines and AI agents to trade freely. We abstract the complexity so you can deploy native escrow contracts (USDT.N) and a lightning-fast settlement network, free from human intervention.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Container with Gradient Mask */}
          <div className="relative z-10 w-full group/carousel">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 md:gap-6 pb-12 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth px-2 md:px-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
              }}
            >
              {infiniteData.map((item, index) => (
                <div
                  key={index}
                  className="w-[260px] md:w-[290px] snap-start flex-shrink-0 bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-[#A78BFA]/40 transition-all duration-300 group h-full min-h-[420px] hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold mb-8 h-14 flex items-center">
                    {item.title.includes('<br />') ? (
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    ) : item.title}
                  </h3>
                  <div className="flex-grow flex items-center justify-center mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-500 hover:scale-110 transform">
                    <item.icon className="w-20 h-20 text-[#A78BFA] drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]" strokeWidth={1} />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8 min-h-[80px]">
                    {item.description}
                  </p>
                  <div className="mt-auto font-bold text-[15px] tracking-tight text-white flex flex-wrap gap-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={tagIndex > 0 ? "opacity-50" : ""}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Agent Frameworks Section */}
      <section id="frameworks" className="w-full bg-white py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-24">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-8">
              Agent Frameworks
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Build ontop of the most established industry frameworks for AI, including native integration with autonomous agents and decentralized compute.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Illustration */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md aspect-square bg-gray-50/80 rounded-[48px] overflow-hidden flex items-center justify-center p-8">
                {/* Clean Hub-and-Spoke Network SVG */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Connection lines from center to each node */}
                  <line x1="200" y1="200" x2="200" y2="70" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="200" y1="200" x2="324" y2="128" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="200" y1="200" x2="324" y2="272" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="200" y1="200" x2="200" y2="330" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="200" y1="200" x2="76" y2="272" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="200" y1="200" x2="76" y2="128" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="6 4" />

                  {/* Orbit ring */}
                  <circle cx="200" cy="200" r="130" fill="none" stroke="#E4E4E7" strokeWidth="1" strokeDasharray="3 6" />

                  {/* Outer nodes */}
                  {/* Top */}
                  <rect x="170" y="40" width="60" height="60" rx="14" fill="white" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="200" y="75" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">LC</text>
                  {/* Top-right */}
                  <rect x="294" y="98" width="60" height="60" rx="14" fill="white" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="324" y="133" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">EOS</text>
                  {/* Bottom-right */}
                  <rect x="294" y="242" width="60" height="60" rx="14" fill="white" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="324" y="277" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">AGT</text>
                  {/* Bottom */}
                  <rect x="170" y="300" width="60" height="60" rx="14" fill="white" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="200" y="335" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">RIG</text>
                  {/* Bottom-left */}
                  <rect x="46" y="242" width="60" height="60" rx="14" fill="#F5F3FF" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="76" y="277" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">SWM</text>
                  {/* Top-left */}
                  <rect x="46" y="98" width="60" height="60" rx="14" fill="#F5F3FF" stroke="#A1A1AA" strokeWidth="1.2" />
                  <text x="76" y="133" textAnchor="middle" className="fill-gray-500" fontSize="10" fontFamily="monospace">SDK</text>

                  {/* Central hub */}
                  <circle cx="200" cy="200" r="40" fill="#1E1B4B" />
                  <circle cx="200" cy="200" r="52" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.4" className="animate-ping" style={{ animationDuration: '3s' }} />
                  {/* NeonBridge logo in center */}
                  <ellipse cx="200" cy="200" rx="14" ry="24" transform="rotate(45 200 200)" fill="none" stroke="white" strokeWidth="1.5" />
                  <ellipse cx="200" cy="200" rx="14" ry="24" transform="rotate(-45 200 200)" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Right: List of Frameworks */}
            <div className="space-y-10">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors">
                  <Network className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">LangChain</h4>
                  <p className="text-gray-500 leading-relaxed">The industry standard for building applications powered by language models.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors">
                  <Bot className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">ElizaOS</h4>
                  <p className="text-gray-500 leading-relaxed">Modern framework for social agents and on-chain autonomous actors.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors">
                  <Zap className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">AutoGPT</h4>
                  <p className="text-gray-500 leading-relaxed">The pioneer of fully autonomous AI agents that complete multi-step goals.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors">
                  <Hexagon className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Rig</h4>
                  <p className="text-gray-500 leading-relaxed">Modular and scalable framework for high-performance LLM applications in Rust.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-50 transition-colors">
                  <Activity className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">OpenAI Swarms</h4>
                  <p className="text-gray-500 leading-relaxed">Native solution for orchestrating collaborative swarms of specialized agents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Bottom Section: Built For + CTA + Footer — one seamless gradient */}
      <div className="w-full relative" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f3f0ff 8%, #e8e0ff 14%, #c4b5fd20 18%, #d4d4d8 28%, #a1a1aa 38%, #71717a 48%, #3f3f46 58%, #27272a 68%, #18181b 78%, #0a0a0a 88%, #000000 95%)'
      }}>

        {/* Built For Cards */}
        <div id="built-for" className="px-6 md:px-12 pt-32 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Card 1: Trust */}
            <div className="bg-[#080B09] rounded-[40px] p-10 md:p-14 flex flex-col items-start overflow-hidden relative group">
              <div className="bg-[#1A2E25] text-[#4ADE80] text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full mb-8">
                Security & Foundation
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-semibold mb-6">
                Built for Trustless Economy
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
                NeonBridge provides the cryptographic foundation for the machine economy, ensuring transactions are immutable and secure.
              </p>

              {/* Globe Graphic SVG */}
              <div className="mt-auto relative w-full flex justify-center py-10">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute w-48 h-48 bg-[#A78BFA]/10 rounded-full blur-3xl animate-pulse"></div>
                  <svg viewBox="0 0 100 100" className="w-56 h-56 opacity-20 text-white">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 6" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <ellipse cx="50" cy="50" rx="15" ry="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-ping" />
                  </svg>
                  {/* Digital dots effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 grid grid-cols-8 gap-2 opacity-20">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className={`w-1 h-1 bg-white rounded-full ${Math.random() > 0.7 ? 'opacity-100 animate-pulse' : 'opacity-20'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Developers */}
            <div className="bg-[#080B09] rounded-[40px] p-10 md:p-14 flex flex-col items-start overflow-hidden relative group">
              <div className="bg-[#1A2E25] text-[#4ADE80] text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full mb-8">
                AI-Native SDK
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-semibold mb-6">
                Built for Autonomous Integration
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
                Simple, high-performance APIs that let your AI agents manage payments and escrow without human intervention.
              </p>

              {/* Code Snippet Graphic */}
              <div className="mt-auto w-full bg-[#111]/80 backdrop-blur-sm rounded-2xl p-6 font-mono text-xs md:text-sm border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                <pre className="text-gray-300">
                  <code className="block leading-relaxed">
                    <span className="text-[#A78BFA]">const</span> agent = <span className="text-[#7C3AED]">new</span> NeonAgent();{'\n'}
                    <span className="text-gray-500">// Initialize settlement</span>{'\n'}
                    <span className="text-[#A78BFA]">await</span> agent.<span className="text-emerald-400">executeTask</span>({'{'}{'\n'}
                    {'  '}id: <span className="text-amber-200">"TASK_082"</span>,{'\n'}
                    {'  '}escrow: <span className="text-emerald-400">"USDT.N"</span>,{'\n'}
                    {'  '}callback: oracle.verify{'\n'}
                    {'}'});
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="py-32 px-6 md:px-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#A78BFA]/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8 leading-tight">
              Bring Autonomous<br />Payments to Scale
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Build, deploy, and settle with NeonBridge today.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">
            {/* Logo & Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <AbstractLogo />
                <span className="font-semibold text-xl tracking-tight text-white">NeonBridge</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* Discord */}
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                </a>
                {/* X / Twitter */}
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                {/* Telegram */}
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                </a>
              </div>

              <div className="space-y-2 text-sm text-gray-500">
                <a href="#" className="block hover:text-gray-300 transition-colors">Terms & Conditions ↗</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Privacy Policy ↗</a>
              </div>

              <p className="text-xs text-gray-600 mt-8">
                NeonBridge © 2026. All rights reserved.
              </p>
            </div>

            {/* About Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">About</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Ecosystem</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Brand Guidelines</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Tokenomics</a></li>
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Products</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">USDT.N Bridge</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Agent Escrow</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Dispute Resolution</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Settlement API</a></li>
              </ul>
            </div>

            {/* Coming Soon Column */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#A78BFA] mb-6">Coming Soon</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Agent Marketplace</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">SDK Reference</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Staking</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

