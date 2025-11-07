import { ContentArea } from "../components/ContentArea";
import mobileBackground from "../assets/bg-hero-mobile.svg";
import { Menu } from "../components/Menu";


export function HeroSection() {
  return (
    <section
      className="border h-screen"
      style={{
        background: `url(${mobileBackground}) no-repeat center`,
        backgroundSize: '100vw',
      }}>
      <ContentArea>
        <Menu />
      </ContentArea>
    </section>
  );
}