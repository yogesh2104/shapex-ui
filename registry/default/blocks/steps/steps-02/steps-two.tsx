"use client";

import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Label } from "@/registry/default/ui/label";
import { Calendar } from "lucide-react";
import { Textarea } from "@/registry/default/ui/textarea";
import { Card, CardContent } from "@/registry/default/ui/card";
import { cn } from "@/lib/utils";

function GeneralDetailsStep() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name*</Label>
          <Input id="firstName" placeholder="Enter First Name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter your Last Name" />
        </div>

        <div className="space-y-2">
          <Label>Gender*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth*</Label>
          <div className="relative">
            <Input
              id="dob"
              placeholder="Enter your Date of Birth"
              className="pr-10"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <p className="text-xs text-red-500">Please enter date of birth</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentFirstName">
            Mother/Father&apos;s First Name*
          </Label>
          <Input id="parentFirstName" placeholder="Enter First Name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentLastName">Last Name</Label>
          <Input id="parentLastName" placeholder="Enter Last Name" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address*</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your Email Address"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="pinCode">Pin Code*</Label>
            <Input id="pinCode" placeholder="Enter your area's Pin Code" />
          </div>

          <div className="space-y-2">
            <Label>Country*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Time Zone*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="IST - Indian Standard Time - GMT +5:30" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ist">
                  IST - Indian Standard Time - GMT +5:30
                </SelectItem>
                <SelectItem value="pst">
                  PST - Pacific Standard Time - GMT -8:00
                </SelectItem>
                <SelectItem value="est">
                  EST - Eastern Standard Time - GMT -5:00
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (include country code)*</Label>
            <Input id="phone" placeholder="+919876543210" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EventDetailsStep() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eventName">Event Name*</Label>
          <Input id="eventName" placeholder="Enter event name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date*</Label>
          <div className="relative">
            <Input
              id="eventDate"
              placeholder="Select event date"
              className="pr-10"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="eventDescription">Event Description*</Label>
        <Textarea
          id="eventDescription"
          placeholder="Enter event description"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

function PricingStep() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold">Basic Plan</div>
              <div className="text-4xl font-bold">$99</div>
              <div className="text-muted-foreground">
                Perfect for small events
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="text-2xl font-bold">Premium Plan</div>
              <div className="text-4xl font-bold">$199</div>
              <div className="text-muted-foreground">Best for large events</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  active = false,
}: {
  number: number;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          active ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {number}
      </div>
      <span
        className={cn("hidden md:block text-md",active ? "font-medium text-indigo-600" : "text-gray-500")}
      >
        {title}
      </span>
    </div>
  );
}

const StepsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex items-center justify-center border rounded-2xl p-4 mx-10 my-6">
      <div className="mx-auto w-full md:max-w-4xl space-y-3">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Let&apos;s get you started</h1>
          <p className="text-muted-foreground">
            Enter the details to get going
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Step number={1} title="General Details" active={currentStep === 1} />
          <div className="h-px w-16 bg-gray-200" />
          <Step number={2} title="Event Details" active={currentStep === 2} />
          <div className="h-px w-16 bg-gray-200" />
          <Step
            number={3}
            title="Pricing and Submit"
            active={currentStep === 3}
          />
        </div>

        <div className="space-y-6">
          {currentStep === 1 && <GeneralDetailsStep />}
          {currentStep === 2 && <EventDetailsStep />}
          {currentStep === 3 && <PricingStep />}

          <div className="flex justify-center gap-4 pt-6">
            {currentStep > 1 && (
              <Button
                variant="outline"
                className="w-32"
                onClick={() => setCurrentStep((step) => step - 1)}
              >
                Previous
              </Button>
            )}
            {currentStep < 3 ? (
              <Button
                className="w-32 bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => setCurrentStep((step) => step + 1)}
              >
                Next
              </Button>
            ) : (
              <Button className="w-32 bg-green-600 hover:bg-green-700">
                Submit
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsForm;
