import { SectionHub, hubMetadata } from "@/components/pages/SectionHub";

export const metadata = hubMetadata("troubleshooting");

export default function Page() {
  return <SectionHub section="troubleshooting" />;
}
