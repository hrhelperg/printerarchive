export type ProductId = "zip-rar" | "smart-printer" | "fax-app" | "pdf-editor";

export interface ProductLink {
  label: string;
  href: string;
}

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  /** Optional square app icon under public/images/products/. */
  icon?: string;
  links: ProductLink[];
}

export const PRODUCTS: Record<ProductId, Product> = {
  "zip-rar": {
    id: "zip-rar",
    name: "ZIP & RAR",
    tagline:
      "Open, create, and extract ZIP and RAR archives on a phone or tablet.",
    icon: "/images/products/zip-rar.jpg",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.ziparchivator.zip",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6753772583" },
    ],
  },
  "smart-printer": {
    id: "smart-printer",
    name: "Smart Printer",
    tagline:
      "Print documents and photos from a phone or tablet to a connected printer.",
    icon: "/images/products/smart-printer.jpg",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.helperg.smart.printer",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6746067890" },
    ],
  },
  "fax-app": {
    id: "fax-app",
    name: "Fax App",
    tagline: "Send a document as a fax from a phone, without a fax machine.",
    icon: "/images/products/fax-app.jpg",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.helperg.fax.app",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6760895885" },
    ],
  },
  "pdf-editor": {
    id: "pdf-editor",
    name: "PDF Editor & Convert",
    tagline: "Edit, convert, and combine PDF documents in a web browser.",
    icon: "/images/products/pdf-editor.jpg",
    links: [
      { label: "Open on the web", href: "https://www.pdfeditconvert.top" },
    ],
  },
};
