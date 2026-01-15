"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

type SubMenu = {
  label: string
  href: string
}

type MenuItem = {
  title: string
  href: string
  submenu?: SubMenu[]
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const menu: MenuItem[] = [
    {
      title: "Home",
      href: "/",

    },
    {
      title: "About Us",
      href: "/about-us",
      // submenu: [
      //   { label: "Training Styles", href: "/workouts/styles" },
      //   { label: "Classes", href: "/workouts/classes" },
      //   { label: "Schedule", href: "/workouts/schedule" },
      // ],
    },
    {
      title: "Membership",
      href: "/",
    },
    {
      title: "Services",
      href: "/services",
      // submenu: [
      //   { label: "Our Partners", href: "/partners/our-partners" },
      //   { label: "Brand Collabs", href: "/partners/collaborations" },
      // ],
    },
    {
      title: "Trainers",
      href: "/trainers",
    },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <nav className="flex items-center justify-between h-16">
         
          <Link href="/">
            <Image
              src="/homepage/logo-main.png"
              alt="insideoutfitness Logo"
              width={195}
              height={60}
              className="w-full object-contain"
            />
          </Link>

         
          <ul className="hidden lg:flex items-center justify-center space-x-6">
            {menu.map((item) => (
              <li key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-bold text-[#211551] hover:text-blue-900 transition"
                >
                  {item.title}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

               
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <Link
              href="/start-trial"
              className="ml-4 bg-[#211551] text-white px-5 py-2 rounded-full hover:bg-blue-900 transition"
            >
              Apply For Membership
            </Link>
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#211551]"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>


        {mobileOpen && (
          <div className="lg:hidden bg-white border-t">
            <ul className="flex flex-col">
              {menu.map((item) => (
                <li key={item.title} className="border-b">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenSubmenu(
                            openSubmenu === item.title ? null : item.title
                          )
                        }
                        className="w-full flex justify-between items-center px-4 py-3 font-semibold text-[#211551]"
                      >
                        {item.title}
                        <ChevronDown
                          className={`transition ${
                            openSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openSubmenu === item.title && (
                        <div className="bg-gray-50">
                          <Link
                            href={item.href}
                            className="block px-6 py-2 text-sm font-medium text-blue-900"
                          >
                            View All
                          </Link>

                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-6 py-2 text-sm text-gray-700"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-semibold text-[#211551]"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

              <div className="px-4 mt-4">
                <Link
                  href="/start-trial"
                  className="block text-center bg-[#211551] text-white py-2 rounded-full"
                >
                  Apply For Membership
                </Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
