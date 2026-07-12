import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("models");

export default function Page() {
  return <SectionHub section="models" />;
}
