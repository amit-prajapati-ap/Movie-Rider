import React from "react";
import { useNavigate } from "react-router-dom";
import { GithubIcon, LinkedinIcon, UserIcon, XIcon } from "lucide-react";
import { assets } from "@/assets/assets";

const Footer = () => {
    const navigate = useNavigate()
  const linkSections = [
    {
      title: "QUICK LINKS",
      links: [
        {
            url: '/',
            name: 'Home'
        },
        {
            url: '/movies',
            name: 'Movies'
        },
        {
            url: '/favorite',
            name: 'Favorites'
        },
        {
            url: '/my-bookings',
            name: 'My Bookings'
        }
      ]
    },
    {
      title: "RESOURCES",
      links: [
        {
            url: '/help-center',
            name: 'Help Center',
        },
        {
            url: '/terms-and-conditions',
            name: 'Terms & Conditions',
        },
        {
            url: '/privacy-policy',
            name: 'Privacy Policy',
        },
        {
            url: '/contact-us',
            name: 'Contact Us',
        }
      ]
    },
    {
      title: "FOLLOW US",
      links: [
        {
            url: 'https://x.com/Prajapatiamitap',
            name: 'Twitter(X)',
            image: <XIcon size={18}/>
        },
        {
            url: 'https://www.linkedin.com/in/amit-prajapati-0544882b5/',
            name: 'LinkedIn',
            image: <LinkedinIcon size={18}/>
        },
        {
            url: 'https://github.com/amit-prajapati-ap',
            name: 'GitHub',
            image: <GithubIcon size={18}/>
        },
        {
            url: 'https://portfolio-amit-prajapati.vercel.app/',
            name: 'Portfolio',
            image: <UserIcon size={18}/>
        }
      ]
    },
  ];
  return (
    <div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="px-6 md:px-16 lg:px-24 xl:px-32 max-w-window mx-auto border-t border-gray-500/60">
      <div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.2}} className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-300/75">
        <div>
          <img initial={{opacity: 0}} whileInView={{ opacity: 1}} transition={{duration: 0.5, delay: 0.3}} onClick={() => {navigate('/') ; scrollTo(0, 0)}}
            className="w-34 md:w-42 cursor-pointer"
            src={assets.logo}
            alt="logo"
          />
          <p className="mt-4 max-w-[800px] md:max-w-[60%]] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis voluptatum omnis eos, laboriosam veritatis quibusdam nesciunt consequuntur optio quis eaque qui magnam ea nostrum.</p>
          <div className="flex items-center gap-2 mt-4">
            <img src={assets.googlePlay} alt="" className="h-9 w-auto" />
            <img src={assets.appStore} alt="" className="h-9 w-auto" />
          </div>
        </div>
        <div initial={{opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.4}} className="flex max-md:flex-wrap lg:justify-around w-full xl:w-[45%] gap-20 md:gap-5">
          {linkSections.map((section, index) => (
            <div initial={{opacity: 0, y: 20}} whileInView={{ opacity: 1, y: 0}} transition={{duration: 0.6, delay: index * 0.3}} key={index}>
              <h3 className="font-semibold text-base text-primary-dull md:mb-5 mb-2">
                {section.title}
              </h3>
              {section.title === "QUICK LINKS" || section.title === "RESOURCES" ? <ul className="text-sm space-y-1 flex flex-col gap-2">
                {section.links.map((link, i) => (
                  <li onClick={() => {navigate(link.url); scrollTo(0, 0)}} key={i} className="hover:underline transition-all duration-300 cursor-pointer hover:text-primary-light">
                    {link.name}
                  </li>
                ))}
              </ul> : <ul className="flex flex-col gap-2 text-sm space-y-1">
                {section.links.map((link, i) => (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" key={i} className="hover:underline transition-all duration-300 cursor-pointer hover:text-primary-light flex gap-2">
                    {link.image}
                    {link.name}
                  </a>
                ))}
              </ul>}
            </div>
          ))}
        </div>
      </div>
      <p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.4}} className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © MovieRider All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
