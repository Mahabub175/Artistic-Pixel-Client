"use client";

import { menuItems } from "@/assets/data/navData";
import logo from "@/assets/images/logo.png";
import { Avatar, Button, Drawer, Dropdown, Menu, Popover } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentUser } from "@/redux/services/auth/authSlice";
import { UserOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import scrollToTop from "@/utilities/lib/scrollToTop";
import { useGetSingleUserQuery } from "@/redux/services/auth/authApi";

const Navbar = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector(useCurrentUser);
  const { data } = useGetSingleUserQuery(user?._id);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const content = (
    <div>
      <div className="rounded-md px-16 py-3">
        <div className="flex flex-col items-center gap-4 text-lg">
          {data?.profile_image ? (
            <Image
              src={data?.profile_image}
              alt="profile"
              height={40}
              width={40}
              className="rounded-full w-[60px] h-[60px] border-2 !border-primary"
            />
          ) : (
            <Avatar size={40} icon={<UserOutlined />} />
          )}
          <div className="flex flex-col text-center font-normal">
            <span className="font-bold text-2xl">
              {data?.username ?? "User"}
            </span>

            <span className={`text-base`}>{data?.email}</span>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end pt-3">
        <Button
          onClick={handleLogout}
          className={`w-full`}
          size="large"
          type="default"
        >
          Log Out
        </Button>
      </div>
    </div>
  );

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
  };

  const renderMenuItems = (items) => {
    return items?.map((item) => {
      const isActive = pathname === item?.href;

      if (item?.children) {
        const menuItems = (
          <Menu
            style={{
              backgroundColor: "black",
            }}
            className="w-36 h-28 border border-textColor shadow-lg"
          >
            {item?.children?.map((subItem) => (
              <Menu.Item key={subItem?.key}>
                <Link
                  href={subItem?.href ?? "/"}
                  target={subItem?.to ? "_blank" : "_self"}
                  rel={subItem?.to ? "noopener noreferrer" : ""}
                  onClick={() => handleItemClick(subItem?.key)}
                  className="flex flex-col items-center justify-center border-b-2 border-transparent hover:border-white w-20 mx-auto"
                >
                  <span className="block font-bold text-white text-base first:mt-2">
                    {subItem?.label}
                  </span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        );

        return (
          <Dropdown
            key={item?.key}
            overlay={menuItems}
            trigger={["hover"]}
            placement={"bottomCenter"}
          >
            <span
              className={`text-base cursor-pointer flex items-center gap-2 justify-center font-bold duration-200 border-b-2 ${
                isActive
                  ? "border-primary text-primary"
                  : "border-transparent text-white hover:border-primary hover:text-primary"
              }`}
            >
              <div>{item?.label}</div>
              <FaChevronDown className="size-3" />
            </span>
          </Dropdown>
        );
      }

      return (
        <Link
          key={item?.key}
          href={item?.href}
          target={item?.to ? "_blank" : "_self"}
          rel={item?.to ? "noopener noreferrer" : ""}
          onClick={() => handleItemClick(item?.key)}
        >
          <span
            className={`text-base font-semibold mx-2 duration-200 border-b-2 ${
              isActive
                ? "border-primary text-primary font-extrabold"
                : "border-transparent text-white hover:border-primary hover:text-primary"
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
    <nav className={`mt-4`}>
      <div className="px-4 flex justify-between items-center gap-4 py-1">
        <Link href="/" className="w-auto hidden lg:block">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            onClick={() => {
              setCurrent("home");
            }}
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
          <FaBars
            onClick={showDrawer}
            className="text-lg cursor-pointer text-white"
          />
        </div>
        <div className="lg:flex items-center gap-10 hidden">
          <div className="desktopMenu hidden lg:flex lg:flex-wrap gap-4 w-full  justify-center items-center">
            {renderMenuItems(menuItems)}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            {user?.email ? (
              <div className="flex items-center gap-2">
                <Link href={`/${data?.role}/dashboard`} onClick={scrollToTop}>
                  <button className="bg-black hover:bg-primary hover:text-black text-white duration-300 font-bold px-4 py-2 rounded-xl border-2 border-primary">
                    Dashboard
                  </button>
                </Link>

                <Popover
                  placement="bottomRight"
                  content={content}
                  className="cursor-pointer bg-black border rounded-full border-primary"
                >
                  {data?.profile_image ? (
                    <Image
                      src={data?.profile_image}
                      alt="profile"
                      height={40}
                      width={40}
                      className="rounded-full w-[40px] h-[40px] border-2 border-primary mr-7"
                    />
                  ) : (
                    <Avatar className="" size={40} icon={<UserOutlined />} />
                  )}
                </Popover>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={visible}
        className="navbar !bg-black border"
      >
        <div className="flex justify-between items-center">
          <Link href="/" onClick={closeDrawer}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          <IoClose
            onClick={closeDrawer}
            className="text-2xl cursor-pointer text-white"
          />
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
        <div className="flex lg:hidden items-center gap-6">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <Link href={`/${data?.role}/dashboard`} onClick={scrollToTop}>
                <button className="bg-black text-white w-36 font-bold px-4 py-2 rounded-xl border-2 border-primary">
                  Dashboard
                </button>
              </Link>

              <Popover
                placement="bottom"
                content={content}
                className="cursor-pointer bg-primary ml-6"
              >
                {data?.profile_image ? (
                  <Image
                    src={data?.profile_image}
                    alt="profile"
                    height={40}
                    width={40}
                    className="rounded-full w-[40px] h-[40px] border-2 border-primary"
                  />
                ) : (
                  <Avatar
                    className="!-mr-6 lg:mr-0"
                    size={40}
                    icon={<UserOutlined />}
                  />
                )}
              </Popover>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
