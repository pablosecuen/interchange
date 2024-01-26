import { Input, Navbar, NavbarContent } from "@nextui-org/react";
import React, { useEffect } from "react";
import router from "next/router";
import { SearchIcon } from "../icons/searchicon";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useAuthContext } from "../authContext/authContext";
import LoginForm from "../../pages/login";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const { isAuthenticated, checkAuth } = useAuthContext();

  useEffect(() => {
    const checkAuthentication = async () => {
      checkAuth();

      if (!isAuthenticated) {
        return null;
      }
    };

    checkAuthentication();
  }, [isAuthenticated, checkAuth]);

  if (!isAuthenticated) {
    return (
      <div className="w-full ">
        <span>Autenticacion obligatoria</span>
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <Input
            startContent={<SearchIcon />}
            isClearable
            className="w-full"
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search..."
          />
        </NavbarContent>
        <NavbarContent justify="end" className="w-fit data-[justify=end]:flex-grow-0">
          <NotificationsDropdown />
          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
