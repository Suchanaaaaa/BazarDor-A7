import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { getProducts, type Product } from "@/lib/data";
import { bn, bnDate } from "@/lib/format";

export const dynamic = "force-dynamic";

const selectPriceMovers = (items: Product[], direction: "up" | "down") => {
  const isMatch = direction === "up" ? (item: Product) => item.change > 0 : (item: Product) => item.change < 0;
  const byLargestMove = (a: Product, b: Product) =>
    direction === "up" ? b.change - a.change : a.change - b.change;

  return items.filter(isMatch).sort(byLargestMove).slice(0, 6);
};

function ProductSection({
  title,
  products,
  marker,
}: {
  title: string;
  products: Product[];
  marker?: string;
}) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
        {marker && <span className="text-sm" aria-hidden="true">{marker}</span>}
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => <ProductCard key={product.id} p={product} />)}
      </div>
    </section>
  );
}

export default async function HomePage() {
  const products = await getProducts();
  const risingProducts = selectPriceMovers(products, "up");
  const fallingProducts = selectPriceMovers(products, "down");

  return (
    <div className="container-6xl space-y-10 py-6">
      <section className="card grid items-center gap-6 p-5 sm:p-8 md:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-primary" suppressHydrationWarning>
            {bnDate()}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">আজকের বাজারের দাম এক নজরে</h1>
          <p className="mt-4 max-w-xl text-sm text-ink/70 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a href="#সব-পণ্য" className="btn-primary mt-6 inline-block px-5 py-2.5 text-sm">সব পণ্য দেখুন</a>
        </div>
        <Image src="/bazar-hero.png" alt="সবজির ঝুড়ি" width={315} height={263} priority className="mx-auto h-auto w-56 md:w-80" />
      </section>

      <ProductSection title="আজ দাম বেড়েছে" marker="▲" products={risingProducts} />
      <ProductSection title="আজ দাম কমেছে" marker="▼" products={fallingProducts} />

      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        <p className="mb-4 text-sm text-ink/60">মোট {bn(products.length)}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} p={product} />)}
        </div>
      </section>
    </div>
  );
}
