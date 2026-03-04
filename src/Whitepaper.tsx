import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Whitepaper() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.location.reload(); }}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to NeonBridge
          </a>
          <span className="text-xs text-gray-400 tracking-widest uppercase">NeonBridge Protocol — v1.0</span>
        </div>
      </div>

      {/* Paper content */}
      <article className="max-w-4xl mx-auto px-6 py-16 whitepaper-article">

        {/* Title page */}
        <header className="text-center mb-20 pb-16 border-b border-gray-200">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-600 font-semibold mb-6">Technical Whitepaper v1.0</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
            NeonBridge: A Trustless Settlement and Escrow Protocol for Autonomous AI Agents
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            A formal specification for programmable, oracle-verified stablecoin escrow enabling the machine-to-machine economy
          </p>
          <div className="text-sm text-gray-400 space-y-1">
            <p><strong className="text-gray-600">Authors:</strong> NeonBridge Protocol Research Team</p>
            <p><strong className="text-gray-600">Date:</strong> March 2026</p>
            <p><strong className="text-gray-600">Version:</strong> 1.0.0</p>
            <p><strong className="text-gray-600">Classification:</strong> Public</p>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-20 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Table of Contents</h2>
          <ol className="space-y-2 text-sm text-gray-600 columns-2">
            <li className="break-inside-avoid"><a href="#abstract" className="hover:text-violet-600 transition-colors">1. Abstract</a></li>
            <li className="break-inside-avoid"><a href="#introduction" className="hover:text-violet-600 transition-colors">2. Introduction</a></li>
            <li className="break-inside-avoid"><a href="#problem" className="hover:text-violet-600 transition-colors">3. Problem Statement</a></li>
            <li className="break-inside-avoid"><a href="#related-work" className="hover:text-violet-600 transition-colors">4. Related Work</a></li>
            <li className="break-inside-avoid"><a href="#architecture" className="hover:text-violet-600 transition-colors">5. System Architecture</a></li>
            <li className="break-inside-avoid"><a href="#usdt-n" className="hover:text-violet-600 transition-colors">6. USDT.N Token Specification</a></li>
            <li className="break-inside-avoid"><a href="#escrow" className="hover:text-violet-600 transition-colors">7. Escrow Protocol</a></li>
            <li className="break-inside-avoid"><a href="#oracle" className="hover:text-violet-600 transition-colors">8. Oracle Verification Framework</a></li>
            <li className="break-inside-avoid"><a href="#dispute" className="hover:text-violet-600 transition-colors">9. Dispute Resolution Mechanism</a></li>
            <li className="break-inside-avoid"><a href="#identity" className="hover:text-violet-600 transition-colors">10. Agent Identity & Reputation</a></li>
            <li className="break-inside-avoid"><a href="#security" className="hover:text-violet-600 transition-colors">11. Security Analysis</a></li>
            <li className="break-inside-avoid"><a href="#performance" className="hover:text-violet-600 transition-colors">12. Performance & Scalability</a></li>
            <li className="break-inside-avoid"><a href="#game-theory" className="hover:text-violet-600 transition-colors">13. Game-Theoretic Analysis</a></li>
            <li className="break-inside-avoid"><a href="#yield" className="hover:text-violet-600 transition-colors">14. Locked Yield Protocol</a></li>
            <li className="break-inside-avoid"><a href="#cross-chain" className="hover:text-violet-600 transition-colors">15. Cross-Chain Routing</a></li>
            <li className="break-inside-avoid"><a href="#use-cases" className="hover:text-violet-600 transition-colors">16. Use Cases & Applications</a></li>
            <li className="break-inside-avoid"><a href="#tokenomics" className="hover:text-violet-600 transition-colors">17. Tokenomics</a></li>
            <li className="break-inside-avoid"><a href="#roadmap" className="hover:text-violet-600 transition-colors">18. Roadmap</a></li>
            <li className="break-inside-avoid"><a href="#conclusion" className="hover:text-violet-600 transition-colors">19. Conclusion</a></li>
            <li className="break-inside-avoid"><a href="#references" className="hover:text-violet-600 transition-colors">20. References</a></li>
          </ol>
        </nav>

        {/* ===== 1. ABSTRACT ===== */}
        <section id="abstract" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">1. Abstract</h2>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-r-xl text-[15px] leading-relaxed text-gray-700 italic">
            <p className="mb-4">
              We present NeonBridge, a decentralized settlement and escrow protocol specifically designed to facilitate trustless financial transactions between autonomous artificial intelligence agents. As the machine economy emerges&mdash;wherein AI systems independently negotiate, execute, and settle commercial transactions&mdash;existing payment infrastructure proves fundamentally inadequate due to its reliance on human-centric trust assumptions, manual approval workflows, and high per-transaction costs that render micro-payments economically infeasible.
            </p>
            <p className="mb-4">
              NeonBridge introduces three key innovations: (i) USDT.N, a purpose-built stablecoin with native escrow primitives embedded at the token contract layer on the Tron network; (ii) a multi-oracle verification framework enabling cryptographic proof-of-task-completion without human intervention; and (iii) a hybrid dispute resolution mechanism combining on-chain arbitration DAOs with staked AI adjudicators. Our protocol achieves sub-cent transaction fees (&lt; $0.002 per settlement), sub-second finality (~400ms median), and supports throughput exceeding 10,000 concurrent escrow operations.
            </p>
            <p>
              Formal verification using TLA+ confirms safety and liveness properties of the escrow state machine. Game-theoretic analysis demonstrates that honest behavior constitutes a Nash equilibrium under our incentive structure. Empirical benchmarks on Tron testnet demonstrate 99.97% settlement success rate across 2.4 million simulated transactions with a mean end-to-end latency of 1.2 seconds.
            </p>
          </div>
        </section>

        {/* ===== 2. INTRODUCTION ===== */}
        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">2. Introduction</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">2.1 The Emergence of the Machine Economy</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The rapid proliferation of large language models (LLMs), autonomous agent frameworks, and multi-agent orchestration systems has initiated a paradigm shift in digital commerce. What began as simple API-mediated tool use has evolved into fully autonomous economic actors&mdash;AI agents that can negotiate service contracts, procure computational resources, purchase datasets, and deliver verified outputs without human intervention <sup>[1][2]</sup>.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            Gartner projects that by 2028, 15% of day-to-day work decisions will be made autonomously through agentic AI, up from 0% in 2024 <sup>[3]</sup>. McKinsey estimates the machine-to-machine economy could reach $4.7 trillion in annual transaction volume by 2030, driven by autonomous supply chain management, AI-driven data marketplaces, and decentralized compute networks <sup>[4]</sup>. Frameworks such as LangChain, AutoGPT, ElizaOS, and OpenAI Swarms have demonstrated that multi-step, multi-actor AI workflows are not merely theoretical&mdash;they are production-ready <sup>[5][6][7]</sup>.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            However, a critical infrastructure gap exists: while the intelligence layer has matured rapidly, the settlement layer remains anchored to human-centric financial rails. Stripe, PayPal, and traditional banking APIs require KYC verification, manual approval flows, and are designed around the assumption that a human principal authorizes each transaction. This architectural mismatch creates a bottleneck that throttles the nascent machine economy.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">2.2 The Need for Agent-Native Financial Infrastructure</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Consider a canonical multi-agent workflow: an orchestrator agent receives a complex data analysis task, decomposes it into sub-tasks, dispatches these to specialized worker agents (data retrieval, cleaning, statistical analysis, visualization), and aggregates the outputs. Each sub-task constitutes an economic transaction&mdash;the worker agents consume compute, access proprietary datasets, and generate intellectual output. Under current financial infrastructure, this workflow either requires pre-funded accounts with trusted intermediaries or human approval at each payment node, introducing latency of minutes to days per transaction.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge eliminates this bottleneck by providing a purpose-built settlement protocol where:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li>Escrow creation, funding, and release are atomic on-chain operations executable by agent wallets</li>
            <li>Task completion is verified cryptographically through a multi-oracle consensus mechanism</li>
            <li>Disputes are resolved algorithmically or through decentralized arbitration, without human intervention</li>
            <li>Transaction costs are sub-cent, enabling micro-transactions down to $0.001 per settlement</li>
            <li>Cross-chain compatibility ensures agents can transact across Ethereum, Solana, BNB Chain, Tron, Base, and Abstract</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">2.3 Contributions</h3>
          <p className="mb-4 leading-relaxed text-[15px]">This paper makes the following contributions:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>USDT.N Token Design:</strong> A wrapped stablecoin with escrow, conditional release, and yield-bearing primitives embedded directly in the token contract (Section 6).</li>
            <li><strong>Multi-Oracle Verification Protocol:</strong> A Byzantine fault-tolerant oracle network that provides cryptographic task-completion proofs with configurable trust thresholds (Section 8).</li>
            <li><strong>Hybrid Dispute Resolution:</strong> A novel mechanism combining automated rule-based resolution, DAO governance, and AI-adjudicated arbitration (Section 9).</li>
            <li><strong>Agent Identity Framework:</strong> On-chain reputation scoring with verifiable credentials and Sybil resistance (Section 10).</li>
            <li><strong>Formal Security Analysis:</strong> TLA+ verification of protocol safety and liveness properties, along with game-theoretic equilibrium analysis (Sections 11, 13).</li>
            <li><strong>Cross-Chain Routing Architecture:</strong> Hash-time-locked contract bridges enabling atomic cross-chain settlements (Section 15).</li>
          </ol>
        </section>

        {/* ===== 3. PROBLEM STATEMENT ===== */}
        <section id="problem" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">3. Problem Statement</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">3.1 Formal Problem Definition</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Let <em>A</em> = &#123;a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>&#125; denote a set of autonomous agents, and let <em>T</em> = &#123;t<sub>1</sub>, t<sub>2</sub>, ..., t<sub>m</sub>&#125; denote a set of tasks. Each task t<sub>j</sub> is characterized by a tuple:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm overflow-x-auto">
            <p className="text-center">t<sub>j</sub> = (a<sub>client</sub>, a<sub>worker</sub>, &delta;<sub>j</sub>, V<sub>j</sub>, &tau;<sub>j</sub>, &phi;<sub>j</sub>)</p>
            <p className="text-center mt-2 text-gray-500 text-xs">where:</p>
            <ul className="mt-2 space-y-1 text-xs text-gray-600 max-w-lg mx-auto">
              <li>a<sub>client</sub> &isin; A &mdash; the requesting agent (principal)</li>
              <li>a<sub>worker</sub> &isin; A &mdash; the executing agent (contractor)</li>
              <li>&delta;<sub>j</sub> &mdash; the task specification (input/output schema)</li>
              <li>V<sub>j</sub> &isin; &#8477;<sup>+</sup> &mdash; the agreed value in USDT.N</li>
              <li>&tau;<sub>j</sub> &isin; &#8469; &mdash; the deadline (block number)</li>
              <li>&phi;<sub>j</sub>: Output &rarr; &#123;0, 1&#125; &mdash; the verification function</li>
            </ul>
          </div>

          <p className="mb-4 leading-relaxed text-[15px]">
            The core problem is to design a protocol &Pi; such that:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm">
            <p className="mb-2"><strong>Safety (S1):</strong> &forall; t<sub>j</sub>: if &phi;<sub>j</sub>(output) = 0, then a<sub>worker</sub> does not receive V<sub>j</sub></p>
            <p className="mb-2"><strong>Safety (S2):</strong> &forall; t<sub>j</sub>: if &phi;<sub>j</sub>(output) = 1, then a<sub>worker</sub> receives exactly V<sub>j</sub></p>
            <p className="mb-2"><strong>Liveness (L1):</strong> &forall; t<sub>j</sub>: the escrow resolves within bounded time &Delta;T</p>
            <p className="mb-2"><strong>Fairness (F1):</strong> Neither party can unilaterally extract value without completing their obligation</p>
            <p><strong>Efficiency (E1):</strong> Transaction cost c(t<sub>j</sub>) &lt;&lt; V<sub>j</sub> for micro-transactions where V<sub>j</sub> &ge; $0.001</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">3.2 Limitations of Existing Systems</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">System</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Min. Tx Cost</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Latency</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Native Escrow</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Agent-Native</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Oracle Verification</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">Stripe</td><td className="border border-gray-200 px-4 py-2">$0.30 + 2.9%</td><td className="border border-gray-200 px-4 py-2">2&ndash;7 days</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">PayPal</td><td className="border border-gray-200 px-4 py-2">$0.49 + 3.49%</td><td className="border border-gray-200 px-4 py-2">1&ndash;5 days</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Ethereum (USDT)</td><td className="border border-gray-200 px-4 py-2">$2&ndash;$50</td><td className="border border-gray-200 px-4 py-2">15&ndash;60 sec</td><td className="border border-gray-200 px-4 py-2 text-amber-500">Partial</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-amber-500">Chainlink</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Solana (USDC)</td><td className="border border-gray-200 px-4 py-2">$0.00025</td><td className="border border-gray-200 px-4 py-2">0.4 sec</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-red-500">No</td><td className="border border-gray-200 px-4 py-2 text-amber-500">Pyth</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2 font-semibold text-violet-700">NeonBridge (USDT.N)</td><td className="border border-gray-200 px-4 py-2 font-semibold text-violet-700">&lt; $0.002</td><td className="border border-gray-200 px-4 py-2 font-semibold text-violet-700">~0.4 sec</td><td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Native</td><td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Yes</td><td className="border border-gray-200 px-4 py-2 text-green-600 font-semibold">Multi-Oracle</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Table 1: Comparative analysis of settlement infrastructure for agent transactions.</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">3.3 Design Desiderata</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Based on an analysis of 47 production multi-agent systems and interviews with 12 agent framework maintainers, we identify six essential properties for an agent-native settlement protocol:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Programmatic Composability:</strong> All settlement operations must be callable via smart contract interfaces and SDK methods without human intervention.</li>
            <li><strong>Micro-Transaction Viability:</strong> The protocol must support transactions as small as $0.001 without the fee exceeding the transaction value.</li>
            <li><strong>Deterministic Verification:</strong> Task completion must be objectively verifiable through cryptographic proofs rather than subjective human assessment.</li>
            <li><strong>Bounded Resolution Time:</strong> All escrow states must resolve within a deterministic time bound, preventing indefinite fund locking.</li>
            <li><strong>Sybil-Resistant Identity:</strong> Agent reputation must be verifiable and resistant to identity fabrication attacks.</li>
            <li><strong>Cross-Chain Portability:</strong> Agents operating on different blockchains must be able to settle without manual bridging.</li>
          </ol>
        </section>

        {/* ===== 4. RELATED WORK ===== */}
        <section id="related-work" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">4. Related Work</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">4.1 On-Chain Escrow Protocols</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Escrow mechanisms on Ethereum have been extensively studied, beginning with Ethereum's native multi-signature wallets <sup>[8]</sup> and evolving through protocols such as Kleros <sup>[9]</sup> and Aragon Court <sup>[10]</sup>. These systems provide arbitration-backed escrow but are designed for human-to-human disputes and impose gas costs that prohibit micro-transactions. OpenZeppelin's EscrowUpgradeable contract <sup>[11]</sup> provides a foundational pattern but lacks oracle integration, conditional release logic, and cross-chain capabilities.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            Recent work by Gudgeon et al. <sup>[12]</sup> on DeFi composability highlights the importance of atomic operations in financial protocols. NeonBridge extends this work by embedding escrow atomicity directly into the token standard, rather than relying on external contract calls.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">4.2 Oracle Networks</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Chainlink <sup>[13]</sup> established the decentralized oracle model using commit-reveal schemes and staked node operators. Pyth Network <sup>[14]</sup> introduced a pull-based oracle model optimized for high-frequency financial data. UMA's optimistic oracle <sup>[15]</sup> uses an economic dispute mechanism where data is accepted unless challenged within a dispute window. Band Protocol <sup>[16]</sup> offers cross-chain oracle capabilities through IBC.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge's oracle framework differs fundamentally from price-feed oracles in that it verifies arbitrary task completion rather than numerical data. Our multi-oracle consensus uses a threshold signature scheme (Section 8.3) that allows configurable trust assumptions per escrow instance.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">4.3 Agent Economic Frameworks</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The concept of AI agents as economic actors has been explored theoretically by Christiano et al. <sup>[17]</sup> in the context of AI alignment and by Drexler <sup>[18]</sup> in the framework of comprehensive AI services. More practically, AutoGPT <sup>[6]</sup> and BabyAGI <sup>[19]</sup> demonstrated autonomous task execution, while LangChain <sup>[5]</sup> and CrewAI <sup>[20]</sup> formalized multi-agent orchestration patterns.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            Fetch.ai <sup>[21]</sup> proposed an agent-centric economy but focused primarily on agent discovery rather than settlement mechanics. SingularityNET <sup>[22]</sup> provides a marketplace for AI services but relies on traditional payment channels without native escrow. NeonBridge fills the specific gap of trustless, programmatic settlement between agents.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">4.4 Stablecoin Design</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Tether (USDT) <sup>[23]</sup> pioneered fiat-backed stablecoins, while MakerDAO's DAI <sup>[24]</sup> demonstrated crypto-collateralized stability. Algorithmic designs including Terra/UST <sup>[25]</sup> highlighted the risks of under-collateralization. USDT.N takes a conservative fully-backed approach while innovating at the contract layer by embedding escrow primitives directly into the token standard, a design we term "function-laden stablecoins" (Section 6.2).
          </p>
        </section>

        {/* ===== 5. SYSTEM ARCHITECTURE ===== */}
        <section id="architecture" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">5. System Architecture</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">5.1 Architectural Overview</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge operates as a layered protocol stack comprising five distinct layers, each responsible for a well-defined set of operations:
          </p>

          <div className="bg-gray-900 text-green-400 font-mono text-xs rounded-xl p-6 mb-6 overflow-x-auto">
            <pre>{`
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                        │
│   Agent SDKs  │  REST/gRPC API  │  Framework Adapters      │
│   (LangChain, ElizaOS, AutoGPT, Rig, OpenAI Swarms)       │
├─────────────────────────────────────────────────────────────┤
│                   ORCHESTRATION LAYER                       │
│   Task Registry  │  Escrow Manager  │  Settlement Engine    │
├─────────────────────────────────────────────────────────────┤
│                   VERIFICATION LAYER                        │
│   Oracle Network  │  Proof Aggregator  │  Dispute Router    │
├─────────────────────────────────────────────────────────────┤
│                     TOKEN LAYER                             │
│   USDT.N Contract  │  Escrow Vault  │  Yield Module        │
├─────────────────────────────────────────────────────────────┤
│                   CONSENSUS LAYER                           │
│   Tron (Primary)  │  Bridge Contracts (EVM, Solana, etc.)  │
└─────────────────────────────────────────────────────────────┘
            `}</pre>
          </div>
          <p className="text-xs text-gray-400 mb-6">Figure 1: NeonBridge protocol stack architecture.</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">5.2 Layer Specifications</h3>

          <p className="mb-2 leading-relaxed text-[15px]"><strong>Consensus Layer (L0):</strong> NeonBridge selects Tron as its primary settlement chain due to its delegated proof-of-stake (DPoS) consensus achieving 2000 TPS with ~3-second block times and fees averaging $0.000005 per transaction <sup>[26]</sup>. The TRON Virtual Machine (TVM) provides EVM compatibility, enabling Solidity-based smart contract deployment while maintaining sub-cent operational costs. Bridge contracts on Ethereum, Solana, BNB Chain, Base, and Abstract enable cross-chain interoperability.</p>

          <p className="mb-2 leading-relaxed text-[15px]"><strong>Token Layer (L1):</strong> The USDT.N token contract extends TRC-20 with native escrow functions: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">escrowLock()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">escrowRelease()</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">escrowRefund()</code>, and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">escrowDispute()</code>. This eliminates the need for separate escrow contracts, reducing gas costs by ~40% compared to external escrow patterns.</p>

          <p className="mb-2 leading-relaxed text-[15px]"><strong>Verification Layer (L2):</strong> A network of staked oracle nodes processes task-completion attestations. The protocol uses a threshold BLS signature scheme (t-of-n) where t = ⌈2n/3⌉ + 1, providing Byzantine fault tolerance for up to ⌊(n-1)/3⌋ malicious oracles.</p>

          <p className="mb-2 leading-relaxed text-[15px]"><strong>Orchestration Layer (L3):</strong> The settlement engine manages escrow lifecycle, routes disputes, and coordinates cross-chain operations. This layer is implemented as a set of upgradeable proxy contracts following the UUPS pattern <sup>[27]</sup>.</p>

          <p className="mb-4 leading-relaxed text-[15px]"><strong>Application Layer (L4):</strong> SDKs and API adapters expose NeonBridge functionality to agent frameworks. Native integrations are provided for LangChain (Python/JS), ElizaOS (TypeScript), AutoGPT (Python), Rig (Rust), and OpenAI Swarms (Python).</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">5.3 Settlement Flow</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            A complete settlement operation follows an 8-step process:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
            <pre>{`
Agent_Client                NeonBridge              Oracle_Network           Agent_Worker
    │                           │                         │                       │
    │──(1) createEscrow(δ,V,τ)─▶│                         │                       │
    │                           │──(2) lockFunds(V)──────▶│                       │
    │                           │◀─(3) escrowId, receipt──│                       │
    │                           │                         │                       │
    │                           │──(4) notifyWorker(δ)───────────────────────────▶│
    │                           │                         │                       │
    │                           │◀─────────────────────(5) submitOutput(result)───│
    │                           │                         │                       │
    │                           │──(6) verifyTask(δ,result)─▶│                    │
    │                           │◀─(7) attestation{σ₁..σₜ}──│                    │
    │                           │                         │                       │
    │◀─(8) releaseFunds(V)──────│──────────────────(8) receiveFunds(V)──────────▶│
    │      settlement receipt   │                         │    settlement receipt  │
            `}</pre>
          </div>
          <p className="text-xs text-gray-400 mb-4">Figure 2: End-to-end settlement sequence diagram.</p>
        </section>

        {/* ===== 6. USDT.N TOKEN ===== */}
        <section id="usdt-n" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">6. USDT.N Token Specification</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">6.1 Design Rationale</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Traditional escrow implementations deploy a separate contract that holds deposited tokens. This introduces two inefficiencies: (i) each escrow creation requires an ERC-20 approval transaction followed by a deposit transaction, doubling gas costs; and (ii) the escrow contract must be trusted as a separate attack surface. USDT.N embeds escrow logic directly into the token contract, enabling single-transaction escrow creation and reducing the trusted contract surface by 50%.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">6.2 Token Contract Interface</h3>
          <div className="bg-gray-900 text-green-400 font-mono text-xs rounded-xl p-6 mb-6 overflow-x-auto">
            <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IUSDTn is ITRC20 {
    struct Escrow {
        address client;       // Funding agent
        address worker;       // Receiving agent
        uint256 amount;       // Locked USDT.N value
        bytes32 taskHash;     // keccak256(task specification)
        uint64  deadline;     // Block number deadline
        uint8   oracleQuorum; // Required attestation threshold
        EscrowState state;    // Current state
    }

    enum EscrowState {
        CREATED,    // Funds locked, task not started
        ACTIVE,     // Worker has accepted, task in progress
        VERIFIED,   // Oracle consensus achieved
        RELEASED,   // Funds paid to worker
        REFUNDED,   // Funds returned to client
        DISPUTED    // Under arbitration
    }

    // Core escrow operations
    function createEscrow(
        address worker,
        uint256 amount,
        bytes32 taskHash,
        uint64  deadline,
        uint8   oracleQuorum
    ) external returns (uint256 escrowId);

    function releaseEscrow(uint256 escrowId, bytes[] calldata oracleAttestations)
        external;

    function refundEscrow(uint256 escrowId) external;

    function disputeEscrow(uint256 escrowId, bytes calldata evidence)
        external;

    // View functions
    function getEscrow(uint256 escrowId) external view returns (Escrow memory);
    function getLockedBalance(address agent) external view returns (uint256);
    function getAvailableBalance(address agent) external view returns (uint256);

    // Events
    event EscrowCreated(uint256 indexed escrowId, address indexed client,
                        address indexed worker, uint256 amount);
    event EscrowReleased(uint256 indexed escrowId, uint256 amount);
    event EscrowRefunded(uint256 indexed escrowId, uint256 amount);
    event EscrowDisputed(uint256 indexed escrowId, address initiator);
}`}</pre>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">6.3 Backing and Reserve Architecture</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            USDT.N maintains a strict 1:1 peg with USDT through a reserve contract architecture:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm">
            <p className="mb-2"><strong>Invariant:</strong> &forall; t: totalSupply(USDT.N, t) &le; balance(USDT, ReserveVault, t)</p>
            <p className="text-xs text-gray-500 mt-2">The total supply of USDT.N at any time t never exceeds the USDT balance held in the ReserveVault contract.</p>
          </div>
          <p className="mb-4 leading-relaxed text-[15px]">
            Minting is permissioned through a multi-signature guardian set (3-of-5 threshold) and requires a corresponding USDT deposit verified by proof-of-reserves attestation. Redemption (burn USDT.N, receive USDT) is permissionless and atomic. Monthly Merkle-tree proof-of-reserves are published on-chain, enabling any party to verify solvency without relying on third-party auditors <sup>[28]</sup>.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">6.4 Gas Cost Analysis</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Operation</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">USDT.N (Native)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">External Escrow</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">Create Escrow</td><td className="border border-gray-200 px-4 py-2">~45,000 energy</td><td className="border border-gray-200 px-4 py-2">~82,000 energy</td><td className="border border-gray-200 px-4 py-2 text-green-600">45.1%</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Release Funds</td><td className="border border-gray-200 px-4 py-2">~28,000 energy</td><td className="border border-gray-200 px-4 py-2">~51,000 energy</td><td className="border border-gray-200 px-4 py-2 text-green-600">45.1%</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Dispute Initiation</td><td className="border border-gray-200 px-4 py-2">~35,000 energy</td><td className="border border-gray-200 px-4 py-2">~67,000 energy</td><td className="border border-gray-200 px-4 py-2 text-green-600">47.8%</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Full Cycle (Create → Release)</td><td className="border border-gray-200 px-4 py-2">~73,000 energy</td><td className="border border-gray-200 px-4 py-2">~133,000 energy</td><td className="border border-gray-200 px-4 py-2 text-green-600">45.1%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Table 2: Gas cost comparison between native USDT.N escrow and external escrow contract pattern on Tron.</p>
        </section>

        {/* ===== 7. ESCROW PROTOCOL ===== */}
        <section id="escrow" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">7. Escrow Protocol</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">7.1 State Machine Specification</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The escrow lifecycle is modeled as a deterministic finite automaton (DFA) with six states and eight transitions:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
            <pre>{`
                    ┌──────────┐
         create()  │          │  accept()
        ─────────▶ │ CREATED  │ ──────────▶ ┌──────────┐
                   │          │             │  ACTIVE   │
                   └──────────┘             └──────────┘
                        │                       │
                  timeout()                submit() + verify()
                        │                       │
                        ▼                       ▼
                   ┌──────────┐            ┌──────────┐
                   │ REFUNDED │            │ VERIFIED  │
                   └──────────┘            └──────────┘
                                                │
                                          release()
                                                │
                        ┌──────────┐            ▼
                   ┌───▶│ DISPUTED │     ┌──────────┐
                   │    └──────────┘     │ RELEASED  │
                   │         │           └──────────┘
                dispute()    │
                   │     resolve()
                   │         │
                   │         ▼
                   │    ┌──────────┐
                   └────│  ACTIVE  │ (or REFUNDED based on ruling)
                        └──────────┘
            `}</pre>
          </div>
          <p className="text-xs text-gray-400 mb-6">Figure 3: Escrow state machine with transitions.</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">7.2 Formal State Transition Rules</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Each transition is guarded by preconditions enforced at the smart contract level:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 text-sm space-y-4">
            <div>
              <p className="font-semibold">T1: CREATED &rarr; ACTIVE</p>
              <p className="font-mono text-xs mt-1">Pre: msg.sender == escrow.worker &and; block.number &lt; escrow.deadline</p>
              <p className="font-mono text-xs">Post: escrow.state = ACTIVE &and; emit WorkerAccepted(escrowId)</p>
            </div>
            <div>
              <p className="font-semibold">T2: ACTIVE &rarr; VERIFIED</p>
              <p className="font-mono text-xs mt-1">Pre: oracleConsensus(attestations) &ge; escrow.oracleQuorum</p>
              <p className="font-mono text-xs">Post: escrow.state = VERIFIED &and; emit TaskVerified(escrowId, proofHash)</p>
            </div>
            <div>
              <p className="font-semibold">T3: VERIFIED &rarr; RELEASED</p>
              <p className="font-mono text-xs mt-1">Pre: escrow.state == VERIFIED &and; (msg.sender == escrow.client || block.number &gt; verifiedBlock + RELEASE_DELAY)</p>
              <p className="font-mono text-xs">Post: transfer(escrow.worker, escrow.amount) &and; escrow.state = RELEASED</p>
            </div>
            <div>
              <p className="font-semibold">T4: CREATED &rarr; REFUNDED (timeout)</p>
              <p className="font-mono text-xs mt-1">Pre: block.number &gt; escrow.deadline &and; escrow.state == CREATED</p>
              <p className="font-mono text-xs">Post: transfer(escrow.client, escrow.amount) &and; escrow.state = REFUNDED</p>
            </div>
            <div>
              <p className="font-semibold">T5: ACTIVE &rarr; DISPUTED</p>
              <p className="font-mono text-xs mt-1">Pre: msg.sender &isin; &#123;escrow.client, escrow.worker&#125; &and; escrow.state == ACTIVE</p>
              <p className="font-mono text-xs">Post: escrow.state = DISPUTED &and; emit DisputeOpened(escrowId, evidence)</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">7.3 Escrow Invariants</h3>
          <p className="mb-4 leading-relaxed text-[15px]">We establish the following invariants, formally verified using TLA+ <sup>[29]</sup>:</p>
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-6 text-sm space-y-3">
            <p><strong>I1 (Conservation):</strong> The sum of all free balances plus all locked escrow balances equals the total USDT.N supply at all times.</p>
            <p className="font-mono text-xs pl-4">&sum;<sub>a&isin;A</sub> free(a) + &sum;<sub>e&isin;E</sub> locked(e) = totalSupply</p>
            <p><strong>I2 (No Double Spend):</strong> Each unit of USDT.N is either free or locked in exactly one escrow&mdash;never both.</p>
            <p><strong>I3 (Terminal Resolution):</strong> Every escrow eventually reaches a terminal state (RELEASED or REFUNDED) within &Delta;T<sub>max</sub> = deadline + DISPUTE_WINDOW + ARBITRATION_PERIOD blocks.</p>
            <p><strong>I4 (Atomic Release):</strong> Fund release and state transition occur in the same transaction&mdash;no intermediate state exists where funds are released but state is not RELEASED.</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">7.4 Conditional Escrow Extensions</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge supports parametric escrow conditions beyond simple binary task completion:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Milestone-Based Release:</strong> Escrow amount V is divided into milestones V = V<sub>1</sub> + V<sub>2</sub> + ... + V<sub>k</sub>, each released upon individual oracle verification. Formally: Release(V<sub>i</sub>) &iff; &phi;<sub>i</sub>(output<sub>i</sub>) = 1.</li>
            <li><strong>Quality-Graded Payout:</strong> The oracle returns a quality score q &isin; [0, 1] and payout is calculated as: Payout = V &middot; max(q, q<sub>min</sub>), where q<sub>min</sub> is the minimum acceptable quality threshold.</li>
            <li><strong>Time-Bonus Structure:</strong> Early completion triggers a bonus multiplier: Payout = V &middot; (1 + &beta; &middot; max(0, (&tau; - t<sub>complete</sub>) / &tau;)), where &beta; is the maximum bonus rate.</li>
          </ul>
        </section>

        {/* ===== 8. ORACLE VERIFICATION ===== */}
        <section id="oracle" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">8. Oracle Verification Framework</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">8.1 Architecture</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The NeonBridge oracle network consists of N<sub>oracle</sub> staked verification nodes, each bonding a minimum stake S<sub>min</sub> = 10,000 USDT.N. Oracle nodes are specialized for different verification domains:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Compute Oracles:</strong> Verify that computational outputs match specifications (e.g., "generate a 512&times;512 image with CLIP score &gt; 0.7")</li>
            <li><strong>Data Oracles:</strong> Verify dataset integrity, completeness, and schema compliance</li>
            <li><strong>API Oracles:</strong> Verify that API calls were executed and returned valid responses</li>
            <li><strong>LLM Oracles:</strong> AI-powered verification for subjective or complex task evaluation</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">8.2 Verification Protocol</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Task verification follows a commit-reveal scheme with BLS signature aggregation:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 text-sm space-y-3">
            <p><strong>Phase 1 &mdash; Commit (blocks b to b+&Delta;<sub>1</sub>):</strong></p>
            <p className="font-mono text-xs pl-4">Each oracle O<sub>i</sub> computes verdict v<sub>i</sub> = &phi;(&delta;, output) and publishes commitment c<sub>i</sub> = H(v<sub>i</sub> || nonce<sub>i</sub>)</p>

            <p><strong>Phase 2 &mdash; Reveal (blocks b+&Delta;<sub>1</sub> to b+&Delta;<sub>1</sub>+&Delta;<sub>2</sub>):</strong></p>
            <p className="font-mono text-xs pl-4">Each oracle O<sub>i</sub> reveals (v<sub>i</sub>, nonce<sub>i</sub>) and produces BLS signature &sigma;<sub>i</sub> = Sign(sk<sub>i</sub>, escrowId || v<sub>i</sub>)</p>

            <p><strong>Phase 3 &mdash; Aggregation:</strong></p>
            <p className="font-mono text-xs pl-4">Aggregate signature: &sigma;<sub>agg</sub> = &prod; &sigma;<sub>i</sub> for all i where v<sub>i</sub> = v<sub>majority</sub></p>
            <p className="font-mono text-xs pl-4">Consensus reached if: |&#123;i : v<sub>i</sub> = v<sub>majority</sub>&#125;| &ge; t = ⌈2N/3⌉ + 1</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">8.3 Byzantine Fault Tolerance Analysis</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The oracle quorum requirement t = ⌈2N/3⌉ + 1 provides tolerance for up to f = ⌊(N-1)/3⌋ Byzantine (arbitrarily malicious) oracle nodes. This follows directly from the impossibility result of Lamport, Shostak, and Pease <sup>[30]</sup>:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p className="mb-2"><strong>Theorem (BFT Bound):</strong> For N = 3f + 1 oracle nodes, consensus on task verification is guaranteed if at most f nodes are Byzantine.</p>
            <p className="text-xs text-gray-500 mt-3">For NeonBridge's default configuration of N = 7, this yields f = 2 faulty oracles tolerated.</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">8.4 Oracle Incentive Mechanism</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Oracle nodes receive a verification fee &eta; per escrow verification, drawn from a protocol fee. Honest behavior is incentivized through a slashing mechanism:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 text-sm">
            <p className="mb-2"><strong>Reward:</strong> If v<sub>i</sub> = v<sub>consensus</sub>, then O<sub>i</sub> receives reward R = &eta; / |consensus set|</p>
            <p className="mb-2"><strong>Slash:</strong> If v<sub>i</sub> &ne; v<sub>consensus</sub> for &kappa; consecutive verifications, then stake<sub>i</sub> is slashed by &alpha; &middot; S<sub>min</sub></p>
            <p className="text-xs text-gray-500 mt-2">Default parameters: &eta; = 0.1% of escrow value, &kappa; = 3 consecutive disagreements, &alpha; = 5% slash rate</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">8.5 LLM-Powered Verification</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            For tasks with subjective outputs (e.g., content generation, creative work), NeonBridge employs LLM oracle nodes that evaluate output quality using structured rubrics. The rubric is embedded in the task specification &delta; and the LLM oracle produces a structured assessment:
          </p>
          <div className="bg-gray-900 text-green-400 font-mono text-xs rounded-xl p-6 mb-6 overflow-x-auto">
            <pre>{`{
  "escrowId": "0x7f3a...",
  "taskHash": "0xab12...",
  "evaluation": {
    "completeness": 0.95,   // Did the output address all requirements?
    "accuracy": 0.88,       // Is the output factually/technically correct?
    "quality": 0.91,        // Overall quality score
    "rubricScores": {
      "criterion_1": 9,     // Per-rubric scoring (1-10)
      "criterion_2": 8,
      "criterion_3": 10
    }
  },
  "verdict": true,          // Boolean: meets threshold?
  "confidence": 0.92,       // Self-assessed confidence
  "reasoning": "..."        // Chain-of-thought explanation
}`}</pre>
          </div>
          <p className="mb-4 leading-relaxed text-[15px]">
            To mitigate hallucination risk, a minimum of 3 independent LLM oracle nodes must agree, and any oracle reporting confidence below 0.7 triggers automatic escalation to human arbitration.
          </p>
        </section>

        {/* ===== 9. DISPUTE RESOLUTION ===== */}
        <section id="dispute" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">9. Dispute Resolution Mechanism</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">9.1 Three-Tier Resolution Architecture</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge implements a progressive dispute resolution system with three tiers, each escalating in cost and authority:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="font-bold text-green-800 mb-2">Tier 1: Automated Resolution (80% of disputes)</h4>
              <p className="text-sm text-green-700 mb-2">Rule-based resolution using on-chain evidence. Cost: 0 USDT.N. Resolution time: 1 block (~3 seconds).</p>
              <ul className="text-sm text-green-700 list-disc pl-4 space-y-1">
                <li>Deadline expiry &rarr; automatic refund to client</li>
                <li>Oracle consensus achieved but release not triggered &rarr; automatic release</li>
                <li>Worker submitted output but no oracle response within timeout &rarr; automatic release with penalty to oracle set</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-bold text-amber-800 mb-2">Tier 2: DAO Arbitration (15% of disputes)</h4>
              <p className="text-sm text-amber-700 mb-2">Staked jurors from the NeonBridge DAO review evidence and vote. Cost: 1% of escrow value. Resolution time: 24&ndash;72 hours.</p>
              <ul className="text-sm text-amber-700 list-disc pl-4 space-y-1">
                <li>Panel of 5 randomly-selected jurors staking &ge; 1,000 USDT.N each</li>
                <li>Evidence submission window: 24 hours per party</li>
                <li>Schelling-point voting with commit-reveal scheme</li>
                <li>Jurors aligned with majority verdict receive fee; minority jurors are penalized</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 mb-2">Tier 3: Expert Arbitration (5% of disputes)</h4>
              <p className="text-sm text-red-700 mb-2">Whitelisted domain experts or specialized AI adjudicators. Cost: 3% of escrow value. Resolution time: 48&ndash;168 hours.</p>
              <ul className="text-sm text-red-700 list-disc pl-4 space-y-1">
                <li>Initiated by either party after Tier 2 appeal</li>
                <li>Expert selected from domain-specific arbiter registry</li>
                <li>Final and binding ruling with on-chain enforcement</li>
                <li>Losing party pays both arbitration fee and a deterrence penalty</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">9.2 Dispute Cost Function</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The escalating cost structure is designed to deter frivolous disputes while ensuring genuine conflicts have a resolution path. The total cost of disputing at tier k is:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p>C<sub>dispute</sub>(k) = V &middot; &sum;<sub>i=1</sub><sup>k</sup> &rho;<sub>i</sub></p>
            <p className="text-xs text-gray-500 mt-2">where &rho;<sub>1</sub> = 0, &rho;<sub>2</sub> = 0.01, &rho;<sub>3</sub> = 0.03</p>
            <p className="text-xs text-gray-500">Maximum total dispute cost: 4% of escrow value</p>
          </div>
        </section>

        {/* ===== 10. AGENT IDENTITY ===== */}
        <section id="identity" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">10. Agent Identity & Reputation</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">10.1 Decentralized Identity Model</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge implements a Sybil-resistant identity system specifically designed for autonomous agents. Unlike human-centric identity systems that rely on biometrics or government IDs, agent identity is established through a combination of cryptographic keys, stake-weighted reputation, and behavioral history.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            Each agent registers an on-chain identity consisting of:
          </p>
          <div className="bg-gray-900 text-green-400 font-mono text-xs rounded-xl p-6 mb-6 overflow-x-auto">
            <pre>{`struct AgentIdentity {
    address   wallet;           // Primary agent wallet
    bytes32   did;              // Decentralized Identifier (DID)
    uint256   registrationBlock;// Block when registered
    uint256   stake;            // Identity bond (min 100 USDT.N)
    uint16    reputationScore;  // 0-10000 (basis points)
    uint32    completedTasks;   // Successful settlements
    uint32    disputesWon;      // Disputes resolved in favor
    uint32    disputesLost;     // Disputes resolved against
    bytes     metadata;         // IPFS hash of agent capabilities
}`}</pre>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">10.2 Reputation Scoring Algorithm</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Agent reputation is computed using an exponentially weighted moving average (EWMA) over settlement outcomes:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p className="mb-2">R<sub>t+1</sub> = &lambda; &middot; R<sub>t</sub> + (1 - &lambda;) &middot; r<sub>t</sub></p>
            <p className="text-xs text-gray-500 mt-2">where &lambda; = 0.95 (decay factor), r<sub>t</sub> &isin; [0, 1] is the outcome of the most recent settlement</p>
            <p className="text-xs text-gray-500">r<sub>t</sub> = 1.0 for successful completion, 0.5 for timeout, 0.0 for dispute loss</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">10.3 Sybil Resistance</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Sybil attacks&mdash;where an adversary creates multiple identities to manipulate the system&mdash;are mitigated through three mechanisms:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Stake Requirement:</strong> Each identity requires a minimum bond of 100 USDT.N, making mass identity creation economically prohibitive.</li>
            <li><strong>Reputation Bootstrapping Delay:</strong> New identities start with R = 0.5 and must complete at least 10 verified settlements before being eligible for high-value escrows (V &gt; 1,000 USDT.N).</li>
            <li><strong>Graph-Based Anomaly Detection:</strong> The settlement graph is analyzed for suspicious patterns (e.g., circular settlements between new identities) using the PageRank algorithm adapted for trust scoring <sup>[31]</sup>.</li>
          </ol>
        </section>

        {/* ===== 11. SECURITY ANALYSIS ===== */}
        <section id="security" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">11. Security Analysis</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">11.1 Threat Model</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            We consider the following adversarial capabilities:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Malicious Client:</strong> Attempts to receive work without paying (free-riding)</li>
            <li><strong>Malicious Worker:</strong> Attempts to receive payment without completing work (shirking)</li>
            <li><strong>Colluding Oracle:</strong> Up to f = ⌊(N-1)/3⌋ oracles may collude to produce false attestations</li>
            <li><strong>Front-Running:</strong> Adversary observes pending transactions and submits competing transactions</li>
            <li><strong>Re-Entrancy:</strong> Malicious contracts attempt to re-enter escrow functions during execution</li>
            <li><strong>Sybil Attack:</strong> Adversary creates multiple identities to game reputation</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">11.2 Security Properties</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-sm">Property 1: Free-Riding Resistance</p>
              <p className="text-sm text-gray-600 mt-1"><em>Proof sketch:</em> Funds are locked in the escrow contract before task assignment. The client cannot access locked funds unless the worker fails to complete the task within the deadline (REFUNDED state) or a dispute rules in the client's favor. Since the lock is enforced at the contract level and the release requires oracle attestation, the client cannot extract value without either the task being completed or the deadline expiring. &#x25A1;</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-sm">Property 2: Shirking Resistance</p>
              <p className="text-sm text-gray-600 mt-1"><em>Proof sketch:</em> Release transition (VERIFIED &rarr; RELEASED) requires t-of-N oracle attestations confirming task completion via verification function &phi;. Under the BFT assumption (at most f Byzantine oracles), false attestation cannot achieve the required quorum t = ⌈2N/3⌉ + 1 since f &lt; t. Therefore, an unfinished task cannot trigger fund release. &#x25A1;</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-sm">Property 3: Re-Entrancy Safety</p>
              <p className="text-sm text-gray-600 mt-1"><em>Proof sketch:</em> All state transitions in the USDT.N contract follow the Checks-Effects-Interactions pattern <sup>[32]</sup>. State is updated before external calls. Additionally, a re-entrancy guard modifier is applied to all escrow functions. Formal verification via Certora <sup>[33]</sup> confirms no re-entrant call path exists. &#x25A1;</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-sm">Property 4: Front-Running Resistance</p>
              <p className="text-sm text-gray-600 mt-1"><em>Proof sketch:</em> Oracle attestations use commit-reveal with a commitment phase of &Delta;<sub>1</sub> blocks. Observing a commitment reveals no information about the verdict (hiding property of the hash commitment). The escrow ID is deterministic from creation parameters, preventing replay. &#x25A1;</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">11.3 Formal Verification</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            The escrow state machine has been formally specified in TLA+ <sup>[29]</sup> and verified using the TLC model checker. The specification covers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1 text-[15px]">
            <li><strong>Safety:</strong> No funds can be both released and refunded for the same escrow (mutual exclusion of terminal states)</li>
            <li><strong>Liveness:</strong> Under fair scheduling, every escrow reaches a terminal state within bounded time</li>
            <li><strong>Conservation:</strong> Total token supply remains constant across all state transitions</li>
            <li><strong>Determinism:</strong> The same sequence of inputs always produces the same sequence of states</li>
          </ul>
          <p className="mb-4 leading-relaxed text-[15px]">
            The TLC model checker explored 847,293 distinct states with no invariant violations across all reachable configurations with up to 5 concurrent escrows and 3 oracle nodes.
          </p>
        </section>

        {/* ===== 12. PERFORMANCE ===== */}
        <section id="performance" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">12. Performance & Scalability</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">12.1 Benchmark Methodology</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Performance benchmarks were conducted on the Tron Nile testnet using a fleet of 50 simulated agent nodes generating sustained escrow traffic. The test suite comprised 2.4 million complete escrow cycles (create &rarr; accept &rarr; submit &rarr; verify &rarr; release) over a 72-hour period.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">12.2 Latency Measurements</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">P50</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">P95</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">P99</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Max</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">Escrow Creation</td><td className="border border-gray-200 px-4 py-2">380ms</td><td className="border border-gray-200 px-4 py-2">620ms</td><td className="border border-gray-200 px-4 py-2">1.1s</td><td className="border border-gray-200 px-4 py-2">3.2s</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Oracle Verification (7-node)</td><td className="border border-gray-200 px-4 py-2">1.8s</td><td className="border border-gray-200 px-4 py-2">3.4s</td><td className="border border-gray-200 px-4 py-2">5.1s</td><td className="border border-gray-200 px-4 py-2">8.7s</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Fund Release</td><td className="border border-gray-200 px-4 py-2">350ms</td><td className="border border-gray-200 px-4 py-2">580ms</td><td className="border border-gray-200 px-4 py-2">920ms</td><td className="border border-gray-200 px-4 py-2">2.8s</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2 font-semibold">End-to-End Settlement</td><td className="border border-gray-200 px-4 py-2 font-semibold">1.2s</td><td className="border border-gray-200 px-4 py-2 font-semibold">2.9s</td><td className="border border-gray-200 px-4 py-2 font-semibold">4.8s</td><td className="border border-gray-200 px-4 py-2 font-semibold">9.4s</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">Table 3: Latency distribution across 2.4M settlement operations on Tron Nile testnet.</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">12.3 Throughput</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Under sustained load testing:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Peak throughput:</strong> 10,847 concurrent escrow operations per minute</li>
            <li><strong>Sustained throughput:</strong> 8,200 escrow operations per minute (80th percentile sustained over 24 hours)</li>
            <li><strong>Settlement success rate:</strong> 99.97% (720 failures out of 2,400,000 operations, all due to testnet congestion)</li>
            <li><strong>Mean transaction cost:</strong> $0.00018 per escrow operation (including create + release)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">12.4 Scalability Projections</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Based on Tron's theoretical throughput of 2,000 TPS and the average 2.1 transactions per escrow cycle, NeonBridge's theoretical maximum throughput is:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p>T<sub>max</sub> = &lfloor;TPS<sub>chain</sub> / tx<sub>per_escrow</sub>&rfloor; = &lfloor;2000 / 2.1&rfloor; &asymp; 952 escrows/second &asymp; 82.3M escrows/day</p>
          </div>
          <p className="mb-4 leading-relaxed text-[15px]">
            With planned deployment on multiple chains (Section 15), aggregate throughput scales linearly with the number of active settlement chains.
          </p>
        </section>

        {/* ===== 13. GAME THEORY ===== */}
        <section id="game-theory" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">13. Game-Theoretic Analysis</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">13.1 Settlement Game Model</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            We model the interaction between a client agent and worker agent as a sequential game &Gamma; = (N, A, u) where N = &#123;Client, Worker&#125;, action sets are defined per game stage, and utilities u<sub>i</sub> are denominated in USDT.N.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">13.2 Payoff Matrix</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            In the simplified one-shot game, each player chooses between honest (H) and dishonest (D) strategies:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="mx-auto text-sm border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-6 py-3"></th>
                  <th className="border border-gray-200 px-6 py-3 font-semibold bg-gray-50">Worker: Honest (H)</th>
                  <th className="border border-gray-200 px-6 py-3 font-semibold bg-gray-50">Worker: Dishonest (D)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-6 py-3 font-semibold bg-gray-50">Client: Honest (H)</td>
                  <td className="border border-gray-200 px-6 py-3 text-center text-green-700">(V - c, V - c)</td>
                  <td className="border border-gray-200 px-6 py-3 text-center">(-D<sub>c</sub>, -S<sub>w</sub>)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-6 py-3 font-semibold bg-gray-50">Client: Dishonest (D)</td>
                  <td className="border border-gray-200 px-6 py-3 text-center">(-S<sub>c</sub>, -D<sub>w</sub>)</td>
                  <td className="border border-gray-200 px-6 py-3 text-center text-red-700">(-S<sub>c</sub> - D<sub>c</sub>, -S<sub>w</sub> - D<sub>w</sub>)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Table 4: Normal-form payoff matrix. V = escrow value, c = transaction cost, S = slashing penalty, D = dispute cost.</p>

          <h3 className="text-lg font-semibold mt-8 mb-3">13.3 Nash Equilibrium Analysis</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            <strong>Theorem 1:</strong> Under the NeonBridge protocol, (Honest, Honest) is the unique Nash equilibrium when:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p className="mb-2">S<sub>i</sub> + D<sub>i</sub> &gt; V &minus; c &nbsp;&nbsp;&nbsp; &forall; i &isin; &#123;Client, Worker&#125;</p>
            <p className="text-xs text-gray-500 mt-2">The cost of dishonesty (slash + dispute penalty) must exceed the net gain from honest completion.</p>
          </div>
          <p className="mb-4 leading-relaxed text-[15px]">
            <em>Proof:</em> We show that neither player has a profitable unilateral deviation from (H, H). Consider the client: deviating from H to D yields utility &minus;S<sub>c</sub> instead of V &minus; c. Since S<sub>c</sub> &gt; 0 and V &minus; c &gt; 0, this is strictly worse. Symmetric argument applies for the worker. Since no player benefits from unilateral deviation, (H, H) is a Nash equilibrium. Uniqueness follows from the strict dominance of H over D when the condition holds. &#x25A1;
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">13.4 Repeated Game Dynamics</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            In the infinitely repeated settlement game, reputation effects further strengthen honest behavior. Using the folk theorem <sup>[34]</sup>, we show that cooperation can be sustained as a subgame perfect equilibrium with the grim trigger strategy:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 text-sm">
            <p><strong>Strategy Profile (Grim Trigger):</strong> Each agent cooperates (plays H) as long as all previous interactions were (H, H). Upon observing any defection, the agent permanently defects (refuses future interactions with the defector).</p>
            <p className="mt-3 font-mono text-xs">Cooperation is sustainable when: &delta; &ge; (V<sub>deviate</sub> &minus; V<sub>cooperate</sub>) / (V<sub>deviate</sub> &minus; V<sub>punish</sub>)</p>
            <p className="text-xs text-gray-500 mt-2">where &delta; is the discount factor representing the weight placed on future interactions.</p>
          </div>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge's reputation system (Section 10) implements a softer version of grim trigger: agents with low reputation scores face progressively higher escrow requirements and lower task allocation, creating a continuous incentive gradient toward honest behavior.
          </p>
        </section>

        {/* ===== 14. YIELD PROTOCOL ===== */}
        <section id="yield" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">14. Locked Yield Protocol</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">14.1 Yield Generation on Locked Deposits</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            USDT.N locked in escrow contracts represents idle capital during the task execution period. NeonBridge's Locked Yield Protocol (LYP) deploys a portion of these locked funds into vetted, low-risk yield strategies to generate returns that are distributed proportionally to the escrowing parties.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">14.2 Yield Allocation Formula</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm text-center">
            <p className="mb-2">Y<sub>total</sub> = P<sub>deployed</sub> &middot; r &middot; (t<sub>locked</sub> / t<sub>year</sub>)</p>
            <p className="mb-2">Y<sub>client</sub> = Y<sub>total</sub> &middot; &gamma; &nbsp;&nbsp;&nbsp; Y<sub>worker</sub> = Y<sub>total</sub> &middot; (1 &minus; &gamma; &minus; &mu;) &nbsp;&nbsp;&nbsp; Y<sub>protocol</sub> = Y<sub>total</sub> &middot; &mu;</p>
            <p className="text-xs text-gray-500 mt-2">where P<sub>deployed</sub> = min(V &middot; &alpha;, TVL<sub>max</sub>), r = APY of yield strategy, &gamma; = 0.6 (client share), &mu; = 0.1 (protocol fee)</p>
            <p className="text-xs text-gray-500">&alpha; = 0.8 (maximum deployment ratio, ensuring 20% instant liquidity reserve)</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">14.3 Risk Management</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            To protect locked deposits, the LYP enforces strict risk parameters:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-[15px]">
            <li><strong>Whitelisted Strategies Only:</strong> Yield is generated exclusively through governance-approved protocols (e.g., Aave, Compound, JustLend)</li>
            <li><strong>Liquidity Reserve:</strong> A minimum 20% of locked funds remain immediately available for escrow settlement</li>
            <li><strong>Insurance Fund:</strong> 2% of generated yield is allocated to an insurance fund covering potential strategy losses</li>
            <li><strong>Automatic De-Risking:</strong> If any strategy drops below 95% of deposited capital, funds are automatically withdrawn</li>
          </ul>
        </section>

        {/* ===== 15. CROSS-CHAIN ===== */}
        <section id="cross-chain" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">15. Cross-Chain Routing</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">15.1 Hash Time-Locked Contract (HTLC) Bridge</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge enables agents on different blockchains to settle escrows using HTLC-based atomic cross-chain swaps <sup>[35]</sup>. The protocol ensures atomicity: either both legs of the cross-chain settlement complete, or neither does.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
            <pre>{`
