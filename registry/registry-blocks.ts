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
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/article/article-two.tsx",
        type: "registry:component",
        target:"components/shapexui/article-two.tsx"
      },
    ],
    categories: ["article"],
  },
  {
    name: "blog-01",
    description: "Blog Grid View",
    type: "registry:block",
    registryDependencies: ["button", "badge","input","select",],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/blog/blog-01/blog-one.tsx",
        type: "registry:component",
        target:"components/shapexui/blog.tsx"
      },
      {
        path: "blocks/blog/blog-01/blog-header.tsx",
        type: "registry:component",
        target:"components/shapexui/blog-header.tsx"
      },
    ],
    categories: ["blog"],
  },
  {
    name: "blog-02",
    description: "Simple Blog List",
    type: "registry:block",
    registryDependencies: ["card", "badge", "separator", "input","button"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/blog/blog-02/blog-two.tsx",
        type: "registry:component",
        target:"components/shapexui/blog.tsx"
      },
      {
        path: "blocks/blog/blog-02/blog-header.tsx",
        type: "registry:component",
        target:"components/shapexui/blog-header.tsx"
      },
    ],
    categories: ["blog"],
  },
  {
    name: "contact-01",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["card","button", "textarea", "input"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/contact/contact-one.tsx",
        type: "registry:component",
        target: "components/shapexui/contact.tsx"
      },
    ],
    categories: ["contact"],
  },
  {
    name: "contact-02",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button", "textarea", "input", "label"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/contact/contact-two.tsx",
        type: "registry:component",
        target: "components/shapexui/contact.tsx"
      },
    ],
    categories: ["contact"],
  },
  {
    name: "cta-01",
    description: "Call To Action.",
    type: "registry:block",
    registryDependencies: ["button","card"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/cta/cta-one.tsx",
        type: "registry:component",
        target:"components/shapexui/cta.tsx"
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
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/cta/cta-02/components/cta-two.tsx",
        type: "registry:component",
        target:"components/shapexui/cta.tsx"
      },
      {
        path: "blocks/cta-02/components/user-image.tsx",
        type: "registry:component",
        target:"components/shapexui/user-image.tsx"
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
        path: "blocks/cta/cta-three.tsx",
        type: "registry:component",
        target:"components/shapexui/cta.tsx"
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
    registryDependencies: ["accordion","badge"],
    dependencies:["@radix-ui/react-tabs"],
    files: [
      {
        path: "blocks/faq/faq-01/faq-one.tsx",
        type: "registry:component",
        target:'components/shapexui/faq.tsx'
      },
      {
        path: "blocks/faq/faq-01/tabs.tsx",
        type: "registry:component",
        target:'components/shapexui/tabs.tsx'
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
    dependencies:["@radix-ui/react-accordion"],
    files: [
      {
        path: "blocks/faq/faq-02/faq-two.tsx",
        type: "registry:component",
        target:'components/shapexui/faq.tsx'
      },
      {
        path: "blocks/faq/faq-02/accordion.tsx",
        type: "registry:component",
        target:'components/shapexui/accordion.tsx'
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
    registryDependencies: ["card","accordion","label","input","button","textarea",],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/faq/faq-03/faq-three.tsx",
        type: "registry:component",
        target:'components/shapexui/faq.tsx'
      },
      {
        path: "blocks/faq/faq-03/open-contact-form.tsx",
        type: "registry:component",
        target:'components/shapexui/open-contact-form.tsx'
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
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/feature/feature-01/feature-one.tsx",
        type: "registry:component",
        target:'components/shapexui/feature.tsx'
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
    registryDependencies: [],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/feature/feature-02/feature-two.tsx",
        type: "registry:component",
        target:'components/shapexui/feature.tsx'
      },
      {
        path: "blocks/feature/feature-02/video-dialog.tsx",
        type: "registry:component",
        target:'components/shapexui/video-dialog.tsx'
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
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/feature-03/components/feature-three.tsx",
        type: "registry:component",
        target:'components/shapexui/feature.tsx'
      },
      {
        path: "blocks/feature-03/components/video-dialog.tsx",
        type: "registry:component",
        target:'components/shapexui/video-dialog.tsx'
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
        path: "blocks/footer/footer-01/footer-one.tsx",
        type: "registry:component",
        target:'components/shapexui/footer.tsx'
      },
      {
        path: "blocks/footer/footer-01/animation-container.tsx",
        type: "registry:component",
        target:'components/shapexui/animation-container.tsx'
      },
    ],
    categories: ["footer"],
    meta:{
      iframeHeight:"250px"
    },
    
  },
  {
    name: "footer-02",
    description: "A Footer block.",
    type: "registry:block",
    registryDependencies: [],
    files: [

      {
        path: "blocks/footer/footer-02/footer-two.tsx",
        type: "registry:component",
        target:'components/shapexui/footer.tsx'
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
        path: "blocks/footer/footer-03/footer-three.tsx",
        type: "registry:component",
        target:'components/shapexui/footer.tsx'
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
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/header/header-01/header-one.tsx",
        type: "registry:component",
        target:'components/shapexui/header.tsx'
      },
      {
        path: "blocks/header/header-01/animation-container.tsx",
        type: "registry:component",
        target:'components/shapexui/animation-container.tsx'
      },
      {
        path: "blocks/header/header-01/mobile-navbar.tsx",
        type: "registry:component",
        target:'components/shapexui/mobile-navbar.tsx'
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
        path: "blocks/header/header-02/header-two.tsx",
        type: "registry:component",
        target:"components/shapexui/header.tsx"
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
        path: "blocks/header/header-03/header-three.tsx",
        type: "registry:component",
        target:"components/shapexui/header.tsx"
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
    registryDependencies: ["button","label","input", "select","sheet"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/header/header-04/header-four.tsx",
        type: "registry:component",
        target:"components/shapexui/header.tsx"
      },
      {
        path: "blocks/header/header-04/contact-form.tsx",
        type: "registry:component",
        target:"components/shapexui/contact-form.tsx"
      },
    ],
    categories: ["header"],
    meta:{
      iframeHeight:"400px"
    }
  },
  {
    name: "login-01",
    description: "A simple login form.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login/login-01/login-form.tsx",
        type: "registry:component",
        target:"components/shapexui/login.tsx"
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
    registryDependencies: ["button", "card", "input", "label","separator"],
    files: [
      {
        path: "blocks/login/login-02/login-form-two.tsx",
        type: "registry:component",
        target:"components/shapexui/login.tsx"
      },
      {
        path: "blocks/login/login-02/google-logo.tsx",
        type: "registry:component",
        target:"components/shapexui/google-logo.tsx"
      },
    ],
    categories: ["login"],
    meta:{
      iframeHeight:"625px"
    }
  },
  {
    name: "logo-01",
    description: "logo-cloud block",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/logo/logo-01/logo-one.tsx",
        type: "registry:component",
        target:"components/shapexui/logo.tsx"
      },
      {
        path: "blocks/logo/logo-01/marquee.tsx",
        type: "registry:component",
        target:"components/shapexui/marquee.tsx"

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
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/logo/logo-02/logo-two.tsx",
        type: "registry:component",
        target:"components/shapexui/logo.tsx"
      },
      {
        path: "blocks/logo/logo-02/marquee.tsx",
        type: "registry:component",
        target:"components/shapexui/marquee.tsx"
      },
      {
        path: "blocks/logo/logo-02/tailwind.config.ts",
        type: "registry:lib",
      },
    ],
    categories: ["company-logo"],
    meta:{
      iframeHeight:"460px"
    },
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              marquee: "marquee var(--duration) linear infinite",
              "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
              marquee: {
                from: { transform: "translateX(0)" },
                to: { transform: "translateX(calc(-100% - var(--gap)))" },
              },
              "marquee-vertical": {
                from: { transform: "translateY(0)" },
                to: { transform: "translateY(calc(-100% - var(--gap)))" },
              },
            },
          },
        },
      },
    },
  },
  {
    name: "logo-03",
    description: "logo-cloud block",
    type: "registry:block",
    registryDependencies: ["button"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/logo/logo-03/logo-three.tsx",
        type: "registry:component",
        target:"components/shapexui/logo.tsx"
      },
      {
        path: "blocks/logo/logo-03/logo-slider.tsx",
        type: "registry:component",
        target:"components/shapexui/logo-slider.tsx"
      },
    ],
    categories: ["company-logo"],
    meta:{
      iframeHeight:"495px"
    }
  },
  {
    name: "newsletter-01",
    description: "newsletter block 1",
    type: "registry:block",
    registryDependencies: ["input","button"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/newsletter/newsletter-01/newsletter-one.tsx",
        type: "registry:component",
        target:"components/shapexui/newsletter.tsx"
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
    registryDependencies: ["badge"],
    files: [
      {
        path: "blocks/newsletter/newsletter-02/newsletter-two.tsx",
        type: "registry:component",
        target:"components/shapexui/newsletter.tsx"
      },
      {
        path: "blocks/newsletter/newsletter-02/user-image.tsx",
        type: "registry:component",
        target:"components/shapexui/user-image.tsx"
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
        path: "blocks/newsletter/newsletter-03/newsletter-three.tsx",
        type: "registry:component",
        target:"components/shapexui/newsletter.tsx"
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
    registryDependencies: ["card","button","switch"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/pricing/pricing-01/pricing-one.tsx",
        type: "registry:component",
        target:"components/shapexui/pricing.tsx"
      },
      {
        path: "blocks/pricing/pricing-01/price-slider.tsx",
        type: "registry:component",
        target:"components/shapexui/price-slider.tsx"
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-02",
    description: "pricing block 2",
    type: "registry:block",
    registryDependencies: ["button","card"],
    files: [
      {
        path: "blocks/pricing/pricing-02/pricing-two.tsx",
        type: "registry:component",
        target:"components/shapexui/pricing.tsx"
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-03",
    description: "pricing block 3",
    type: "registry:block",
    registryDependencies: ["card","badge","button"],
    files: [
      {
        path: "blocks/pricing/pricing-03/pricing-three.tsx",
        type: "registry:component",
        target:"components/shapexui/pricing.tsx"
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
    registryDependencies: ["button","card"],
    files: [
      {
        path: "blocks/pricing/pricing-04/pricing-four.tsx",
        type: "registry:component",
        target:"components/shapexui/pricing.tsx"
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
    dependencies:["motion"],
    files: [
      {
        path: "blocks/rating/rating-01/rating-one.tsx",
        type: "registry:component",
        target:"components/shapexui/rating.tsx"
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
    registryDependencies: ["input","card","label","button"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/rating/rating-02/rating-two.tsx",
        type: "registry:component",
        target:"components/shapexui/rating.tsx"
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
    registryDependencies: ["avatar","button","progress","card","select","checkbox","textarea","label","input"],
    dependencies:["motion"],
    files: [
      {
        path: "blocks/rating/rating-03/rating-three.tsx",
        type: "registry:component",
        target:"components/shapexui/rating.tsx"
      },
      {
        path: "blocks/rating/rating-03/dialog-box.tsx",
        type: "registry:component",
        target:"components/shapexui/dialog-box.tsx"
      },
      {
        path: "blocks/rating/rating-03/write-review.tsx",
        type: "registry:component",
        target:"components/shapexui/write-review.tsx"
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
    registryDependencies: ["badge","card","progress"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/roadmap/roadmap-01/roadmap-one.tsx",
        type: "registry:component",
        target:"components/shapexui/roadmap.tsx"
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
    registryDependencies: ["badge","progress","card"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/roadmap/roadmap-02/roadmap-two.tsx",
        type: "registry:component",
        target:"components/shapexui/roadmap.tsx"
      },
    ],
    categories: ["roadmap"],
  },
  {
    name: "roadmap-03",
    description: "roadmap block 3",
    type: "registry:block",
    registryDependencies: ["checkbox"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/roadmap/roadmap-03/roadmap-three.tsx",
        type: "registry:component",
        target:"components/shapexui/roadmap.tsx"
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
    registryDependencies: ["card"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/stats/stats-01/stats-one.tsx",
        type: "registry:component",
        target:"components/shapexui/stats.tsx"
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
    registryDependencies: ["card","button"],
    files: [
      {
        path: "blocks/stats/stats-02/stats-two.tsx",
        type: "registry:component",
        target:"components/shapexui/stats.tsx"
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
    registryDependencies: ["button","card"],
    files: [
      {
        path: "blocks/stats/stats-03/stats-three.tsx",
        type: "registry:component",
        target:"components/shapexui/stats.tsx"
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
    registryDependencies: ["button","card","switch"],
    files: [
      {
        path: "blocks/steps/steps-01/steps-one.tsx",
        type: "registry:component",
        target:"components/shapexui/steps.tsx"
      },
    ],
    categories: ["steps"],
  },
  {
    name: "steps-02",
    description: "steps block 2",
    type: "registry:block",
    registryDependencies: ["button","card","input","select","label","textarea"],
    files: [
      {
        path: "blocks/steps/steps-02/steps-two.tsx",
        type: "registry:component",
        target:"components/shapexui/steps.tsx"
      },
    ],
    categories: ["steps"],
  },
  {
    name: "signup-01",
    description: "A simple Signup form.",
    type: "registry:block",
    registryDependencies: ["button","card","input","label"],
    files: [
      {
        path: "blocks/signup/signup-01/signup-one.tsx",
        type: "registry:component",
        target:"components/shapexui/signup.tsx"
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
        path: "blocks/signup/signup-02/signup-two.tsx",
        type: "registry:component",
        target:"components/shapexui/signup.tsx"
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
        path: "blocks/signup/signup-03/signup-three.tsx",
        type: "registry:component",
        target:"components/shapexui/signup.tsx"
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
        path: "blocks/signup/signup-04/signup-four.tsx",
        type: "registry:component",
        target:"components/shapexui/signup.tsx"
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
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/team/team-01/team-one.tsx",
        type: "registry:component",
        target:"components/shapexui/team.tsx"
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
        path: "blocks/team/team-02/team-two.tsx",
        type: "registry:component",
        target:"components/shapexui/team.tsx"
      },
      {
        path: "blocks/team/team-02/team-card.tsx",
        type: "registry:component",
        target:"components/shapexui/team-card.tsx"
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
        path: "blocks/team/team-03/team-three.tsx",
        type: "registry:component",
        target:"components/shapexui/team.tsx"
      },
      {
        path: "blocks/team/team-03/marquee.tsx",
        type: "registry:component",
        target:"components/shapexui/marquee.tsx"
      },
      {
        path: "blocks/team/team-03/tailwind.config.ts",
        type: "registry:component",
      },
    ],
    categories: ["teams"],
    meta:{
      iframeHeight:"640px"
    },
    tailwind:{
      config: {
          theme: {
            extend: {
              animation: {
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
              },
              keyframes: {
                marquee: {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                  from: { transform: "translateY(0)" },
                  to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
              },
          },
        }
      }
    }
  },
  {
    name: "testimonial-02",
    description: "testimonial block 1",
    type: "registry:block",
    registryDependencies: ["carousel"],
    dependencies:["embla-carousel-autoplay"],
    files: [
      {
        path: "blocks/testimonial/testimonial-02/testimonial-two.tsx",
        type: "registry:component",
        target:"components/shapexui/testimonial.tsx"
      },
      {
        path: "blocks/testimonial/testimonial-02/testimonial-card.tsx",
        type: "registry:component",
        target:"components/shapexui/testimonial-card.tsx"
      },
    ],
    categories: ["testimonial"],
    meta:{
      iframeHeight:"560px"
    }
  },
  {
    name: "testimonial-03",
    description: "testimonial block 3",
    type: "registry:block",
    registryDependencies: ["avatar","button","card"],
    dependencies:["framer-motion"],
    files: [
      {
        path: "blocks/testimonial/testimonial-03/testimonial-three.tsx",
        type: "registry:component",
        target:"components/shapexui/testimonial.tsx"
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
        path: "blocks/e-commerce/components/Ecommerce.tsx",
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
  },
  {
    name: "file-management",
    description: "file-management page",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/file-management/page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/file-management/components/file-manager.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/file-management/components/file-table.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/file-management/hook/useFileManager.ts",
        type: "registry:hook",
      },
      {
        path: "blocks/file-management/types/types.ts",
        type: "registry:lib",
      }
    ],
    categories: ["file-manager"],
    meta:{
      iframeHeight:"700px"
    } 
  }
];
