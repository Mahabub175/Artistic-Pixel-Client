"use client";

import { menuItems } from "@/assets/data/navData";
import { Drawer, Menu, Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { sendGTMEvent } from "@next/third-parties/google";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowNavbar(false);
      } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 100) {
        setShowNavbar(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  const [current, setCurrent] = useState("home");

  const handleItemClick = (key) => {
    setCurrent(key);
    closeDrawer();
    sendGTMEvent("item_click", "menuItemClicked", { value: key });
  };

  const renderMenuItems = (items) => {
    return items?.map((item) => {
      const isActive = pathname === item?.href;

      if (item?.children) {
        const content = (
          <Menu mode="vertical" style={{ border: "none" }}>
            {item?.children?.map((subItem) => {
              return (
                <Menu.Item key={subItem?.key}>
                  <Link
                    href={subItem?.href}
                    className="flex items-center gap-4"
                    onClick={() => handleItemClick(subItem?.key)}
                  >
                    <span
                      className={`block font-bold text-black hover:text-primary duration-300`}
                    >
                      {subItem?.label}
                    </span>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        );

        return (
          <Popover key={item?.key} content={content} trigger="hover">
            <span
              className={`text-base cursor-pointer flex items-center gap-2 justify-center font-bold duration-200 ${
                isActive ? "text-primary " : "text-black hover:text-primary"
              }`}
            >
              <div>{item?.label}</div>
              <FaChevronDown className="size-4" />
            </span>
          </Popover>
        );
      }

      return (
        <Link
          key={item?.key}
          href={item?.href}
          onClick={() => handleItemClick(item?.key)}
        >
          <span
            className={`text-base font-bold mx-2 duration-200 ${
              isActive ? "text-primary" : "text-black hover:text-primary"
            }`}
          >
            {item?.label}
          </span>
        </Link>
      );
    });
  };

  const onClick = (e) => {
    setCurrent(e.key);

    sendGTMEvent("item_click", "menuItemClicked", { value: e.key });

    const selectedItem =
      menuItems.find((item) => item.key === e.key) ||
      menuItems
        .flatMap((item) => item.children || [])
        .find((subItem) => subItem.key === e.key);

    if (selectedItem && selectedItem.href) {
      router.push(selectedItem.href);
      closeDrawer();
    }
  };

  return (
    <nav
      className={`bg-white shadow-md z-50 fixed w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center gap-4 py-3 lg:py-4">
        <Link href="/" className="w-auto hidden lg:block">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            onClick={() => {
              setCurrent("home");
            }}
            className="-ml-5"
          />
        </Link>
        <Link href="/" className="w-auto lg:hidden">
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={80}
            onClick={() => {
              setCurrent("home");
            }}
          />
        </Link>
        <div className="lg:hidden mr-4">
          <FaBars onClick={showDrawer} className="text-2xl cursor-pointer" />
        </div>
        <div className="desktopMenu hidden lg:flex lg:flex-wrap gap-4 w-full  justify-center items-center">
          {renderMenuItems(menuItems)}
        </div>
        <div className=" hidden lg:block">
          <Link href={"/lets-talk"}>
            <button className="bg-primary text-white w-36 font-bold px-4 py-2 rounded-full hover-fade border-2 border-primary">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={visible}
      >
        <div className="flex justify-between items-center">
          <Link href="/" onClick={closeDrawer}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <IoClose onClick={closeDrawer} className="text-2xl cursor-pointer" />
        </div>
        <div className="my-6">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={menuItems}
            style={{
              borderRight: "none",
              fontWeight: "bold",
            }}
          />
        </div>
        <Link href={"/lets-talk"} onClick={closeDrawer}>
          <button className="bg-primary text-white font-bold px-16 py-3 rounded-xl border-2 border-primary hover-fade w-full">
            Get Started
          </button>
        </Link>
      </Drawer>
    </nav>
  );
};

export default Navbar;
