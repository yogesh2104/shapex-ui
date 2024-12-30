import Link from "next/link";

export default async function BlocksPage() {
  return (
<div className=" p-8">
  <main className="max-w-6xl space-y-12">
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Introduction</h1>
      <p className="text-md ">
      ShapeX-UI is a collection of reusable blocks designed to simplify the development of web applications. It includes customizable, efficient, and user-friendly blocks, and templates(coming soon) that enhance productivity and design quality.
      </p>
    </div>

    <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Philosophy</h2>
      
      <p className="leading-relaxed">
      At ShapeX-UI, we believe exceptional design is not just an aesthetic choice but a strategic foundation for building trust and delivering value. In today&apos;s digital-first world, trust is the bridge that connects businesses with users—transforming first impressions into lasting relationships. For users, design is often the first indicator of a brand&apos;s professionalism, reliability, and attention to detail.
      </p>

      <p className="leading-relaxed ">
      Conversely, great design speaks volumes. It reflects a team&apos;s dedication to quality, reassuring users that every detail has been thoughtfully considered. This level of care conveys that the team not only values the finer points of design but also prioritizes essential aspects like functionality, reliability, and customer satisfaction.
      </p>

      <p className="leading-relaxed">
      ShapeX-UI embodies this principle by offering over 50 pre-designed blocks across 20 categories. Built on top of ShadCN UI and Framer Motion, these blocks combine aesthetics, functionality, and ease of use. Our mission is to empower developers with robust, reusable components that elevate user experiences and bring their projects to life with minimal effort.
      </p>

      <p className="leading-relaxed">
      This library is heavily inspired by <Link target="_blank" href="https://ui.shadcn.com" >https://ui.shadcn.com.</Link>
      </p>



    </section>
  </main>
</div>
  )
}
