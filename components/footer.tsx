import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-black p-1 rounded">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-semibold">Tech Wave</span>
            </div>
            <div className="flex gap-3 mb-4">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-8 h-8 border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-8 h-8 border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-8 h-8 border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-8 h-8 border-gray-700 text-gray-400 hover:text-white hover:border-white"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
            <p className="text-sm text-gray-400">
              Selling premium products, designed to elevate your everyday
              experience
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">MENU</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">UTILITY PAGES</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/404"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  404 Not Found
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">CONTACT US</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 7L12 14L22 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-sm">Email</span>
                </div>
                <p className="text-sm text-gray-400">contact@techwave.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C18.2 22.09 16.48 21.81 14.89 21.14C13.4 20.52 12.04 19.58 10.89 18.43C9.74 17.28 8.8 15.92 8.18 14.43C7.5 12.83 7.22 11.1 7.35 9.35C7.35 8.8 7.56 8.27 7.94 7.9C8.31 7.52 8.84 7.31 9.39 7.31H12.39C13.3 7.3 14.08 7.95 14.21 8.85C14.29 9.38 14.43 9.9 14.62 10.39C14.87 11.07 14.74 11.83 14.29 12.36L13.35 13.3C14.35 14.86 15.67 16.18 17.23 17.18L18.17 16.24C18.7 15.79 19.46 15.66 20.14 15.91C20.63 16.1 21.15 16.24 21.68 16.32C22.59 16.45 23.25 17.25 23.25 18.17L22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Phone</span>
                </div>
                <p className="text-sm text-gray-400">(414) 687 - 5892</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            Copyright © Sanjid{" "}
          </p>
          <div className="flex gap-2">
            <div className="bg-gray-800 rounded p-1 w-12 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 38 24"
                width="38"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  opacity=".07"
                />
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#fff"
                />
                <path
                  d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                  fill="#003087"
                />
                <path
                  d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                  fill="#3086C8"
                />
                <path
                  d="M19.1 8.1c-.1-.1-.2-.1-.3-.1h-3c-.1 0-.2 0-.2.1-.1.1-.1.2-.1.3l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.7z"
                  fill="#012169"
                />
              </svg>
            </div>
            <div className="bg-gray-800 rounded p-1 w-12 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 38 24"
                width="38"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  opacity=".07"
                />
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#fff"
                />
                <path
                  d="M22 12c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5zm-5-7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm-1 2h2v5h-2zm-1 6h4v1h-4z"
                  fill="#eb001b"
                />
                <path d="M28 9v1h-1v3h-1v-3h-1V9z" fill="#7375cf" />
                <path d="M30 9h-2v5h1v-4h1z" fill="#7375cf" />
                <path d="M30 10v1h1v1h-1v1h2v-3z" fill="#7375cf" />
              </svg>
            </div>
            <div className="bg-gray-800 rounded p-1 w-12 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 38 24"
                width="38"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  fill="#000"
                  opacity=".07"
                />
                <path
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  fill="#fff"
                />
                <path
                  d="M15 12c0 .4.1.8.2 1.2.1.4.3.7.5 1 .2.3.5.5.8.7.3.2.7.3 1.1.3.4 0 .8-.1 1.1-.2.3-.1.6-.3.9-.5.2-.2.4-.4.6-.7.1-.2.2-.5.2-.8H18c0 .2-.1.4-.1.5-.1.1-.2.3-.3.4-.1.1-.3.2-.4.2-.2.1-.3.1-.5.1-.2 0-.4 0-.5-.1-.2-.1-.3-.2-.4-.3-.1-.1-.2-.3-.3-.5-.1-.2-.1-.4-.1-.6 0-.2 0-.4.1-.6.1-.2.1-.3.3-.5.1-.1.3-.3.4-.3.2-.1.3-.1.5-.1.2 0 .4 0 .5.1.1.1.3.1.4.2.1.1.2.2.3.4.1.1.1.3.1.5h2c0-.3-.1-.6-.2-.8-.1-.3-.3-.5-.6-.7-.2-.2-.5-.4-.9-.5-.3-.1-.7-.2-1.1-.2-.4 0-.8.1-1.1.3-.3.2-.6.4-.8.7-.2.3-.4.6-.5 1-.1.4-.2.8-.2 1.2z"
                  fill="#3086C8"
                />
                <path
                  d="M21 9h1.5v6H21zm2.5 0h1.5l2 4V9h1.5v6h-1.4l-2.1-4.2V15h-1.5z"
                  fill="#3086C8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
