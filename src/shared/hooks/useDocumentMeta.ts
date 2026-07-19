import { useEffect } from "react";
import { getSiteUrl, site } from "../../config/site";

interface DocumentMeta {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  type?: "profile" | "website" | "article";
  structuredData?: object;
}

const updateMetaTag = (attribute: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
};

export function useDocumentMeta({
  title,
  description,
  path = "",
  noIndex = false,
  type = "website",
  structuredData,
}: DocumentMeta) {
  useEffect(() => {
    const canonicalUrl = getSiteUrl(path);
    const socialImageUrl = getSiteUrl(site.socialImagePath);
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.append(canonicalLink);
    }

    document.title = title;
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:site_name", site.name);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "og:image", socialImageUrl);
    updateMetaTag("property", "og:image:alt", "Arquitectura de software y desarrollo Full Stack");
    updateMetaTag("property", "og:image:width", "1200");
    updateMetaTag("property", "og:image:height", "630");
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", socialImageUrl);

    if (structuredData) {
      let script = document.querySelector<HTMLScriptElement>("#structured-data");

      if (!script) {
        script = document.createElement("script");
        script.id = "structured-data";
        script.type = "application/ld+json";
        document.head.append(script);
      }

      script.textContent = JSON.stringify(structuredData);
    }

    canonicalLink.href = canonicalUrl;
  }, [description, noIndex, path, structuredData, title, type]);
}
