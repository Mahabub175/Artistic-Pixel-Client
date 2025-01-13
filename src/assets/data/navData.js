export const menuItems = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "services",
    label: "Services",
    children: [
      {
        key: "Digital_Marketing",
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        key: "Graphic_Designing",
        label: "Graphic Designing",
        href: "/services/graphic-designing",
      },
      {
        key: "web_development",
        label: "Web Development",
        href: "/services/web-development",
      },
      {
        key: "Video_Editing",
        label: "Video Editing",
        href: "/services/video-editing",
      },
    ],
  },
  { key: "about_us", label: "About Us", href: "/about" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "our_team", label: "Team", href: "/team" },
  { key: "contact", label: "Contact", href: "/contact" },
];
