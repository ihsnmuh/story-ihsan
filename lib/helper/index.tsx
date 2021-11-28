type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://res.cloudinary.com/doc4dinqa/image/upload/v1638073877/ihsan/Logo_ofhphz.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.thcl.dev/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

// https://og.thcl.dev/api/general?description=ini%20adalah%20personal%20Web%20Iihsan&logo=https%3A%2F%2Fiili.io%2F5Pjiga.jpg&logoWidth=150&siteName=Personal%20Web%20Muhammad%20Ihsan&templateTitle=Personal%20Web%20Ihsan&theme=light
