import { Registry } from "@/registry/schema";

export const blocks: Registry = [
  {
    name: "article-01",
    description: "The Article Section for content presentation.",
    type: "registry:block",
    registryDependencies: ["card", "badge", "separator", "scroll-area"],
    files: [
      {
        path: "blocks/article-01/page.tsx",
        target: "app/article/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/article-01/components/article-one.tsx",
        type: "registry:component",
      },
    ],
    categories: ["article"],
  },
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
  },
  {
    name: "contact-01",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button", "textarea", "input", "label"],
    files: [
      {
        path: "blocks/contact-01/page.tsx",
        target: "app/login/page.tsx",
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
        target: "app/login/page.tsx",
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
  },
  {
    name: "cta-02",
    description: "A simple Contact Form.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta-02/page.tsx",
        target: "app/login/page.tsx",
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
  },
  {
    name: "cta-03",
    description: "A simple CTA.",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta-03/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/cta-03/components/cta-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
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
  },
  {
    name: "faq-02",
    description: "A FAQs.",
    type: "registry:block",
    registryDependencies: ["badge", "input", "accordion"],
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
  },
  {
    name: "faq-03",
    description: "A FAQs.",
    type: "registry:block",
    registryDependencies: ["badge", "input", "accordion"],
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
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-02/components/signup-two.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
  },
  {
    name: "signup-03",
    description: "A Signup form with Step",
    type: "registry:block",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/signup-03/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-03/components/signup-three.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
  },
  {
    name: "signup-04",
    description: "A Signup form",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "checkbox"],
    files: [
      {
        path: "blocks/signup-04/page.tsx",
        target: "app/signup/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/signup-04/components/signup-four.tsx",
        type: "registry:component",
      },
    ],
    categories: ["signup"],
  },
];
