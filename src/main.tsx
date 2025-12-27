import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StaticContentProvider } from './providers/StaticContentProvider.tsx'
import { ProjectProvider } from './providers/ProjectProvider.tsx'
import { LanguageProvider } from './providers/LanguageProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <StaticContentProvider>
        <ProjectProvider>
          <App />
        </ProjectProvider>
      </StaticContentProvider>
    </LanguageProvider>
  </StrictMode>,
)
