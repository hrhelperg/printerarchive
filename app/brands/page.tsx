import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("brands");

export default function Page() {
  return <SectionHub section="brands" />;
}
