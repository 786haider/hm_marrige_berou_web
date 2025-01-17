"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logoImage from "@/../public/logo.jpg"

export default function Contact() {
 
  return (
    <div>
            
   
      <div className="flex justify-center items-center flex-wrap text-pink-500 text-6xl ">
        <Image
          src={logoImage}
          alt="logo"
          width={100}
          height={100}
        />
        <Typewriter
          options={{
            strings: ["For Contact us"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="text-green-500 text-5xl">
          <FaWhatsapp />
          <h1 className="text-white">92 315-8650859</h1>
        </div>
      </div>
      <br></br>
      <div className="flex justify-center items-center flex-wrap text-pink-700 text-5xl">
        <div>
          <FaInstagram />
          <h1 className="text-white text-5xl hover:text-blue-700 ">
            <Link
              href={`https://www.instagram.com/habibamutahir/?__pwa=1#`}
              target="_blank"
            >
              @habibamutahir
            </Link>
          </h1>
        </div>
      </div>

      <br></br>
      <div className="flex justify-center items-center flex-wrap text-blue-700 text-5xl">
        <div>
          <FaFacebook />
          <h1 className="text-white text-5xl hover:text-blue-700 ">
            <Link
              href={`https://www.facebook.com/photo/?fbid=129383858949511&set=ecnf.100056336919939`}
              target="_blank"
            >
              @habibamutahir
            </Link>
          </h1>
        </div>
      </div>

      <br></br>
      <div className="flex justify-center items-center flex-wrap text-red-700 text-5xl">
        <div>
          <FaYoutube />
          <h1 className="text-white text-5xl hover:text-blue-700 ">
            <Link
              href={`http://www.youtube.com/@habibamutahir8878`}
              target="_blank"
            >
              @habibamutahir
            </Link>
          </h1>
        </div>
      </div>
    
    </div>
  );
}
