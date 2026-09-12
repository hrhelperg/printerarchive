import {
  BlogArticlePage,
  blogArticleMetadata,
} from "@/components/pages/BlogArticlePage";
import { getPosts } from "@/lib/blog/queries";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then((p) => blogArticleMetadata(p.slug));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogArticlePage slug={slug} />;
}
