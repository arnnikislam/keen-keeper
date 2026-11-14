import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    icon: "/images/instagram.png",
    href: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: "/images/facebook.png",
    href: "https://facebook.com",
  },
  { name: "X", icon: "/images/twitter.png", href: "https://x.com" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-14 pb-8 sm:pt-16">
        {/* Logo */}
        <Image
          src="/images/logo-xl.png"
          alt="KeenKeeper"
          width={224}
          height={56}
          className="h-auto w-44 sm:w-56"
        />

        {/* Tagline */}
        <p className="mt-4 max-w-md text-center text-xs text-white/90 sm:max-w-none sm:text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social links */}
        <h3 className="mt-6 text-base font-medium">Social Links</h3>
        <ul className="mt-3 flex items-center gap-3">
          {socials.map(({ name, icon, href }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="btn btn-circle btn-sm border-0 bg-white p-0 shadow-none hover:bg-gray-200"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom bar */}
        <div className="mt-10 flex w-full flex-col-reverse items-center gap-4 text-xs text-white/60 sm:flex-row sm:justify-between sm:gap-0">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <ul className="flex items-center gap-6">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
