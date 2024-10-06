import { onest } from '@/app/ui/fonts';
import { HeroSection } from '@/app/ui/landing/hero-section/hero-section';
import { WhatWeDo } from '@/app/ui/landing/what-we-do/what-we-do';
import { HowItWorks } from '@/app/ui/landing/how-it-works/how-it-works';
import { CurrentClients } from '@/app/ui/landing/current-clients/current-clients';
import { GetInTouch } from '@/app/ui/landing/get-in-touch/get-in-touch';
import { Landing } from './ui/landing/landing';

export default function Page() {
  return (
    <div className={onest.className}>
      <Landing/>
    </div>
  );
}