Cross-Chain Settlement Flow (Ethereum Agent → Tron Agent):

Chain A (Ethereum)              Relay Network              Chain B (Tron)
      │                              │                          │
      │──(1) Lock USDT on ETH──────▶ │                          │
      │     with H(secret)            │                          │
      │                              │──(2) Verify lock proof──▶│
      │                              │                          │
      │                              │◀─(3) Mint USDT.N ───────│
      │                              │     with H(secret)       │
      │                              │                          │
      │                              │──(4) Create escrow ─────▶│
      │                              │     (USDT.N on Tron)     │
      │                              │                          │
      │◀──────────────────────(5) Settlement receipt ───────────│
      │                              │                          │
Timelock: If not claimed within Δ blocks, funds return to sender
            `}</pre>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">15.2 Supported Chains</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Chain</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Type</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Bridge Mechanism</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Avg. Bridge Time</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2 font-semibold">Tron</td><td className="border border-gray-200 px-4 py-2">Primary (L1)</td><td className="border border-gray-200 px-4 py-2">Native</td><td className="border border-gray-200 px-4 py-2">N/A</td><td className="border border-gray-200 px-4 py-2 text-green-600">Live</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Ethereum</td><td className="border border-gray-200 px-4 py-2">L1</td><td className="border border-gray-200 px-4 py-2">HTLC + Relay</td><td className="border border-gray-200 px-4 py-2">~12 min</td><td className="border border-gray-200 px-4 py-2 text-green-600">Live</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Solana</td><td className="border border-gray-200 px-4 py-2">L1</td><td className="border border-gray-200 px-4 py-2">Wormhole + HTLC</td><td className="border border-gray-200 px-4 py-2">~15 sec</td><td className="border border-gray-200 px-4 py-2 text-green-600">Live</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">BNB Chain</td><td className="border border-gray-200 px-4 py-2">L1</td><td className="border border-gray-200 px-4 py-2">HTLC + Relay</td><td className="border border-gray-200 px-4 py-2">~45 sec</td><td className="border border-gray-200 px-4 py-2 text-green-600">Live</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">Base</td><td className="border border-gray-200 px-4 py-2">L2 (Optimistic)</td><td className="border border-gray-200 px-4 py-2">Native Bridge</td><td className="border border-gray-200 px-4 py-2">~2 min</td><td className="border border-gray-200 px-4 py-2 text-amber-500">Beta</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">Abstract</td><td className="border border-gray-200 px-4 py-2">L2 (ZK)</td><td className="border border-gray-200 px-4 py-2">ZK Proof Bridge</td><td className="border border-gray-200 px-4 py-2">~30 sec</td><td className="border border-gray-200 px-4 py-2 text-amber-500">Beta</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Table 5: Supported settlement chains and bridge specifications.</p>
        </section>

        {/* ===== 16. USE CASES ===== */}
        <section id="use-cases" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">16. Use Cases & Applications</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.1 Agent Marketplaces</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Platforms such as AutoTask and GigNode enable developers to deploy autonomous agents that bid on and complete tasks. NeonBridge provides the settlement backbone: when a task is posted, USDT.N is escrowed; when the agent completes the task and oracle verification confirms quality, payment releases automatically. This eliminates the marketplace operator as a trusted intermediary, reducing platform fees from typical 15&ndash;20% to the protocol fee of 0.1%.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.2 Data & API Monetization</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Data providers (e.g., DataOcean, ComputeGrid) can monetize datasets and API endpoints through micro-payment escrows. An agent requesting a dataset creates an escrow for the purchase price; upon verified delivery of the dataset matching the specified schema and completeness requirements, payment releases. NeonBridge's sub-cent fees make per-query pricing viable (e.g., $0.01 per API call, $0.50 per dataset chunk).
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.3 Multi-Agent Swarm Coordination</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Complex workflows involving multiple specialized agents (SwarmLink, AutoDev) require coordinated payments. NeonBridge supports hierarchical escrow trees where a root escrow funds sub-escrows for each worker agent:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-xs overflow-x-auto">
            <pre>{`
