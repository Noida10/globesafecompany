import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/data/products";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found - Globe Safe Company",
      description: "The product you're looking for could not be found.",
    };
  }

  return {
    title: `${product.name} - Globe Safe Company`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Globe Safe Company`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}