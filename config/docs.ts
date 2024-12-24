export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
  sidebarNav: SidebarNavItem[]
  mainNav: NavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/blocks",
          items: [],
        },
      ],
    },
    {
      title: "Blocks",
      items: [
        {
          title: "Article",
          href: "/blocks/article",
          items: [],
        },
        {
          title: "Blog",
          href: "/blocks/blog",
          items: [],
        },
        {
          title: "Contact",
          href: "/blocks/contact",
          items: [],
        },
        {
          title: "CTA",
          href: "/blocks/cta",
          items: [],
        },
        {
          title: "FAQs",
          href: "/blocks/faq",
          items: [],
        },
        {
          title: "Feature",
          href: "/blocks/feature",
          items: [],
        },
        {
          title: "Footer",
          href: "/blocks/footer",
          items: [],
        },
        {
          title: "Gallery",
          href: "/blocks/gallery",
          items: [],
        },
        {
          title: "Header",
          href: "/blocks/header",
          items: [],
        },
        {
          title: "Login",
          href: "/blocks/login",
          items: [],
        },
        {
          title: "Logo",
          href: "/blocks/company-logo",
          items: [],
        },
        {
          title: "Newsletter",
          href: "/blocks/newsletter",
          items: [],
        },
        {
          title: "Pricing",
          href: "/blocks/pricing",
          items: [],
        },
        {
          title: "Roadmap",
          href: "/blocks/roadmap",
          items: [],
        },
        {
          title: "SignUp",
          href: "/blocks/signup",
          items: [],
        },
        {
          title: "Stats",
          href: "/blocks/stats",
          items: [],
        },
        {
          title: "Steps",
          href: "/blocks/steps",
          items: [],
        },
        {
          title: "Teams",
          href: "/blocks/teams",
          items: [],
        },
        {
          title: "Testimonial",
          href: "/blocks/testimonial",
          items: [],
        },
      ],
    },
  ],
  mainNav: [
    {
      title: "Block",
      href: "/blocks",
    },
    {
      title: "Template",
      href: "/coming-soon",
    },
    {
      title: "Themes",
      href: "/themes",
    },
  ],
}
