
import type { Language } from "@/types/Language";
import { useLanguage } from "@hooks/useLanguage";


export function LanguageMode() {
  const { activeLanguage, switchTo, flags, languages } = useLanguage();

  const activeClass = 'border-red-400';

  function handleClick(lang: Language) {
    switchTo(lang);

  }

  return (
    <div className="flex h-full gap-2 absolute z-0 right-0 top-0">
      
      {/* portuguese */}
      <button
        onClick={() => handleClick(languages.pt)}>
        <img
          className={`
          block
          border-2 
          h-10
          rounded-full 
          ${activeLanguage === languages.pt ? activeClass : 'border-transparent'}`}
          src={flags.pt}
          alt={activeLanguage}
        />
      </button>

      {/* english */}
      <button
        onClick={() => handleClick(languages.en)}>
        <img
          className={`
          block
          border-2 
          h-10
          rounded-full 
          ${activeLanguage === languages.en ? activeClass : 'border-transparent'}`}
          src={flags.en}
          alt={activeLanguage}
        />
      </button>

    </div>
  );
}