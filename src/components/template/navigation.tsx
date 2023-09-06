'use client'

import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const Navigation: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="bg-purple-500 sticky top-0 z-10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <div className="inline-flex items-center text-primary-color md:ml-10 ml-5">
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
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-7">
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Home
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Profil
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Akademik
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Galeri
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Jurnal
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        News
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Kegiatan
                    </div>
                    <div className="cursor-pointer text-sm font-semibold leading-6 text-white">
                        Kontak
                    </div>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <div className="inline-flex items-center text-primary-color md:ml-10 ml-5">
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
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Home
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Profil
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Akademik
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Galeri
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Jurnal
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    News
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Kegiatan
                                </div>
                                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                                    Kontak
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navigation;
