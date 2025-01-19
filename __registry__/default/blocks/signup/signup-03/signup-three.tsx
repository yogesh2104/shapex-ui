"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

const INITIAL_FORM_STATE: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const validationRules: Record<keyof FormData, ValidationRule[]> = {
  firstName: [
    {
      test: (value) => value.trim().length > 0,
      message: "First name is required",
    },
  ],
  lastName: [
    {
      test: (value) => value.trim().length > 0,
      message: "Last name is required",
    },
  ],
  email: [
    {
      test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Valid email is required",
    },
  ],
  password: [
    {
      test: (value) => value.length >= 8,
      message: "Password must be at least 8 characters",
    },
  ],
  passwordConfirm: [
    {
      test: (value) => value.length >= 8,
      message: "Password confirmation must be at least 8 characters",
    },
  ],
};

const SignupThree: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (
    field: keyof FormData,
    value: string,
  ): string | undefined => {
    const rules = validationRules[field];
    for (const rule of rules) {
      if (!rule.test(value)) {
        return rule.message;
      }
    }

    if (field === "passwordConfirm" && value !== formData.password) {
      return "Passwords do not match";
    }

    return undefined;
  };

  const handleInput = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  const validateStep1 = (): void => {
    const newErrors: FormErrors = {};
    let hasErrors = false;

    (["firstName", "lastName", "email"] as const).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    if (!hasErrors) {
      setStep(2);
    }
  };

  const validateStep2 = (): void => {
    const newErrors: FormErrors = {};
    let hasErrors = false;

    (["password", "passwordConfirm"] as const).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    if (!hasErrors) {
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    console.log("Form submitted:", formData);
  };

  const renderInput = (
    field: keyof FormData,
    label: string,
    type: string = "text",
    placeholder: string = "",
  ) => (
    <div>
      <Label htmlFor={field}>{label}</Label>
      <div className={type === "password" ? "relative" : undefined}>
        <Input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={field}
          value={formData[field]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInput(field, e.target.value)
          }
          className={`mt-1 ${errors[field] ? "border-red-500 focus:ring-red-200" : ""} ${
            type === "password" ? "pr-10" : ""
          }`}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        )}
      </div>
      {errors[field] && (
        <p className="mt-1 text-sm text-red-500">{errors[field]}</p>
      )}
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative hidden lg:block lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="absolute inset-0 bg-slate-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
              <div className="max-w-xl space-y-8">
                <h2 className="text-3xl font-bold">Join our community</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" />
                    <p>30-day free trial, no credit card required</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" />
                    <p>Join 10,000+ happy users</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" />
                    <p>24/7 support team at your service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl w-full">
            <div className="relative">
              <div className="absolute left-0 top-2 w-full">
                <div className="h-1 bg-slate-200 rounded">
                  <div
                    className="h-1 bg-blue-600 rounded transition-all duration-300"
                    style={{ width: step === 1 ? "50%" : "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-2xl font-bold text-slate-900">
                {step === 1 ? "Create your account" : "Set your password"}
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                {step === 1
                  ? "Start your 30-day free trial today"
                  : "Choose a secure password to protect your account"}
              </p>
            </div>

            {step === 1 ? (
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {renderInput("firstName", "First Name", "text", "John")}
                  {renderInput("lastName", "Last Name", "text", "Doe")}
                </div>
                {renderInput("email", "Email", "email", "john@example.com")}
                <Button
                  onClick={validateStep1}
                  className="w-full flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            ) : (
              <div className="mt-6 space-y-6">
                {renderInput("password", "Password", "password")}
                {renderInput("passwordConfirm", "Confirm Password", "password")}

                <div className="flex items-center gap-2">
                  <AlertCircle className="size-4 text-slate-400" />
                  <p className="text-sm text-slate-600">
                    Password must be at least 8 characters
                  </p>
                </div>

                <Button onClick={validateStep2} className="w-full">
                  Create account
                </Button>

                <Button
                  type="button"
                  variant={"ghost"}
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-slate-600 hover:text-slate-900"
                >
                  Back to previous step
                </Button>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                Log in
              </Link>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignupThree;
