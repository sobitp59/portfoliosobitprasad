import { DownloadLoadIcon } from "../assets/icons/icons";
import BlurImage from "../components/blur-image";
import DownloadResume from "../components/download-resume";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Socials from "../components/socials";

export default function Home() {

  return (
    <main className="flex relative flex-col items-center justify-center gap-8">

      {/* <section className="w-full flex justify-center items-center gap-5 sticky top-0 p-5 z-10 md:hidden bg-slate-900/5 backdrop-blur-sm rounded-lg">
        <BlurImage
          src={"/profile2.jpeg"}
          alt="Sobit Prasad"
          width={300}
          height={300}
          blurDataURL="/profile2.jpeg"
          className="rounded-lg w-12 h-12 md:hidden object-cover rotate-6"
        />
        <section className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-slate-300">Sobit Prasad</h1>
          <p className="text-xs text-slate-400">Software Developer @Woxsen University</p>
        </section>
      </section> */}

      <section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">

        <BlurImage
          src={"/profile2.jpeg"}
          alt="Sobit Prasad"
          width={300}
          height={300}
          blurDataURL="/profile2.jpeg"
          className="rounded-lg hidden md:block md:w-48 md:h-48 object-cover "
        />

        <div className="flex flex-col items-center justify-start gap-4">


          <section className="flex items-center justify-start gap-5 hidden md:block">
            <section className="flex flex-col items-start">
              <h1 className="text-2xl font-bold text-slate-300 lg:text-4xl">Sobit Prasad</h1>
              <p className="text-xs text-slate-400">Software Developer @Woxsen University</p>
            </section>
          </section>


          <p className="text-sm text-slate-400">
            I am a software engineer and a tech enthusiast. I love to write about
            software development, technology, and life. I am passionate about
            building products that make a difference.
          </p>

          <section className="w-full flex items-center justify-between gap-5">
            <Socials />
            <DownloadResume />
          </section>
        </div>
      </section>


      <Navbar />


      {/*  */}

      {/* <h3>Projects </ h3> */}
      <ul className="w-full grid grid-cols-5  text-xs font-light text-slate-300 text-sm md:text-sm lg:text-base">
        <li className="col-span-1 text-black text-center font-medium  p-3 bg-red-300">All</li>
        <li className="col-span-1 text-black text-center font-medium  p-3 bg-green-300">Web</li>
        <li className="col-span-1 text-black text-center font-medium  p-3 bg-blue-300">Mobile</li>
        <li className="col-span-1 text-black text-center font-medium  p-3 bg-pink-300">Packages</li>
        <li className="col-span-1 text-black text-center font-medium  p-3 bg-purple-300">Desktop</li>
      </ul>



      <Projects />

    </main>
  );
}
