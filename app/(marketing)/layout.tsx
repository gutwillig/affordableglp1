import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { TrustBar } from "@/components/marketing/trust-bar";
import { AffiliateDisclosure } from "@/components/marketing/affiliate-disclosure";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TrustBar />
      <Header />
      <main className="flex-1">{children}</main>
      <AffiliateDisclosure variant="footer" />
      <Footer />
    </>
  );
}
