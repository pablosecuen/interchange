import React, { useEffect } from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { useAuthContext } from "../authContext/authContext";
import { useRouter } from "next/router";
export const SidebarWrapper = () => {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();
  const { isAuthenticated, userType, checkAuth } = useAuthContext();

  useEffect(() => {
    const checkAuthentication = async () => {
      checkAuth();

      if (!isAuthenticated) {
        // Verifica si el código se está ejecutando en el lado del cliente antes de usar router
        if (typeof window !== "undefined") {
          router.push("/login");
        }
      }
    };

    checkAuthentication();
  }, [isAuthenticated, checkAuth, router]);

  const renderMenuItems = () => {
    switch (userType) {
      case "admin":
        return (
          <aside className="h-screen z-[202] sticky top-0">
            {collapsed ? <div className={Sidebar.Overlay()} onClick={setCollapsed} /> : null}
            <div
              className={Sidebar({
                collapsed: collapsed,
              })}
            >
              <div className={Sidebar.Header()}>
                <CompaniesDropdown />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className={Sidebar.Body()}>
                  <SidebarItem
                    title="Home"
                    icon={<HomeIcon />}
                    isActive={router.pathname === "/"}
                    href="/"
                  />
                  <SidebarMenu title="Menu Principal">
                    <SidebarItem
                      isActive={router.pathname === "/alumnos"}
                      title="Alumnos"
                      icon={<AccountsIcon />}
                      href="alumnos"
                    />
                    <SidebarItem
                      isActive={router.pathname === "/cursos"}
                      title="Cursos"
                      icon={<PaymentsIcon />}
                      href="cursos"
                    />
                    <SidebarItem
                      isActive={router.pathname === "/nivelador"}
                      title="Nivelador"
                      icon={<AccountsIcon />}
                      href="nivelador"
                    />
                    <CollapseItems
                      icon={<BalanceIcon />}
                      items={["Banks Accounts", "Credit Cards", "Loans"]}
                      title="Balances"
                    />
                  </SidebarMenu>

                  <SidebarMenu title="Campus">
                    <SidebarItem
                      isActive={router.pathname === "/contenido"}
                      title="Contenido"
                      icon={<DevIcon />}
                      href="contenido"
                    />{" "}
                    <SidebarItem
                      isActive={router.pathname === "/view"}
                      title="Vista Previa"
                      href="view"
                      icon={<ViewIcon />}
                    />
                    <SidebarItem
                      isActive={router.pathname === "/configuracion"}
                      title="configuracion"
                      href="configuracion"
                      icon={<SettingsIcon />}
                    />
                  </SidebarMenu>
                </div>
                <div className={Sidebar.Footer()}>
                  <Tooltip content={"Settings"} color="primary">
                    <div className="max-w-fit">
                      <SettingsIcon />
                    </div>
                  </Tooltip>
                  <Tooltip content={"Adjustments"} color="primary">
                    <div className="max-w-fit">
                      <FilterIcon />
                    </div>
                  </Tooltip>
                  <Tooltip content={"Profile"} color="primary">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </aside>
        );
      case "teacher":
        return (
          <aside className="h-screen z-[202] sticky top-0">
            {collapsed ? <div className={Sidebar.Overlay()} onClick={setCollapsed} /> : null}
            <div
              className={Sidebar({
                collapsed: collapsed,
              })}
            >
              <div className={Sidebar.Header()}>
                <CompaniesDropdown />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div className={Sidebar.Body()}>
                  <SidebarItem
                    title="Home"
                    icon={<HomeIcon />}
                    isActive={router.pathname === "/"}
                    href="/"
                  />

                  <SidebarMenu title="Campus">
                    <SidebarItem
                      isActive={router.pathname === "/contenido"}
                      title="Contenido"
                      icon={<DevIcon />}
                      href="contenido"
                    />{" "}
                    <SidebarItem
                      isActive={router.pathname === "/view"}
                      title="Vista Previa"
                      href="view"
                      icon={<ViewIcon />}
                    />
                  </SidebarMenu>
                </div>
                <div className={Sidebar.Footer()}>
                  <Tooltip content={"Settings"} color="primary">
                    <div className="max-w-fit">
                      <SettingsIcon />
                    </div>
                  </Tooltip>
                  <Tooltip content={"Adjustments"} color="primary">
                    <div className="max-w-fit">
                      <FilterIcon />
                    </div>
                  </Tooltip>
                  <Tooltip content={"Profile"} color="primary">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="sm" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </aside>
        );
      default:
        return null;
    }
  };

  return <>{renderMenuItems()}</>;
};
