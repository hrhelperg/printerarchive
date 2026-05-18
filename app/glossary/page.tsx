import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("glossary");

export default function Page() {
  return <SectionHub section="glossary" />;
}
