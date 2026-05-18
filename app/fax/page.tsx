import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("fax");

export default function Page() {
  return <SectionHub section="fax" />;
}
