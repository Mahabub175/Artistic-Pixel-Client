export const menuItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about_us", label: "About Us", href: "/about-us" },
  {
    key: "services",
    label: "Services",
    children: [
      {
        key: "erp_solution",
        label: "ERP Solution",
        href: "/services/erp-solution",
      },
      {
        key: "management_software",
        label: "Management Software",
        href: "/services/management-software",
      },
      {
        key: "web_development",
        label: "Web Development",
        href: "/services/web-development",
      },
      {
        key: "app_development",
        label: "App Development",
        href: "/services/app-development",
      },
    ],
  },
  { key: "our_team", label: "Our Team", href: "/our-team" },
  { key: "products", label: "Products", href: "/products" },
  { key: "career", label: "Career", href: "/career" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "contact", label: "Contact", href: "/contact" },
];
