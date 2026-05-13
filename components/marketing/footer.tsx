import Link from "next/link";

const footerLinks = {
  providers: [
    { title: "All Providers", href: "/rankings" },
    { title: "Best for Women", href: "/for-women" },
    { title: "Best for Men", href: "/for-men" },
    { title: "Brand-Name Only", href: "/brand-name" },
    { title: "Cheapest Options", href: "/rankings/cheapest" },
  ],
  medications: [
    { title: "Semaglutide", href: "/medications/semaglutide" },
    { title: "Tirzepatide", href: "/medications/tirzepatide" },
    { title: "Wegovy", href: "/medications/wegovy" },
    { title: "Zepbound", href: "/medications/zepbound" },
    { title: "Ozempic", href: "/medications/ozempic" },
    { title: "Mounjaro", href: "/medications/mounjaro" },
  ],
  resources: [
    { title: "Cost Calculator", href: "/cost/calculator" },
    { title: "FDA Tracker", href: "/fda-tracker" },
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/faq" },
    { title: "Glossary", href: "/glossary" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Methodology", href: "/about/methodology" },
    { title: "Medical Team", href: "/about/medical-team" },
    { title: "Editorial Standards", href: "/about/editorial-standards" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { title: "Medical Disclaimer", href: "/medical-disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">
              Providers
            </h3>
            <ul className="space-y-2">
              {footerLinks.providers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">
              Medications
            </h3>
            <ul className="space-y-2">
              {footerLinks.medications.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-ink pt-8 mb-8">
          <p className="text-xs text-muted max-w-4xl">
            <strong className="text-soft">Medical Disclaimer:</strong> The
            content on AffordableGLP-1.com is for informational purposes only
            and is not intended as medical advice, diagnosis, or treatment.
            Always consult with a qualified healthcare provider before starting
            any medication or weight loss program. GLP-1 medications require a
            prescription and are not appropriate for everyone.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ink pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold">
              Affordable<span className="text-forest-light">GLP-1</span>
            </span>
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AffordableGLP-1.com. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
