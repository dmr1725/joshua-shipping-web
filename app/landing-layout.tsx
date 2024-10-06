// app/main-layout.tsx

import { Header } from "@/app/ui/landing/header/header";
import { Footer } from "@/app/ui/landing/footer/footer";
import "./globals.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
       <div className="page-wrapper">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
    </>
  );
}