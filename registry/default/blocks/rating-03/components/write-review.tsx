"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContainer,
  DialogContent,
} from "./dialog-box";

interface ReviewFormData {
  rating: number;
  title: string;
  recommend: "Yes" | "No";
  review: string;
  nickname: string;
  email: string;
  acceptTerms: boolean;
}

const ReviewForm = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    title: "",
    recommend: "Yes",
    review: "",
    nickname: "",
    email: "",
    acceptTerms: false,
  });

  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Dialog
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
        }}
      >
        <DialogTrigger
          style={{ borderRadius: "4px" }}
          className="border bg-white text-black border-gray-200/60 h-10 px-5 text-center flex justify-center items-center"
        >
          Write Review
        </DialogTrigger>
        <DialogContainer>
          <DialogContent>
            <Card className="w-full max-w-xl mx-auto">
              <CardContent className="pt-3">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Overall rating</h2>
                    <div className="flex justify-center gap-5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          className="text-2xl focus-visible:ring-offset-0"
                        >
                          <span
                            className={`text-2xl ${formData.rating >= star ? "text-teal-500 " : "text-gray-300"}`}
                          >
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Review title</Label>
                    <Input
                      id="title"
                      placeholder="Example: Easy to use"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review">Product review</Label>
                    <Textarea
                      id="review"
                      placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
                      value={formData.review}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          review: e.target.value,
                        }))
                      }
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nickname">Nickname</Label>
                      <Input
                        id="nickname"
                        placeholder="Example: bob27"
                        value={formData.nickname}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            nickname: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Example: your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          acceptTerms: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I accept the terms and conditions
                    </Label>
                  </div>

                  <p className="text-sm text-gray-500">
                    You will be able to receive emails in connection with this
                    review (eg if others comment on your review). All emails
                    contain the option to unsubscribe. We can use the text and
                    star rating from your review in other marketing.
                  </p>

                  <Button
                    type="submit"
                    variant={"secondary"}
                    className="w-full"
                  >
                    Submit product review
                  </Button>
                </form>
              </CardContent>
            </Card>
            <DialogClose className="text-zinc-500" />
          </DialogContent>
        </DialogContainer>
      </Dialog>
    </>
  );
};

export default ReviewForm;
