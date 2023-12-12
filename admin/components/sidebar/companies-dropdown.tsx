import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { BottomIcon } from "../icons/sidebar/bottom-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "INTERCHANGE",
    location: "ROSARIO",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">{company.location}</span>
          </div>
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Facebook",
              location: "San Fransico, CA",
              logo: <AcmeIcon />,
            });
          }
          if (e === "2") {
            setCompany({
              name: "Instagram",
              location: "Austin, Tx",
              logo: <AcmeIcon />,
            });
          }
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Companies">
          <DropdownItem
            key="1"
            startContent={<AcmeIcon />}
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            <a
              target="_blank"
              href="https://www.facebook.com/p/Interchange-Instituto-de-Ingl%C3%A9s-100063674795643/?paipv=0&eav=AfZtDN2EUPupl3qoaOBGlZwaS_7PuIwHo-pV8ER4s2UT0iR49TaFJ20igQrdDGaV6yM&_rdr"
              rel="noreferrer"
            >
              Facebook
            </a>
          </DropdownItem>
          <DropdownItem
            key="2"
            startContent={<AcmeIcon />}
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            <a target="_blank" href="https://www.instagram.com/interchangeingles/" rel="noreferrer">
              Instagram
            </a>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
