import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="bg-primary text-white pt-20 pb-10">
                <div className="container flex flex-wrap md:justify-center justify-start p-4 gap-4">
                    <div className="w-[48rem] ">
                        <div className="inline-flex items-center text-primary-color">
                            <Image
                                src="/logo.png"
                                className="w-auto h-auto"
                                alt=""
                                width={90}
                                height={90}
                            />
                            <h1 className="text-white font-bold cursor-pointer xl:text-lg text-base ml-4">
                                FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN<br />UNIVERSITAS SAWERIGADING
                            </h1>
                        </div>
                        <div className="d-flex flex-column justify-content-start text-justify">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dolor culpa, maxime maiores ratione voluptatibus mollitia est ab expedita perferendis.
                            </p>
                        </div>
                    </div>
                    <div className="w-[18rem] ">
                        <h3 className="text-white mb-4 text-2xl font-bold">
                            Informasi Kontak
                        </h3>
                        <p className="flex items-center gap-2">
                            <FaLocationDot />
                            Jl. lorem ipsum
                        </p>
                        <p className="flex items-center gap-2">
                            <HiMail />
                            lorem.ipsum@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhone />
                            0812-3456-7890
                        </p>
                    </div>
                    <div className="w-[10rem]">
                        <h3 className="text-white mb-4 text-2xl font-bold">Follow Us</h3>
                        <div className="flex gap-6 text-white items-center">
                            <Link
                                href="#"
                                target="_blank"
                            >
                                <Image
                                    src="/facebook.jpg"
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                            >
                                <Image
                                    src="/instagram.png"
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                            >
                                <Image
                                    src="/youtube.png"
                                    width={50}
                                    height={50}
                                    alt=""
                                    className="w-auto h-auto"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
