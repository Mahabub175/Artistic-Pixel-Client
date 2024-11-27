const MetaHead = ({ title, shareUrl, image }) => {
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Check out this amazing content!"
      />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Photohouse Magazine" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Check out this amazing content!"
      />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={shareUrl} />
    </>
  );
};

export default MetaHead;
