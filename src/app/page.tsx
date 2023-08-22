import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/components/ui/slideShow";
import { PiStudentBold, PiUserListBold } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { RiPresentationFill } from "react-icons/ri";

const images = [
  'image_1.jpg',
  'image_2.jpg',
  'image_3.jpg',
  'image_4.jpg'
  // Add more image URLs here
];

export default function Home() {
  return (
    <main>
      {/* -- Carousel -- */}
      <div className="flex justify-center items-center h-screen">
        <Slideshow images={images} interval={5000} /> {/* Set interval to 5 seconds */}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-10">
        <div className="flex w-screen h-[70vh] md:w-[140vh] bg-gray-300 p-8 m-4 rounded-lg shadow-md items-center justify-center">
          <p className="font-bold text-lg">BROSUR FAKULTAS</p>
        </div>
        <div className="flex w-screen h-[70vh] md:w-[50vh] bg-gray-300 p-8 m-4 rounded-lg shadow-md items-center justify-center">
          <p className="font-bold text-lg">BROSUR FAKULTAS</p>
        </div>
      </div>


      <div className="mx-12 lg:mx-48 flex justify-center my-16">
        <div className="font-bold text-2xl lg:text-5xl">MENGAPA MEMILIH FAKULTAS INI?</div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-48 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white shadow-md p-4 text-center">
            <Image src="/image_1.jpg" alt="Image 1" className="mx-auto" width={500} height={500} />
            <h2 className="text-xl font-semibold my-3">Alasan 1</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-white shadow-md p-4 text-center">
            <Image src="/image_1.jpg" alt="Image 2" className="mx-auto" width={500} height={500} />
            <h2 className="text-xl font-semibold my-3">Alasan 2</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-white shadow-md p-4 text-center">
            <Image src="/image_1.jpg" alt="Image 3" className="mx-auto" width={500} height={500} />
            <h2 className="text-xl font-semibold my-3">Alasan 3</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="bg-white shadow-md p-4 text-center">
            <Image src="/image_1.jpg" alt="Image 4" className="mx-auto" width={500} height={500} />
            <h2 className="text-xl font-semibold my-3">Alasan 4</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-12 lg:mx-48 flex justify-center items-center my-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-md text-center px-6 py-8 mx-auto w-64 md:w-48 shadow-md">
            <div className="flex flex-col items-center justify-center gap-4">
              <RxPerson size="5rem" />
              <p className="font-bold">0</p>
              <p className="font-bold">Mahasiswa</p>
            </div>
          </div>

          <div className="rounded-md text-center px-6 py-8 mx-auto w-64 md:w-48 shadow-md">
            <div className="flex flex-col items-center justify-center gap-4">
              <PiStudentBold size="5rem" />
              <p className="font-bold">0</p>
              <p className="font-bold">Alumni</p>
            </div>
          </div>

          <div className="rounded-md text-center px-6 py-8 mx-auto w-64 md:w-48 shadow-md">
            <div className="flex flex-col items-center justify-center gap-4">
              <RiPresentationFill size="5rem" />
              <p className="font-bold">0</p>
              <p className="font-bold">Dosen</p>
            </div>
          </div>

          <div className="rounded-md text-center px-6 py-8 mx-auto w-64 md:w-48 shadow-md">
            <div className="flex flex-col items-center justify-center gap-4">
              <PiUserListBold size="5rem" />
              <p className="font-bold">0</p>
              <p className="font-bold">Staff</p>
            </div>
          </div>
        </div>
      </div>


      <div className="mx-12 lg:mx-48 flex justify-center my-16">
        <div className="font-bold text-2xl lg:text-5xl">GALERI FAKULTAS</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        <div className="rounded shadow-md">
          <Image width={50} height={50} src="/image_1.jpg" alt="Image 1" className="w-full h-auto rounded-md" />
        </div>
        <div className="rounded shadow-md">
          <Image width={50} height={50} src="/image_2.jpg" alt="Image 2" className="w-full h-auto rounded-md" />
        </div>
        <div className="rounded shadow-md">
          <Image width={50} height={50} src="/image_3.jpg" alt="Image 3" className="w-full h-auto rounded-md" />
        </div>
        <div className="rounded shadow-md">
          <Image width={50} height={50} src="/image_4.jpg" alt="Image 4" className="w-full h-auto rounded-md" />
        </div>
      </div>



      <div className="mx-12 lg:mx-48 flex justify-center my-16">
        <div className="font-bold text-2xl lg:text-5xl">APA KATA MEREKA?</div>
      </div>
      <div className="flex justify-center my-10">
        <div className="flex h-[70vh] w-[95vh] bg-gray-300 p-8 m-4 rounded-lg shadow-md items-center justify-center">
          <p className="font-bold text-lg">CERITA TESTIMONI MAHASISWA</p>
        </div>
        <div className="flex w-[95vh] bg-gray-300 p-8 m-4 rounded-lg shadow-md items-center justify-center">
          <p className="font-bold text-lg">CERITA TESTIMONI MAHASISWA</p>
        </div>
      </div>

      <div className="mx-12 lg:mx-48 flex justify-center my-16">
        <div className="font-bold text-2xl lg:text-5xl">BERITA TERBARU</div>
      </div>
      <div className="container md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-10 px-5 lg:px-20">
        <div className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto my-5 md:my-0">
          <Image
            src="/image_1.jpg"
            alt="Image"
            className="w-full h-[35vh] bg-cover image"
            width={500}
            height={500}
            layout=""
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Berita
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab reprehenderit inventore et eum iste provident! Illo molestias ut beatae?</p>
          </div>

          <div className="p-4 bg-white flex justify-center">
            <Link href="#">
              <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-green-400 hover:bg-green-400 hover:text-white duration-150">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto my-5 md:my-0">
          <Image
            src="/image_1.jpg"
            alt="Image"
            className="w-full h-[35vh] bg-cover image"
            width={500}
            height={500}
            layout=""
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Berita
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab reprehenderit inventore et eum iste provident! Illo molestias ut beatae?</p>
          </div>

          <div className="p-4 bg-white flex justify-center">
            <Link href="#">
              <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-green-400 hover:bg-green-400 hover:text-white duration-150">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto my-5 md:my-0">
          <Image
            src="/image_1.jpg"
            alt="Image"
            className="w-full h-[35vh] bg-cover image"
            width={500}
            height={500}
            layout=""
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Berita
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab reprehenderit inventore et eum iste provident! Illo molestias ut beatae?</p>
          </div>

          <div className="p-4 bg-white flex justify-center">
            <Link href="#">
              <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-green-400 hover:bg-green-400 hover:text-white duration-150">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded overflow-hidden max-w-sm mx-auto my-5 md:my-0">
          <Image
            src="/image_1.jpg"
            alt="Image"
            className="w-full h-[35vh] bg-cover image"
            width={500}
            height={500}
            layout=""
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Berita
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab reprehenderit inventore et eum iste provident! Illo molestias ut beatae?</p>
          </div>

          <div className="p-4 bg-white flex justify-center">
            <Link href="#">
              <button className="bg-white border-2 text-gray-600 px-4 py-2 rounded hover:border-green-400 hover:bg-green-400 hover:text-white duration-150">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
