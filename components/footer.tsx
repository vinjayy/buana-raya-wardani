import { FooterMain } from "./footer/footer-main"
import { FooterBottom } from "./footer/footer-bottom"

export function Footer() {
  return (
    <footer className="w-full border-t bg-green-900 text-white">
      <FooterMain />
      <FooterBottom />
    </footer>
  )
}
