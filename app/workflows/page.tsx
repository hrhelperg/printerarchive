import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("workflows");

export default function Page() {
  return <SectionHub section="workflows" />;
}
