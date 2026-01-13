import Image from "next/image"
import React from "react"

const Footer = () => {
  const socialIcons = [
    { id: 1, img: "/footer/insta.png" },
    { id: 2, img: "/footer/youtube.png" },
    { id: 3, img: "/footer/fb.png" },
    { id: 4, img: "/footer/x.png" },
    { id: 5, img: "/footer/linkedin.png" },
    { id: 6, img: "/footer/tiktok.png" },
  ]

  return (
    <footer className="bg-linear-to-b from-[#0f172a] to-[#020617] text-white">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image src="/homepage/logo.png" alt="Logo" width={150} height={50} />

        <ul className="flex gap-3">
          {socialIcons.map(icon => (
            <li
              key={icon.id}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-emerald-500 transition cursor-pointer"
            >
              <Image src={icon.img} alt="" width={20} height={20} />
            </li>
          ))}
        </ul>
      </div>


      <div className="border-t border-white/10" />

     
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <p className="text-xs tracking-widest text-blue-400 mb-3">
            JOIN OUR COMMUNITY
          </p>
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">
            Get Exclusive Fitness Updates
          </h2>
          <p className="text-white/70 mb-6">
            Early access to workouts, events, challenges and special member-only offers.
          </p>
          <button className="bg-blue-500 hover:bg-emerald-600 transition px-7 py-3 rounded-full font-semibold text-black">
            Join Now
          </button>
        </div>

       
        <div className="flex flex-col gap-4 text-white/80">
          <h4 className="font-semibold text-white mb-2">Explore</h4>
          <a className="hover:text-blue-400 transition" href="#">Inside Out Fitness Studios</a>
          <a className="hover:text-blue-400 transition" href="#">FAQ</a>
          <a className="hover:text-blue-400 transition" href="#">Newsroom</a>
          <a className="hover:text-blue-400 transition" href="#">Invest</a>
          <a className="hover:text-blue-400 transition" href="#">Careers</a>
          <a className="text-blue-400 font-semibold" href="#">
            Download Training App
          </a>
        </div>

        <div className="flex gap-8 items-center lg:justify-end">
          <Image src="/footer/franchise.webp" alt="" width={90} height={90} />
          <Image src="/footer/badge.jpg" alt="" width={90} height={90} />
        </div>
      </div>

   
      <div className="border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <span>© 2026 Inside Out Fitness Training</span>
        <div className="flex gap-6">
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">SMS Policy</a>
          <a className="hover:text-white" href="#">Privacy</a>
        </div>
      </div>

      <div className="bg-black/40 text-center py-4 text-xs text-white/60">
        Part of the FIT House of Brands · Powering 1,500+ fitness franchises worldwide
      </div>

    </footer>
  )
}

export default Footer