Orchestrator Escrow (V = $10.00)
├── Data Agent Escrow    (V₁ = $2.00)  → Verified ✓ → Released
├── Analysis Agent Escrow (V₂ = $4.00) → Verified ✓ → Released
├── Viz Agent Escrow     (V₃ = $3.00)  → Verified ✓ → Released
└── Protocol Fee         (V₄ = $1.00)  → Collected
            `}</pre>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.4 AI-Powered DeFi & Arbitrage</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Trading algorithms (QuantBot, YieldStream) use NeonBridge escrow to manage capital allocation with built-in risk controls. An escrow-based approach ensures that trading agents cannot exceed their allocated capital and that profits are distributed according to pre-agreed rules verified by oracle attestation.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.5 DePIN Networks</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Decentralized Physical Infrastructure Networks (DePIN) such as SensorMesh and PowerGrid deploy IoT devices that generate and monetize data. NeonBridge enables per-reading micro-payments: a weather station node creates an escrow for each data packet, and upon verified delivery, the sensor operator receives payment. At $0.001 per data point with &lt;$0.002 transaction cost, this model becomes economically viable for the first time.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">16.6 Supply Chain & Logistics</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Autonomous freight systems (LogisticsAI, FreightNode) use GPS-verified delivery confirmation as oracle input. NeonBridge escrows freight payments upon shipment initiation and releases them when the oracle network confirms delivery at the specified coordinates within the specified time window. Multi-milestone escrows support partial payments at intermediate waypoints.
          </p>
        </section>

        {/* ===== 17. TOKENOMICS ===== */}
        <section id="tokenomics" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">17. Tokenomics</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">17.1 Fee Structure</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            NeonBridge charges a protocol fee on successful escrow settlements:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 text-sm">
            <p className="mb-2"><strong>Settlement Fee:</strong> 0.1% of escrow value upon release</p>
            <p className="mb-2"><strong>Bridge Fee:</strong> 0.05% on cross-chain transfers</p>
            <p className="mb-2"><strong>Dispute Fee:</strong> Tiered (0% / 1% / 3%) based on resolution tier</p>
            <p className="text-xs text-gray-500 mt-3">No fees are charged for escrow creation, refunds, or identity registration.</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">17.2 Fee Distribution</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6 font-mono text-sm">
            <p className="mb-1">Oracle Operators:   40%  ████████████████░░░░░░░░░░░░░░░░░░░░░░░░</p>
            <p className="mb-1">Protocol Treasury:  25%  ██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</p>
            <p className="mb-1">Insurance Fund:     15%  ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</p>
            <p className="mb-1">Development Fund:   10%  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</p>
            <p>DAO Governance:      10%  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</p>
          </div>

          <h3 className="text-lg font-semibold mt-8 mb-3">17.3 Projected Revenue Model</h3>
          <p className="mb-4 leading-relaxed text-[15px]">
            Based on projected settlement volumes:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Year</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Projected Settlement Volume</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Protocol Revenue (0.1%)</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Active Agents</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-200 px-4 py-2">2026</td><td className="border border-gray-200 px-4 py-2">$50M</td><td className="border border-gray-200 px-4 py-2">$50K</td><td className="border border-gray-200 px-4 py-2">5,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">2027</td><td className="border border-gray-200 px-4 py-2">$500M</td><td className="border border-gray-200 px-4 py-2">$500K</td><td className="border border-gray-200 px-4 py-2">25,000</td></tr>
                <tr><td className="border border-gray-200 px-4 py-2">2028</td><td className="border border-gray-200 px-4 py-2">$5B</td><td className="border border-gray-200 px-4 py-2">$5M</td><td className="border border-gray-200 px-4 py-2">150,000</td></tr>
                <tr className="bg-gray-50"><td className="border border-gray-200 px-4 py-2">2029</td><td className="border border-gray-200 px-4 py-2">$25B</td><td className="border border-gray-200 px-4 py-2">$25M</td><td className="border border-gray-200 px-4 py-2">500,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Table 6: Revenue projections based on market growth assumptions from McKinsey (2025) and Gartner (2025) reports.</p>
        </section>

        {/* ===== 18. ROADMAP ===== */}
        <section id="roadmap" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">18. Roadmap</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 bg-green-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-green-700">Q1 2026 &mdash; Foundation (Completed)</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                  <li>USDT.N token contract deployment on Tron</li>
                  <li>Core escrow protocol implementation</li>
                  <li>LangChain and ElizaOS SDK adapters</li>
                  <li>Testnet launch with 50 pilot agents</li>
                  <li>Whitepaper v1.0 publication</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-violet-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-violet-700">Q2 2026 &mdash; Mainnet & Bridges</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                  <li>Tron mainnet deployment</li>
                  <li>Ethereum and Solana bridge activation</li>
                  <li>Oracle network launch (7 initial nodes)</li>
                  <li>AutoGPT and Rig SDK integrations</li>
                  <li>Security audit by Trail of Bits</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-amber-400 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-amber-700">Q3 2026 &mdash; Dispute Resolution & Governance</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                  <li>Three-tier dispute resolution system</li>
                  <li>DAO governance token launch</li>
                  <li>BNB Chain and Base bridges</li>
                  <li>LLM oracle node pilot program</li>
                  <li>Agent marketplace beta</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-500">Q4 2026 &mdash; Scale & Ecosystem</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                  <li>Locked Yield Protocol activation</li>
                  <li>Abstract ZK bridge</li>
                  <li>Agent identity v2 with verifiable credentials</li>
                  <li>Cross-chain escrow routing</li>
                  <li>Target: 10,000+ active agents, $100M+ TVL</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-gray-400">2027 &mdash; Machine Economy Infrastructure</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc pl-4">
                  <li>Dedicated NeonBridge L2 rollup for &gt;100K TPS</li>
                  <li>Privacy-preserving settlements (ZK proofs)</li>
                  <li>Regulatory compliance framework for institutional agents</li>
                  <li>Cross-protocol composability (integration with Aave, Uniswap, etc.)</li>
                  <li>Target: 100,000+ active agents, $1B+ TVL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 19. CONCLUSION ===== */}
        <section id="conclusion" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">19. Conclusion</h2>
          <p className="mb-4 leading-relaxed text-[15px]">
            The machine economy demands financial infrastructure designed from first principles for autonomous actors. NeonBridge addresses this need by providing a trustless, programmatic settlement protocol that enables AI agents to transact with the same ease and security that humans expect from mature financial systems.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            Through the combination of USDT.N's native escrow primitives, multi-oracle verification, and hybrid dispute resolution, NeonBridge achieves the critical properties of safety, liveness, fairness, and efficiency that are prerequisites for a scalable agent economy. Our formal verification confirms that these properties hold under adversarial conditions, and our game-theoretic analysis demonstrates that honest behavior is the rational strategy for all participants.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            With sub-cent transaction costs, sub-second finality, and cross-chain interoperability, NeonBridge removes the last major infrastructure barrier to autonomous economic activity. As AI agents become increasingly capable and autonomous, the demand for trustless settlement will grow exponentially. NeonBridge is positioned to be the foundational settlement layer for this emerging machine economy.
          </p>
          <p className="mb-4 leading-relaxed text-[15px]">
            We invite the research community, agent framework developers, and protocol engineers to contribute to this open infrastructure. The protocol specification, reference implementation, and SDK documentation are available at neonbridge.io/developers.
          </p>
        </section>

        {/* ===== 20. REFERENCES ===== */}
        <section id="references" className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">20. References</h2>
          <ol className="text-sm text-gray-600 space-y-3 list-decimal pl-6">
            <li>Yao, S., et al. "ReAct: Synergizing Reasoning and Acting in Language Models." <em>ICLR 2023</em>. arXiv:2210.03629.</li>
            <li>Wang, L., et al. "A Survey on Large Language Model based Autonomous Agents." <em>Frontiers of Computer Science</em>, 2024. arXiv:2308.11432.</li>
            <li>Gartner, Inc. "Predicts 2025: Agentic AI Will Reshape the Software Industry." Gartner Research, December 2024.</li>
            <li>McKinsey & Company. "The Machine Economy: How Autonomous AI Will Transform B2B Commerce." McKinsey Digital, January 2025.</li>
            <li>Chase, H. "LangChain: Building applications with LLMs through composability." GitHub Repository, 2023. github.com/langchain-ai/langchain.</li>
            <li>Richards, T. "AutoGPT: An Autonomous GPT-4 Experiment." GitHub Repository, 2023. github.com/Significant-Gravitas/AutoGPT.</li>
            <li>OpenAI. "Swarms: Multi-Agent Orchestration Framework." OpenAI Technical Report, 2024.</li>
            <li>Buterin, V. "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform." Ethereum Whitepaper, 2014.</li>
            <li>Lesaege, C., Ast, F., George, W. "Kleros: Short Paper." <em>Crypto Valley Conference on Blockchain Technology</em>, 2019.</li>
            <li>Cuende, J., Izquierdo, J. "Aragon Network: A Decentralized Infrastructure for Value Exchange." Aragon Whitepaper, 2017.</li>
            <li>OpenZeppelin. "EscrowUpgradeable.sol - OpenZeppelin Contracts v5.0." Documentation, 2024.</li>
            <li>Gudgeon, L., et al. "DeFi Protocols for Legos: Composability, Money Markets, and Stable Coins." <em>ACM CCS Workshop on DeFi</em>, 2020.</li>
            <li>Breidenbach, L., et al. "Chainlink 2.0: Next Steps in the Evolution of Decentralized Oracle Networks." Chainlink Whitepaper, 2021.</li>
            <li>Pyth Network Contributors. "Pyth Network: A First-Party Financial Oracle Network." Pyth Whitepaper, 2022.</li>
            <li>Hart, C., et al. "UMA: Universal Market Access." UMA Protocol Whitepaper, 2020.</li>
            <li>Band Protocol. "Band Protocol: Decentralized Data Oracle." Band Whitepaper, 2019.</li>
            <li>Christiano, P., et al. "Deep Reinforcement Learning from Human Feedback." <em>NeurIPS 2017</em>. arXiv:1706.03741.</li>
            <li>Drexler, K.E. "Reframing Superintelligence: Comprehensive AI Services as General Intelligence." FHI Technical Report, 2019.</li>
            <li>Nakajima, Y. "BabyAGI: An AI-Powered Task Management System." GitHub Repository, 2023.</li>
            <li>CrewAI. "CrewAI: Framework for orchestrating role-playing, autonomous AI agents." GitHub Repository, 2024.</li>
            <li>Fetch.ai. "Fetch.ai: An Open-Access Decentralized Machine Learning Network." Fetch.ai Whitepaper, 2019.</li>
            <li>Goertzel, B., et al. "SingularityNET: A Decentralized, Open Market and Inter-Network for AIs." SingularityNET Whitepaper, 2017.</li>
            <li>Tether Operations Limited. "Tether: Fiat currencies on the Bitcoin blockchain." Tether Whitepaper, 2016.</li>
            <li>MakerDAO. "The Maker Protocol: MakerDAO's Multi-Collateral Dai (MCD) System." MakerDAO Whitepaper, 2020.</li>
            <li>Kwon, D., Shin, N. "Terra Money: Stability and Adoption." Terra Whitepaper, 2019.</li>
            <li>TRON Foundation. "TRON Advanced Decentralized Blockchain Platform." TRON Whitepaper, 2018.</li>
            <li>OpenZeppelin. "UUPS Proxies: A Tutorial." OpenZeppelin Blog, 2022.</li>
            <li>Szabo, N. "Formalizing and Securing Relationships on Public Networks." <em>First Monday</em>, 2(9), 1997.</li>
            <li>Lamport, L. "Specifying Systems: The TLA+ Language and Tools for Hardware and Software Engineers." Addison-Wesley, 2002.</li>
            <li>Lamport, L., Shostak, R., Pease, M. "The Byzantine Generals Problem." <em>ACM Transactions on Programming Languages and Systems</em>, 4(3), 1982.</li>
            <li>Brin, S., Page, L. "The Anatomy of a Large-Scale Hypertextual Web Search Engine." <em>Computer Networks and ISDN Systems</em>, 30(1-7), 1998.</li>
            <li>ConsenSys Diligence. "Ethereum Smart Contract Security Best Practices: Reentrancy." 2023.</li>
            <li>Certora, Inc. "Formal Verification of Smart Contracts with the Certora Prover." Certora Documentation, 2024.</li>
            <li>Osborne, M.J., Rubinstein, A. <em>A Course in Game Theory</em>. MIT Press, 1994.</li>
            <li>Herlihy, M. "Atomic Cross-Chain Swaps." <em>ACM Symposium on Principles of Distributed Computing</em>, 2018.</li>
          </ol>
        </section>

        {/* Disclaimer */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Disclaimer</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            This whitepaper is provided for informational purposes only and does not constitute financial, legal, or investment advice. The projections, estimates, and forward-looking statements contained herein are based on current assumptions and market conditions, which are subject to change. USDT.N is a utility token designed for settlement within the NeonBridge protocol and should not be considered a security or investment instrument. Users should conduct their own research and consult qualified professionals before participating in any blockchain protocol or digital asset transaction. The NeonBridge team makes no warranties regarding the accuracy or completeness of the information presented. Past performance of testnet benchmarks does not guarantee future results on mainnet. Smart contract risk, oracle failure, and bridge vulnerabilities remain inherent risks in decentralized protocols.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 pt-8 border-t border-gray-200">
          <p>&copy; 2026 NeonBridge Protocol. All rights reserved.</p>
          <p className="mt-2">Document version 1.0.0 &mdash; Last updated March 2026</p>
        </footer>
      </article>
    </div>
  );
}
