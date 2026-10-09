import Link from "next/link";
import type { Product } from "@/lib/data";
import { bnPrice } from "@/lib/format";
import ChangeBadge from "./ChangeBadge";

type ProductCardProps = { p: Product };

export default function ProductCard({ p: product }: ProductCardProps) {
  const detailsHref = `/product/${product.id}`;

  return (
    <Link
      href={detailsHref}
      className="card block p-4 transition hover:border-primary/50 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-base-200 text-2xl" aria-hidden="true">
          {product.emoji}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold leading-tight">{product.name}</h3>
          <p className="text-xs text-ink/60">{product.unit}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xs text-ink/70">আজকের দাম</p>
        <div className="flex items-center justify-between gap-2">
          <p>
            <span className="text-lg font-bold">{bnPrice(product.price)}</span>{" "}
            <span className="text-sm">টাকা</span>
          </p>
          <ChangeBadge change={product.change} />
        </div>
      </div>
    </Link>
  );
}
