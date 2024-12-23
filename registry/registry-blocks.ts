import { Registry } from "@/registry/schema";

export const blocks: Registry = [
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
];
