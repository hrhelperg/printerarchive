import { CURRENT_PRODUCT_ID } from "@/lib/ecosystem/product-registry";
import { EcosystemMark } from "./EcosystemMarks";
import { EcosystemTimeline } from "./EcosystemTimeline";
import { EcosystemDirectory } from "./EcosystemDirectory";
import { EcosystemPanel } from "./EcosystemPanel";
import { ActiveTimelineItem } from "./ActiveTimelineItem";

/**
 * Global HELPERG ecosystem banner, mounted once in the root layout above the
 * PrinterArchive header.
 *
 * Server Component. The identity block, the full timeline, and the entire
 * directory are rendered on the server; the only client code is the panel
 * shell (open/close/focus) and a no-output island that scrolls the current
 * timeline item into view.
 *
 * Height is owned by the --ecosystem-banner-height custom property in
 * globals.css, which is also what the sticky header offsets against — the
 * offset is never duplicated as a literal number.
 */
export function EcosystemBanner() {
  return (
    <div className="eco-banner">
      <div className="eco-banner-inner">
        <p className="eco-identity">
          <EcosystemMark className="eco-identity-mark" />
          <span className="eco-identity-text">
            <span className="eco-identity-name">
              HELPERG<span className="eco-identity-word"> Ecosystem</span>
            </span>
            <span className="eco-identity-sub">
              Independent products and knowledge platforms
            </span>
          </span>
        </p>

        <EcosystemTimeline currentId={CURRENT_PRODUCT_ID} />

        <EcosystemPanel>
          <EcosystemDirectory currentId={CURRENT_PRODUCT_ID} />
        </EcosystemPanel>
      </div>
      <ActiveTimelineItem />
    </div>
  );
}
