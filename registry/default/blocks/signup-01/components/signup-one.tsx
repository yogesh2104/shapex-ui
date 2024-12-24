import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, UserRound } from "lucide-react";
import { Label } from "@/registry/default/ui/label";    // npx shadcn@latest add label
import { Input } from "@/registry/default/ui/input";    // npx shadcn@latest add input
import { Button } from "@/registry/default/ui/button";    // npx shadcn@latest add button
import { Card, CardContent } from "@/registry/default/ui/card";   // npx shadcn@latest add card

const SignUpOne = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative hidden lg:flex items-center justify-center ">
          <div className="absolute inset-0 bg-black/20" />
          <Image
            src="/placeholder.svg"
            alt="People collaborating"
            fill
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 p-12  max-w-lg">
            <h1 className="text-5xl font-bold mb-6 dark:text-black">
              Start your journey with us
            </h1>
            <p className="text-lg dark:text-black">
              Join thousands of users who trust our platform for their daily
              needs. Experience the difference today.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12">
          <Card className="w-full max-w-md p-6 shadow-xl rounded-md border-0">
            <CardContent className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Create Account</h2>
                <p className="mt-3">
                  Already have an account?{" "}
                  <Link
                    href="#"
                    className="text-primary hover:text-primary font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Full Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 h-11 focus:outline-none rounded-md focus:ring-0 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Email</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 h-11 focus:outline-none focus:ring-0 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Password</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <Lock className="h-5 w-5" />
                    </div>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-11 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <Button className="w-full h-11">Create Account</Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm ">
                  <span className="px-2 bg-white dark:text-black rounded-md">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-11 hover:bg-gray-50">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-11 hover:bg-gray-50">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="currentColor"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>

              <p className="text-xs text-center mt-8">
                By creating an account, you agree to our{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUpOne;
