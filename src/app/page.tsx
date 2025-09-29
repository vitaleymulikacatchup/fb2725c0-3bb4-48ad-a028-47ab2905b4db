"use client";

import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import StackRoadmapTimeline from '@/components/sections/layouts/roadmap/StackRoadmapTimeline';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import WalletFooter from '@/components/sections/layouts/footer/WalletFooter';

const theme: SiteTheme = { styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759145786064-c162ac74.jpg"
          onButtonClick={() => {}}
          buttonText="Join MEM"
          navItems={
            [
              { name: 'Hero', id: 'hero' },
              { name: 'About', id: 'about' },
              { name: 'Roadmap', id: 'roadmap' },
              { name: 'How to Buy', id: 'how-to-buy' },
              { name: 'Tokenomics', id: 'tokenomics' },
              { name: 'Footer', id: 'footer' }
            ]
          }
        />
      </div>
      <div id="hero" data-section="hero" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <TokenBillboardHero
          title="Join the Futuristic Memecoin Revolution!"
          subtitle="The memecoin of tomorrow, today!"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy to clipboard"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <SplitAbout
          description="MemNova is the memecoin that captures the essence of community and innovation."
        />
      </div>
      <div id="roadmap" data-section="roadmap" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <StackRoadmapTimeline
          items={[
            { title: 'Project Genesis', description: 'Foundation phase with research and core infrastructure.' },
            { title: 'Launch', description: 'Official memecoin launch and community building.' },
            { title: 'Growth', description: 'Scaling and expanding the ecosystem.' }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <TextGridTokenomics
          title="Tokenomics"
          description="Transparently outlined economics of MemNova."
          tokenData={[
            { value: '1M', description: 'Total Supply' },
            { value: '20%', description: 'Liquidity' },
            { value: '5%', description: 'Development Fund' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <WalletFooter
          logoText="MemNova"
          walletAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
          copyrightText="&copy; 2023 MemNova. All Rights Reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
