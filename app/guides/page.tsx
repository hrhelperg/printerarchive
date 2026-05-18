import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("guides");

export default function Page() {
  return <SectionHub section="guides" />;
}
