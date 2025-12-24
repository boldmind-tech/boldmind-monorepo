import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[#FFC107]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo size="md" />
          <div>
            <p className="text-[#E0E0E0] text-sm">
              © 2025 BoldMind Technology Solution Enterprise
            </p>
            <p className="text-[#E0E0E0]/60 text-xs">
              Built by Africans, for Africa
            </p>
          </div>
        </div>

        <SocialLinks />
      </div>
    </footer>
  )
}