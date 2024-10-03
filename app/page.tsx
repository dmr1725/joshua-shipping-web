import { onest } from '@/app/ui/fonts';
import { Header } from '@/app/ui/landing/header/header'
import { HeroSection } from './ui/landing/hero-section/hero-section';
import { WhatWeDo } from './ui/landing/what-we-do/what-we-do';
import { HowItWorks } from './ui/landing/how-it-works/how-it-works';


export default function Landing() {
  return (
    <div className={onest.className}>
      <Header/>
      <HeroSection/>
      <WhatWeDo/>
      <HowItWorks/>
    </div>
  );
}
