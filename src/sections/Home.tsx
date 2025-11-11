import { ContentArea } from "../components/ContentArea";
import mobileBackground from "../assets/bg-hero-mobile.svg";
import { Menu } from "../components/Menu";
import { useLanguage } from "../hooks/useLanguage";
import gitHubIcon from "../assets/github-white-icon.svg";
import linkedinIcon from "../assets/linkedin-white-icon.svg";
import { Theme } from "../shared/Theme";

export function HomeSection() {
  const { content } = useLanguage();
  return (
    <section
      className="border h-screen"
      style={{
        background: `url(${mobileBackground}) no-repeat top center`,
        backgroundSize: 'cover',
      }}>
      <ContentArea tailwindCss="py-2">
        <Menu />

        <section className="text-white font-bold text-center mt-20">

          <div className="flex h-10 gap-2 w-fit mx-auto mb-4">
            <a
              className="size-full opacity-70 hover:opacity-100"
              href="https://github.com/waldecifreitas20"
              target="_blank"
            >
              <img className="size-full" src={gitHubIcon} alt="GitHub" />
            </a>
            <a
              className="size-full opacity-70 hover:opacity-100"
              href="https://www.linkedin.com/in/waldeci-freitas21"
              target="_blank"
            >
              <img className="size-full" src={linkedinIcon} alt="Linkedin" />
            </a>
          </div>

          <p className="text-2xl" style={{
            color: Theme.accent
          }}>{content.hero.title}</p>
          <h1 className="text-5xl mt-2 mb-4">Waldeci Freitas</h1>
          <p className="font-normal text-white/70">{content.hero.intro}</p>
        </section>

      </ContentArea>
    </section>
  );
}