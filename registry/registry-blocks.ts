import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  // {
  //   name: "article-01",
  //   description: "The Article Section for content presentation.",
  //   type: "registry:block",
  //   registryDependencies: ["card", "badge", "separator", "scroll-area"],
  //   files: [
  //     {
  //       path: "blocks/article-01/page.tsx",
  //       target: "app/article/page.tsx",
  //       type: "registry:page",
  //     },
  //     {
  //       path: "blocks/article-01/components/article-one.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   categories: ["article"],
  // },
  {
    name: "article-02",
    description: "The Article Two Section for content presentation.",
    type: "registry:block",
    registryDependencies: ["card", "badge", "separator", "scroll-area"],
    files: [
      {
        path: "blocks/article-02/page.tsx",
        target: "app/article/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/article-02/components/article-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["article"],
  },
  {
    name: "blog-01",
    description: "Blog Grid View",
    type: "registry:block",
    registryDependencies: ["card", "button", "badge"],
    files: [
      {
        path: "blocks/blog-01/page.tsx",
        target: "app/blog/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/blog-01/components/blog-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/blog-01/components/blog-header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/blog-01/hook/use-outside-click.ts",
        type: "registry:hook",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-02",
    description: "Simple Blog List",
    type: "registry:block",
    registryDependencies: ["card", "badge", "separator", "scroll-area"],
    files: [
      {
        path: "blocks/blog-02/page.tsx",
        target: "app/blog/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/blog-02/components/blog-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/blog-02/components/blog-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["blog"],
  },
  {
    name: "contact-01",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button", "textarea", "input", "label"],
    files: [
      {
        path: "blocks/contact-01/page.tsx",
        target: "@/components/contact.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/contact-01/components/contact-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
  },
  {
    name: "contact-02",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button", "textarea", "input", "label"],
    files: [
      {
        path: "blocks/contact-02/page.tsx",
        target: "@/components/contact.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/contact-02/components/contact-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
  },
  {
    name: "cta-01",
    description: "Call To Action.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-01/components/cta-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta:{
      iframeHeight:"410px"
    }
  },
  {
    name: "cta-02",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta-02/page.tsx",
        target: "@/components/cta.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-02/components/cta-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/cta-02/components/user-image.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta:{
      iframeHeight:"480px"
    }
  },
  {
    name: "cta-03",
    description: "A simple CTA.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta-03/page.tsx",
        target: "@/components/cta.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-03/components/cta-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta:{
      iframeHeight:"629px"
    }
  },
  {
    name: "faq-01",
    description: "A FQAs block",
    type: "registry:block",
    registryDependencies: ["tabs", "accordion", "badge"],
    files: [
      {
        path: "blocks/faq-01/page.tsx",
        target: "app/faq/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/faq-01/components/faq-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/faq-01/components/tabs.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    meta:{
      iframeHeight:"600px"
    }
  },
  {
    name: "faq-02",
    description: "A FAQs.",
    type: "registry:block",
    registryDependencies: ["badge", "input"],
    files: [
      {
        path: "blocks/faq-02/page.tsx",
        target: "app/faq/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/faq-02/components/faq-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/faq-02/components/accordion.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faq"],
    meta:{
      iframeHeight:"700px"
    }
  },
  {
    name: "faq-03",
    description: "A FAQs.",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/faq-03/page.tsx",
        target: "app/faq/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/faq-03/components/faq-three.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/faq-03/components/open-contact-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/faq-03/hook/use-outside-click.ts",
        type: "registry:hook",
      },
    ],
    categories: ["faq"],
    meta:{
      iframeHeight:"750px"
    }
  },
  {
    name: "feature-01",
    description: "A Feature Block.",
    type: "registry:block",
    registryDependencies: ["card", "accordion"],
    files: [
      {
        path: "blocks/feature-01/page.tsx",
        target: "app/feature/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/feature-01/components/feature-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta:{
      iframeHeight:"500px"
    }
  },
  {
    name: "feature-02",
    description: "A Feature block.",
    type: "registry:block",
    registryDependencies: ["card", "accordion"],
    files: [
      {
        path: "blocks/feature-02/page.tsx",
        target: "app/feature/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/feature-02/components/feature-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/feature-02/components/video-dialog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta:{
      iframeHeight:"797px"
    }
  },
  {
    name: "feature-03",
    description: "A Feature block.",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/feature-03/page.tsx",
        target: "app/feature/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/feature-03/components/feature-three.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/feature-03/components/video-dialog.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta:{
      iframeHeight:"600px"
    }
  },
  {
    name: "footer-01",
    description: "A Footer block.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer-01/page.tsx",
        target: "app/footer/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/footer-01/components/footer-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/footer-01/components/animation-container.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta:{
      iframeHeight:"250px"
    }
  },
  {
    name: "footer-02",
    description: "A Footer block.",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/footer-02/page.tsx",
        target: "app/footer/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/footer-02/components/footer-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta:{
      iframeHeight:"462px"
    }
  },
  {
    name: "footer-03",
    description: "A Footer block.",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/footer-03/page.tsx",
        target: "app/footer/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/footer-03/components/footer-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta:{
      iframeHeight:"460px"
    }
  },
  {
    name: "header-01",
    description: "header block",
    type: "registry:block",
    registryDependencies: ["sheet", "button"],
    files: [
      {
        path: "blocks/header-01/page.tsx",
        target: "@/components/header.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-01/components/header-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-01/components/animation-container.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-01/components/mobile-navbar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta:{
      iframeHeight:"300px"
    }
  },
  {
    name: "header-02",
    description: "header block",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/header-02/page.tsx",
        target: "@/components/header.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-02/components/header-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta:{
      iframeHeight:"300px"
    }
  },
  {
    name: "header-03",
    description: "header block",
    type: "registry:block",
    registryDependencies: ["button", "sheet", "navigation-menu"],
    files: [
      {
        path: "blocks/header-03/page.tsx",
        target: "@/components/header.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-03/components/header-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta:{
      iframeHeight:"300px"
    }
  },
  {
    name: "header-04",
    description: "header block",
    type: "registry:block",
    registryDependencies: ["button", "sheet"],
    files: [
      {
        path: "blocks/header-04/page.tsx",
        target: "@/components/header.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/header-04/components/header-four.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/header-04/components/contact-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["header"],
    meta:{
      iframeHeight:"400px"
    }
  },
  {
    name: "logo-01",
    description: "logo-cloud block",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/logo-01/page.tsx",
        target: "@/components/logo.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-01/components/logo-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/logo-01/components/marquee.tsx",
        type: "registry:component",
      },
    ],
    categories: ["company-logo"],
    meta:{
      iframeHeight:"230px"
    }
  },
  {
    name: "logo-02",
    description: "logo-cloud block",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/logo-02/page.tsx",
        target: "@/components/logo.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-02/components/logo-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/logo-02/components/marquee.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/logo-02/components/tailwind.config.ts",
        type: "registry:lib",
      },
    ],
    categories: ["company-logo"],
    meta:{
      iframeHeight:"460px"
    }
  },
  {
    name: "logo-03",
    description: "logo-cloud block",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/logo-03/page.tsx",
        target: "@/components/logo.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/logo-03/components/logo-three.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/logo-03/components/logo-slider.tsx",
        type: "registry:component",
      },
    ],
    categories: ["company-logo"],
    meta:{
      iframeHeight:"495px"
    }
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-01/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-01/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
    meta:{
      iframeHeight:"530px"
    }
  },
  {
    name: "login-02",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-02/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-02/components/login-form-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/login-02/components/google-logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["login"],
    meta:{
      iframeHeight:"625px"
    }
  },
  {
    name: "newsletter-01",
    description: "newsletter block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/newsletter-01/page.tsx",
        target: "@/components/newsletter.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/newsletter-01/components/newsletter-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["newsletter"],
    meta:{
      iframeHeight:"442px"
    }
  },
  {
    name: "newsletter-02",
    description: "newsletter block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/newsletter-02/page.tsx",
        target: "@/components/newsletter.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/newsletter-02/components/newsletter-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/newsletter-02/components/user-image.tsx",
        type: "registry:component",
      },
    ],
    categories: ["newsletter"],
    meta:{
      iframeHeight:"570px"
    }
  },
  {
    name: "newsletter-03",
    description: "newsletter block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/newsletter-03/page.tsx",
        target: "@/components/newsletter.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/newsletter-03/components/newsletter-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["newsletter"],
    meta:{
      iframeHeight:"368px"
    }
  },
  {
    name: "pricing-01",
    description: "pricing block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/pricing-01/page.tsx",
        target: "@/components/pricing.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-01/components/pricing-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/pricing-01/components/price-slider.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-02",
    description: "pricing block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/pricing-02/page.tsx",
        target: "@/components/pricing.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-02/components/pricing-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-03",
    description: "pricing block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/pricing-03/page.tsx",
        target: "@/components/pricing.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-03/components/pricing-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta:{
      iframeHeight:"670px"
    }
  },
  {
    name: "pricing-04",
    description: "pricing block 4",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/pricing-04/page.tsx",
        target: "@/components/pricing.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/pricing-04/components/pricing-four.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta:{
      iframeHeight:"740px"
    }
  },
  {
    name: "rating-01",
    description: "rating block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/rating-01/page.tsx",
        type: "registry:page",
        target: "@/components/rating.tsx",
      },
      {
        path: "blocks/rating-01/components/rating-one.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/rating-01/hooks/useClickOutside.tsx",
        type: "registry:component",
      },
    ],
    categories: ["rating"],
    meta:{
      iframeHeight:"300px"
    }
  },
  {
    name: "rating-02",
    description: "rating block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/rating-02/page.tsx",
        type: "registry:page",
        target: "@/components/rating.tsx",
      },
      {
        path: "blocks/rating-02/components/rating-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["rating"],
    meta:{
      iframeHeight:"550px"
    }
  },
  {
    name: "rating-03",
    description: "rating block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/rating-03/page.tsx",
        type: "registry:page",
        target: "@/components/rating.tsx",
      },
      {
        path: "blocks/rating-03/components/rating-three.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/rating-03/components/dialog-box.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/rating-03/components/write-review.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/rating-03/hooks/useClickOutside.tsx",
        type: "registry:component",
      },
    ],
    categories: ["rating"],
    meta:{
      iframeHeight:"610px"
    }
  },
  {
    name: "roadmap-01",
    description: "roadmap block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/roadmap-01/page.tsx",
        type: "registry:page",
        target: "@/components/roadmap.tsx",
      },
      {
        path: "blocks/roadmap-01/components/roadmap-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["roadmap"],
    meta:{
      iframeHeight:"650px"
    }
  },
  {
    name: "roadmap-02",
    description: "roadmap block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/roadmap-02/page.tsx",
        type: "registry:page",
        target: "@/components/roadmap.tsx",
      },
      {
        path: "blocks/roadmap-02/components/roadmap-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["roadmap"],
  },
  {
    name: "roadmap-03",
    description: "roadmap block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/roadmap-03/page.tsx",
        type: "registry:page",
        target: "@/components/roadmap.tsx",
      },
      {
        path: "blocks/roadmap-03/components/roadmap-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["roadmap"],
    meta:{
      iframeHeight:"550px"
    }
  },
  {
    name: "stats-01",
    description: "stats block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/stats-01/page.tsx",
        type: "registry:page",
        target: "@/components/stats.tsx",
      },
      {
        path: "blocks/stats-01/components/stats-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta:{
      iframeHeight:"467px"
    }
  },
  {
    name: "stats-02",
    description: "stats block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/stats-02/page.tsx",
        type: "registry:page",
        target: "@/components/stats.tsx",
      },
      {
        path: "blocks/stats-02/components/stats-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta:{
      iframeHeight:"345px"
    }
  },
  {
    name: "stats-03",
    description: "stats block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/stats-03/page.tsx",
        type: "registry:page",
        target: "@/components/stats.tsx",
      },
      {
        path: "blocks/stats-03/components/stats-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["stats"],
    meta:{
      iframeHeight:"420px"
    }
  },
  {
    name: "steps-01",
    description: "steps block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/steps-01/page.tsx",
        type: "registry:page",
        target: "@/components/steps.tsx",
      },
      {
        path: "blocks/steps-01/components/steps-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["steps"],
  },
  {
    name: "steps-02",
    description: "steps block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/steps-02/page.tsx",
        type: "registry:page",
        target: "@/components/steps.tsx",
      },
      {
        path: "blocks/steps-02/components/steps-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["steps"],
  },
  {
    name: "signup-01",
    description: "A simple Signup form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/signup-01/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-01/components/signup-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
  },
  {
    name: "signup-02",
    description: "A Signup form with Password Validation.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "hover-card"],
    files: [
      {
        path: "blocks/signup-02/page.tsx",
        target: "@/components/signup.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-02/components/signup-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
    meta:{
      iframeHeight:"750px"
    }
  },
  {
    name: "signup-03",
    description: "A Signup form with Step",
    type: "registry:block",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/signup-03/page.tsx",
        target: "@/components/signup.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-03/components/signup-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
    meta:{
      iframeHeight:"650px"
    }
  },
  {
    name: "signup-04",
    description: "A Signup form",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "checkbox"],
    files: [
      {
        path: "blocks/signup-04/page.tsx",
        target: "@/components/signup.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-04/components/signup-four.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
  },
  // {
  //   name: "testimonial-01",
  //   description: "testimonial block 1",
  //   type: "registry:block",
  //   registryDependencies: [],
  //   files: [
  //     {
  //       path: "blocks/testimonial-01/page.tsx",
  //       type: "registry:page",
  //       target: "@/components/testimonial.tsx",
  //     },
  //     {
  //       path: "blocks/testimonial-01/components/testimonial-one.tsx",
  //       type: "registry:component",
  //     },
  //   ],
  //   categories: ["testimonial"],
  // },
  {
    name: "team-01",
    description: "team block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/team-01/page.tsx",
        type: "registry:page",
        target: "@/components/team.tsx",
      },
      {
        path: "blocks/team-01/components/team-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["teams"],
  },
  {
    name: "team-02",
    description: "team block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/team-02/page.tsx",
        type: "registry:page",
        target: "@/components/team.tsx",
      },
      {
        path: "blocks/team-02/components/team-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/team-02/components/team-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["teams"],
  },
  {
    name: "team-03",
    description: "team block 3",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/team-03/page.tsx",
        type: "registry:page",
        target: "@/components/team.tsx",
      },
      {
        path: "blocks/team-03/components/team-three.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/team-03/components/marquee.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/team-03/components/tailwind.config.ts",
        type: "registry:component",
      },
    ],
    categories: ["teams"],
    meta:{
      iframeHeight:"640px"
    }
  },
  {
    name: "testimonial-02",
    description: "testimonial block 1",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/testimonial-02/page.tsx",
        type: "registry:page",
        target: "@/components/testimonial.tsx",
      },
      {
        path: "blocks/testimonial-02/components/testimonial-two.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/testimonial-02/components/testimonial-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonial"],
    meta:{
      iframeHeight:"560px"
    }
  },
  {
    name: "testimonial-03",
    description: "testimonial block 2",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/testimonial-03/page.tsx",
        type: "registry:page",
        target: "@/components/testimonial.tsx",
      },
      {
        path: "blocks/testimonial-03/components/testimonial-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonial"],
    meta:{
      iframeHeight:"560px"
    }
  },

  // here full-featured blocks

  {
    name: "analytics",
    description: "Analytics dashboard",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/analytics/page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/analytics-chart.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/customer-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/analytics/components/info-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["analytics"],
    meta:{
      iframeHeight:"820px"
    } 
  },
  {
    name: "e-commerce",
    description: "e-commerce page",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/e-commerce/page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/e-commerce/components/category-carousel.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/e-commerce/components/hero-carousel.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/e-commerce/components/popular-product-card.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/e-commerce/components/product-card.tsx",
        type: "registry:component",
      }
    ],
    categories: ["e-commerce"],
    meta:{
      iframeHeight:"1100px"
    } 
  }
];
