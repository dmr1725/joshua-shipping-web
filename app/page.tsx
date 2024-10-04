import { onest } from '@/app/ui/fonts';
import { Header } from '@/app/ui/landing/header/header'
import { HeroSection } from './ui/landing/hero-section/hero-section';
import { WhatWeDo } from './ui/landing/what-we-do/what-we-do';
import { HowItWorks } from './ui/landing/how-it-works/how-it-works';
import { CurrentClients } from './ui/landing/current-clients/current-clients';
import { GetInTouch } from './ui/landing/get-in-touch/get-in-touch';


export default function Landing() {
  return (
    <div className={onest.className}>
      <Header/>
      <HeroSection/>
      <WhatWeDo/>
      <HowItWorks/>
      <CurrentClients/>
      <GetInTouch/>
    </div>
  );
}
