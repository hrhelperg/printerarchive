import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("tools");

export default function Page() {
  return <SectionHub section="tools" />;
}
