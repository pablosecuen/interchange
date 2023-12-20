import React from "react";
import Logo from "../../public/logo/interchange.png";
import Image from "next/image";
export const AcmeIcon = () => {
  return <Image src={Logo} alt="" width={100} height={30} priority />;
};
