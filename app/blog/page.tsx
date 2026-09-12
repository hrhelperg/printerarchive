import { BlogHub, blogHubMetadata } from "@/components/pages/BlogHub";

export const metadata = blogHubMetadata();

export default function Page() {
  return <BlogHub />;
}
