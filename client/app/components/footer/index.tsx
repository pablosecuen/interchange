import React from "react";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";
import telefono from "@/public/assets/svg/telefono.svg";
import mail from "@/public/assets/svg/mail.svg";

function Footer() {
  return (
    <footer className="bg-black/90 text-white overflow-x-hidden w-full max-w-screen">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0  flex flex-col justify-center">
            <Link href="/" className="flex items-center pb-2">
              <Logo size="xl" />
            </Link>

            <span className=" text-xs lg:text-base text-gray-400">Arijon 1254</span>
            <span className=" text-xs lg:text-base text-gray-400">
              Rosario, Santa Fe, Argentina
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-3 lg:gap-6 lg:grid-cols-3">
            <div>
              <h2 className="mb-6  text-xs lg:text-base font-semibold text-white uppercase ">
                Paginas
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 g:text-sm text-xs lg:text-base ">
                  <Link href="/nosotros" className="hover:underline">
                    Nosotros
                  </Link>
                </li>

                <li className="mb-4 g:text-sm text-xs lg:text-base">
                  <Link href="/inscripcion" className="hover:underline">
                    Inscripción
                  </Link>
                </li>
                <li className="mb-4 g:text-sm text-xs lg:text-base">
                  <Link href="/tours" className="hover:underline">
                    Tours
                  </Link>
                </li>
                <li className="mb-4 g:text-sm text-xs lg:text-base">
                  <Link href="/cursos" className="hover:underline">
                    Cursos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs lg:text-base font-semibold text-white uppercase ">
                RR.SS.
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 g:text-sm text-xs lg:text-base">
                  <Link
                    href="https://www.facebook.com/p/Interchange-Instituto-de-Ingl%C3%A9s-100063674795643/?paipv=0&eav=AfacH2NoPL_t-xa_ANfsGts34nt1bnIyXVbTcCEnlWRNMn9hj-BxIezhAzOjUFVR41E&_rdr"
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/interchangeingles/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6  text-xs lg:text-base font-semibold text-white uppercase ">
                Contacto
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 g:text-sm text-xs lg:text-base hover:underline flex gap-2 items-center cursor-pointer">
                  <Image src={telefono} alt="" width={20} height={0} />
                  <Link href="https://wa.me/54341153119792">0341 15-311-9792</Link>
                </li>
                <li>
                  <Link
                    href="mailto:interchange@gmail.com"
                    className="hover:underline flex gap-2 items-center g:text-sm text-xs lg:text-base"
                  >
                    <Image src={mail} alt="" width={20} height={0} />
                    interchange@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className=" text-xs lg:text-base text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="https://pablo-amico.vercel.app/" className="hover:underline">
              Pablo Amico
            </Link>
            . Todos los derechos reservados.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              href="https://github.com/pablosecuen/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              title="Github"
            >
              <svg
                className="lg:w-4 lg:h-4 w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="https://pablo-amico.vercel.app/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              title="Portfolio"
            >
              <svg
                className="lg:w-4 lg:h-4 w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Portfolio</span>
            </Link>
            <Link
              href="https://pablo-amico.vercel.app/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              title="Linkedin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-5 lg:h-5 w-2 h-2 -mt-[3px] -ml-[3px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.8007812 6.3007812 C 6.9007812 6.3007812 6.4003906 6.8 6.4003906 7.5 C 6.4003906 8.2 6.8992188 8.6992188 7.6992188 8.6992188 C 8.5992187 8.6992187 9.0996094 8.2 9.0996094 7.5 C 9.0996094 6.8 8.6007813 6.3007812 7.8007812 6.3007812 z M 6.5 10 L 6.5 17 L 9 17 L 9 10 L 6.5 10 z M 11.099609 10 L 11.099609 17 L 13.599609 17 L 13.599609 13.199219 C 13.599609 12.099219 14.499219 11.900391 14.699219 11.900391 C 14.899219 11.900391 15.599609 12.099219 15.599609 13.199219 L 15.599609 17 L 18 17 L 18 13.199219 C 18 10.999219 17.000781 10 15.800781 10 C 14.600781 10 13.899609 10.4 13.599609 11 L 13.599609 10 L 11.099609 10 z"></path>
              </svg>
              <span className="sr-only">Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
