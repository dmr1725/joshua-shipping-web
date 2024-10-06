import { onest } from '@/app/ui/fonts';
import LandingLayout from './landing-layout';
import { Landing } from './ui/landing/landing';

export default function Page() {
  return (
    <div className={onest.className}>
      <LandingLayout>
        <Landing/>
      </LandingLayout>
    </div>
  );
}