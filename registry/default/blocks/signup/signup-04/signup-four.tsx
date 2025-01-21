import Link from "next/link";
import { HeartHandshake } from "lucide-react";

import { Button } from "@/registry/default/ui/button";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import Logo from "@/components/logo";   // remove with your logo

const Signup = () => {
  return (
    <section className="bg-card">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src="https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link className="block text-blue-600" href="#">
            {/* reomve this logo with your logo */}
              <Logo/> 
            </Link>

            <h1 className="mt-6 text-2xl flex items-center gap-4 font-bold sm:text-3xl md:text-4xl">
              Welcome <HeartHandshake className="size-6" />
            </h1>

            <p className="mt-4 leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              quae maiores fuga culpa? Cum id odio reprehenderit hic veniam
              sapiente a, maiores fuga nemo, vero assumenda asperiores commodi
              perspiciatis debitis?
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="FirstName"> First Name </Label>
                <Input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="LastName">Last Name</Label>
                <Input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label htmlFor="Email"> Email </Label>
                <Input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="Password"> Password </Label>
                <Input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Label htmlFor="passConf">Password Confirmation</Label>
                <Input
                  type="password"
                  id="passConf"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <Label htmlFor="subscrib" className="flex gap-4">
                  <Checkbox
                    id="subscrib"
                    name="subscribe-our-newsletter"
                    className="size-5 text-blue-600 shadow-sm rounded-sm"
                  />
                  <span className="text-sm">Subscribe Our Newsletter</span>
                </Label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <Link href="#" className="underline">
                    {" "}
                    terms and conditions{" "}
                  </Link>
                  and{" "}
                  <Link href="#" className="underline">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div className="col-span-6 flex flex-col md:flex-row items-center justify-center md:justify-start sm:gap-4">
                <Button className="px-10"> Create an account </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link href="#" className="underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
