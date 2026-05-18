import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("history");

export default function Page() {
  return <SectionHub section="history" />;
}
