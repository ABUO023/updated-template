"use client"

import { app_name } from "@/app/constants";
import { Link } from "@heroui/link"
import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { siteConfig } from "@/config/site"
import { TwitterIcon, GithubIcon, DiscordIcon, Logo } from "@/components/icons"

export const Footer = () => {
  return (
    <footer className="w-full border-t border-default-200 bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight">{app_name}</span>
            </div>
            <p className="text-default-500 text-sm max-w-xs">
              Building the future of web development with powerful, accessible, and beautiful UI components.
            </p>
            <div className="flex gap-4">
              <Link
                isExternal
                href={siteConfig.links.twitter || "#"}
                aria-label="Twitter"
                className="p-2 rounded-full bg-default-100 hover:bg-default-200 transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.discord || "#"}
                aria-label="Discord"
                className="p-2 rounded-full bg-default-100 hover:bg-default-200 transition-colors"
              >
                <DiscordIcon className="w-5 h-5" />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.github || "#"}
                aria-label="Github"
                className="p-2 rounded-full bg-default-100 hover:bg-default-200 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-default-500 hover:text-foreground transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-default-500 hover:text-foreground transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-default-500 hover:text-foreground transition-colors text-sm">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-default-500 hover:text-foreground transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-default-500 hover:text-foreground transition-colors text-sm">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-default-500 text-sm">
              Subscribe to our newsletter for updates, tips, and early access to new features.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm"
                  aria-label="Email for newsletter"
                />
                <Button size="sm">Subscribe</Button>
              </div>
              <p className="text-xs text-default-400">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-default-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-default-500">
            &copy; {new Date().getFullYear()} {app_name}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-xs text-default-500">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
