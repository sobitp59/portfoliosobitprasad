import { DownloadLoadIcon } from "../assets/icons/icons";
import BlurImage from "../components/blur-image";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Socials from "../components/socials";

export default function Home() {

  return (
    <main className="flex relative flex-col items-center justify-center gap-8">

      <section className="flex items-center gap-5 sticky top-5 z-10 md:hidden ">
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
          </section>
     
      <section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          
          <BlurImage
            src={"/profile2.jpeg"}
            alt="Sobit Prasad"
            width={300}
            height={300}
            blurDataURL="/profile2.jpeg"
            className="rounded-lg hidden md:block md:w-48 md:h-48 object-cover rotate-6"
          />
          
        <div className="flex flex-col items-center justify-center gap-4">
          
          
          <section className="flex items-center gap-5 hidden md:block">
            <section className="flex flex-col items-start">
              <h1 className="text-2xl font-bold text-slate-300">Sobit Prasad</h1>
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
            <a
  href="/files/sobit-prasad-resume.pdf" // path to your file in the public folder
  download
  className="flex items-center gap-1 text-xs text-white transition"
>
  Download CV <DownloadLoadIcon  />
</a>

            {/* <button className="flex gap-2 items-center gap-1 text-sm">download cv <DonwloadIcon/> </button> */}
          </section>
        </div>
      </section>
     
     
      <Navbar />


      

      <Projects />
      
    </main>
  );
}
