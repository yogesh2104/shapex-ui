export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  count?:number
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
        {
          title: "Why ShapeX-UI",
          href: "/blocks/why-shapex-ui",
          items: [],
        },
        {
          title: "Templates",
          href: "#",
          disabled: true,
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
          count:2
        },
        {
          title: "Blog",
          href: "/blocks/blog",
          items: [],
          count:2
        },
        {
          title: "Contact",
          href: "/blocks/contact",
          items: [],
          count:2
        },
        {
          title: "CTA",
          href: "/blocks/cta",
          items: [],
          count:3
        },
        {
          title: "FAQs",
          href: "/blocks/faq",
          items: [],
          count:3
        },
        {
          title: "Feature",
          href: "/blocks/feature",
          items: [],
          count:3
        },
        {
          title: "Footer",
          href: "/blocks/footer",
          items: [],
          count:3
        },
        {
          title: "Gallery",
          href: "/blocks/gallery",
          items: [],
          count:0
        },
        {
          title: "Header",
          href: "/blocks/header",
          items: [],
          count:4
        },
        {
          title: "Login",
          href: "/blocks/login",
          items: [],
          count:2
        },
        {
          title: "Logo",
          href: "/blocks/company-logo",
          items: [],
          count:3
        },
        {
          title: "Newsletter",
          href: "/blocks/newsletter",
          items: [],
          count:3
        },
        {
          title: "Pricing",
          href: "/blocks/pricing",
          items: [],
          count:4
        },
        {
          title: "Rating",
          href: "/blocks/rating",
          items: [],
          count:3
        },
        {
          title: "Roadmap",
          href: "/blocks/roadmap",
          items: [],
          count:3
        },
        {
          title: "SignUp",
          href: "/blocks/signup",
          items: [],
          count:3
        },
        {
          title: "Stats",
          href: "/blocks/stats",
          items: [],
          count:3
        },
        {
          title: "Steps",
          href: "/blocks/steps",
          items: [],
          count:2
        },
        {
          title: "Teams",
          href: "/blocks/teams",
          items: [],
          count:3
        },
        {
          title: "Testimonial",
          href: "/blocks/testimonial",
          items: [],
          count:3
        },
      ],
    },
    {
      title: "Full Featured",
      items: [
        {
          title: "Analytics",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Admin Panel",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "E-Commerce",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Blog Page",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Blog Details",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "File Management",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Kanban",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Messaging",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Settings",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Socila Media",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Settings",
          href: "#",
          disabled: true,
          items: [],
        },
        {
          title: "Video Streaming",
          href: "#",
          disabled: true,
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
    // {
    //   title: "Themes",
    //   href: "/themes",
    // },
  ],
}


export const FEATURED_BLOCKS = [
  "login-02",
  "signup-02",
  "blog-01",
  "contact-02",
  "cta-02",
  "faq-01",
  "feature-03",
  "footer-03",
  "header-04",
  "logo-03",
  "newsletter-02",
  "pricing-02",
  "rating-03",
  "stats-03",
  "team-01",
  "testimonial-02"
]
