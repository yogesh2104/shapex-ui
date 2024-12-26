import PricingThree from "@/registry/default/blocks/pricing-03/components/pricing-three"

export default function Page(){
    const plans=[
        {
          name: "Free",
          price: 0,
          description: "Great for trying out 10 days free.",
          buttonText: "Download for Free",
          popular: false,
          features: ["Free Trial","Automatic Album Designing", "Image Editing With Live Ready To Use Content","Millions of Designing"],
        },
        {
          name: "Professional",
          price: 199,
          description: "Best for Design And Ready to use",
          buttonText: "Buy Now",
          popular: true,
          features: ["12 Month Subscription","Automatic Album Designing", "Image Editing With Live Ready To Use Content","Millions of Designing"],
        },
        {
          name: "Enterprise",
          price: 2999,
          description: "Best for large album",
          buttonText: "Buy Now",
          popular: false,
          features: ["36 Month Subscription","Automatic Album Designing", "Image Editing With Live Ready To Use Content","Millions of Designing"],
        },
      ]

    return(
        <PricingThree plans={plans}/>
    )
}

