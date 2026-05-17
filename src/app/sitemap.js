export default function sitemap() {
  const baseUrl = 'https://juanignacio.tech';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mis-proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ta-te-ti`,
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.5,
    },
  ];
}
