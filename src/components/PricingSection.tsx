import React, { useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Check, ArrowRight, ShieldCheck, HelpCircle, Phone, Clock, Zap, Globe, RefreshCw } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PricingSectionProps {
  onOpenReview: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenReview }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollStepsRef = useRef<HTMLDivElement>(null);

  const primaryPackage = siteConfig.pricing[0];

  const handleStepScroll = () => {
    if (scrollStepsRef.current) {
      const { scrollLeft, clientWidth } = scrollStepsRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setActiveStepIndex(Math.min(Math.max(index, 0), siteConfig.postLaunch.steps.length - 1));
    }
  };

  const scrollToStep = (index: number) => {
    if (scrollStepsRef.current) {
      const cardWidth = scrollStepsRef.current.clientWidth * 0.8;
      scrollStepsRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveStepIndex(index);
    }
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Simple, Transparent Pricing
            </div>
            <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              One simple website offer. No monthly retainers.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
              A custom website built around your business, designed to look professional, work beautifully on mobile, and make it easy for customers to take action.
            </p>
          </div>
        </ScrollReveal>

        {/* ================================================================== */}
        {/* MAIN OFFER CARD: CUSTOM WEBSITE — $499 ONE-TIME                   */}
        {/* ================================================================== */}
        <ScrollReveal direction="up" delay={80} duration={700}>
          <div className="max-w-3xl mx-auto">
            <div className="p-6 sm:p-10 bg-[#131518] rounded-sm border-2 border-[#c5a059] shadow-[0_0_40px_rgba(197,160,89,0.18)] relative transition-all duration-300">
              {/* Badge & Period Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-xs uppercase bg-[#c5a059] text-black">
                    {primaryPackage?.badge || "ONE-TIME PURCHASE"}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-emerald-400 font-medium">
                    ZERO MONTHLY CONTRACTS
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-[#c5a059] font-semibold">
                  {primaryPackage?.pricePeriod || "ONE-TIME"}
                </span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2 mb-6">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {primaryPackage?.name || "CUSTOM WEBSITE"}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {primaryPackage?.description || "A custom website built around your business, designed to look professional, work beautifully on mobile, and make it easy for customers to take action."}
                </p>
              </div>

              {/* Price Box */}
              <div className="my-5 p-4 sm:p-5 bg-[#171a1e] rounded-xs border border-white/[0.08] flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      {primaryPackage?.price || "$499"}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#c5a059] font-bold uppercase tracking-wider">
                      ONE-TIME
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-mono mt-1">
                    Complete custom website build & launch
                  </p>
                </div>

                <div className="text-[11px] sm:text-xs text-neutral-300 font-mono space-y-1 sm:text-right">
                  <div className="text-emerald-400 flex items-center sm:justify-end gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>100% Client Ownership</span>
                  </div>
                  <div className="text-neutral-400">
                    Standard hosting included
                  </div>
                </div>
              </div>

              {/* What the $499 Includes */}
              <div className="mb-7">
                <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#c5a059] font-bold mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>WHAT THE $499 INCLUDES:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-neutral-200">
                  {primaryPackage?.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2 rounded-xs bg-[#171a1e]/60 border border-white/[0.04]"
                    >
                      <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span className="text-xs leading-snug font-normal text-neutral-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supporting Line */}
              <p className="text-xs text-neutral-400 italic mb-6 border-l-2 border-[#c5a059] pl-3 py-0.5">
                {primaryPackage?.supportingLine || "Includes standard website hosting, domain connection, and a 7-day post-launch revision window. Zero required monthly retainers."}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                <button
                  onClick={onOpenReview}
                  className="btn-primary-interaction group w-full py-3.5 px-5 bg-[#c5a059] hover:bg-[#d8b268] text-black rounded-xs text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>GET A FREE WEBSITE REVIEW</span>
                  <ArrowRight className="w-4 h-4 group-arrow-hover" />
                </button>

                <a
                  href="tel:2034445273"
                  className="btn-secondary-interaction group w-full py-3.5 px-5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-neutral-200 hover:text-white rounded-xs text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>CALL NOW: 203-444-5273</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================================== */}
        {/* POST-LAUNCH & SUPPORT CLARITY: No Forced Retainers                 */}
        {/* ================================================================== */}
        <ScrollReveal direction="up" delay={120} duration={700}>
          <div id="support" className="mt-10 sm:mt-14 max-w-5xl mx-auto p-5 sm:p-8 bg-[#121417] border border-white/10 rounded-sm relative overflow-hidden">
            {/* Header */}
            <div className="max-w-3xl mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{siteConfig.postLaunch.eyebrow}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                {siteConfig.postLaunch.headline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                {siteConfig.postLaunch.body}
              </p>
            </div>

            {/* 3 Steps / Cards (Swipeable on Mobile, 3-Column on Desktop) */}
            <div
              ref={scrollStepsRef}
              onScroll={handleStepScroll}
              className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 px-2 sm:px-0 -mx-2 sm:mx-0 items-stretch"
            >
              {siteConfig.postLaunch.steps.map((step) => (
                <div
                  key={step.number}
                  className="w-[78vw] max-w-[290px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full"
                >
                  <div className="h-full p-4 sm:p-5 bg-[#171a1e] border border-white/[0.08] hover:border-[#c5a059]/30 rounded-xs flex flex-col justify-between space-y-3 transition-colors duration-200">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-[#c5a059]">
                          {step.number}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-neutral-300">
                          {step.badge}
                        </span>
                      </div>

                      <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-wide leading-snug">
                        {step.title}
                      </h4>

                      <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-[10px] text-neutral-400 font-mono">
                      {step.number === "01" && "Minor tweaks & copy updates"}
                      {step.number === "02" && "Starting at $49 · Zero retainers"}
                      {step.number === "03" && "Transparent flat quotes upfront"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Dots */}
            <div className="md:hidden flex items-center justify-center gap-1.5 mt-3">
              {siteConfig.postLaunch.steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToStep(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeStepIndex === i ? "w-5 bg-[#c5a059]" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`View step ${i + 1}`}
                />
              ))}
            </div>

            {/* Reassurance Feature Highlights Strip */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
              <div className="p-2.5 bg-[#171a1e]/70 rounded-xs border border-white/5">
                <div className="text-[10px] font-mono text-[#c5a059] uppercase font-bold">Standard Hosting</div>
                <div className="text-xs text-neutral-200 font-medium mt-0.5">Included with build</div>
              </div>
              <div className="p-2.5 bg-[#171a1e]/70 rounded-xs border border-white/5">
                <div className="text-[10px] font-mono text-[#c5a059] uppercase font-bold">Your Domain</div>
                <div className="text-xs text-neutral-200 font-medium mt-0.5">Keep existing domain</div>
              </div>
              <div className="p-2.5 bg-[#171a1e]/70 rounded-xs border border-white/5">
                <div className="text-[10px] font-mono text-[#c5a059] uppercase font-bold">Future Updates</div>
                <div className="text-xs text-neutral-200 font-medium mt-0.5">Starting at $49</div>
              </div>
              <div className="p-2.5 bg-[#171a1e]/70 rounded-xs border border-white/5">
                <div className="text-[10px] font-mono text-[#c5a059] uppercase font-bold">Monthly Retainers</div>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">None required</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================================== */}
        {/* Reassuring Direct Founder Recommendation Box                       */}
        {/* ================================================================== */}
        <ScrollReveal direction="up" delay={160} duration={700}>
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto p-4 sm:p-7 bg-[#121417] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 text-center md:text-left max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>QUESTIONS BEFORE GETTING STARTED?</span>
              </div>
              <h4 className="font-display text-base sm:text-xl font-bold text-white">
                Straightforward answers directly from Michael.
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                You work directly with the founder and lead designer. We’ll review your current website, recommend the simplest structure that accomplishes your goals, and give you an honest appraisal with zero sales pressure.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-2.5">
              <button
                onClick={onOpenReview}
                className="btn-primary-interaction group w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-[#c5a059] hover:bg-[#d8b268] text-black text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <span>GET A FREE WEBSITE REVIEW</span>
                <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
              </button>

              <a
                href="tel:2034445273"
                className="btn-secondary-interaction group w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>CALL NOW: 203-444-5273</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
