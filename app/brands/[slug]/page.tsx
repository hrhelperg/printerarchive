import { ArticlePage, articleMetadata } from "@/components/pages/ArticlePage";
import { getSection } from "@/lib/content/queries";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSection("brands").map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then((p) => articleMetadata("brands", p.slug));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticlePage section="brands" slug={slug} />;
}
