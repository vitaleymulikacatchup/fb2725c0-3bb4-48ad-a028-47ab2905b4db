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
          subtitle="Fast, community-powered momentum for memecoin fans"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy contract address"
          copiedText="Copied!"
        />
      </div>
      <div id="about" data-section="about" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <SplitAbout
          description="MemNova unites community-driven innovation for rewarding participation."
        />
      </div>
      <div id="roadmap" data-section="roadmap" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <StackRoadmapTimeline
          items={[
            { id: 1, title: 'Genesis', description: 'Foundations/core infrastructure.', image: "https://example.com/image1.jpg" },
            { id: 2, title: 'Launch', description: 'Token debut/liquidity.', image: "https://example.com/image2.jpg" },
            { id: 3, title: 'Growth', description: 'Ecosystem expansion and partnerships.', image: "https://example.com/image3.jpg" }
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
            { value: '5%', description: 'Development Fund' },
            { value: '10%', description: 'Market Cap' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" style={{ background: 'linear-gradient(135deg, #0b0f14 0%, #0a1020 100%)' }}>
        <WalletFooter
          logoText="MemNova"
          walletAddress="0x123456789abcdef"
          copyButtonText="Copy Wallet Address"
          copiedText="Address Copied!"
          copyrightText="&copy; 2023 MemNova. All Rights Reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}