import Socials from "@/components/socials";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="flex flex-col gap-2">
            <section className="font-[family-name:var(--font-fraunces)] text-3xl font-bold flex items-center gap-2 justify-start">
              <div className="group flex justify-start items-center gap-3 z-0 mt-8 text-base focus:outline-none">
                <div className="relative -z-10  w-full bg-tertiary bg-cover bg-center">
                  <img
                    src={"/profile.jpeg"}
                    alt={
                      "Sobit Prasad profile image looking straight and smiling"
                    }
                    width={70}
                    height={70}
                    className="z-0 object-cover rounded-lg rotate-6 border-2 hover:cursor-pointer "
                    loading="lazy"
                  />
                  <img
                    src={"/profile.jpeg"}
                    alt={
                      "Sobit Prasad profile image looking straight and smiling"
                    }
                    width={70}
                    height={70}
                    className="absolute left-0 top-0 -z-10 object-cover opacity-0 blur-3xl saturate-200 duration-300 sm:group-hover:opacity-75 sm:group-focus:opacity-75 rounded-lg rotate-6 border-2"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-3xl">Sobit</h2>
                <h2 className="text-3xl">Prasad</h2>
              </div>
            </section>

            <Socials />
            <Navbar />
          </div>

          <p className="text-base font-normal leading-6">
            Sobit Prasad is a software engineer and a tech enthusiast. He loves
            to write about software development, technology, and life. He is
            passionate about building products that make a difference. He was
            previously working as a Frontend Engineer at{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/startuphire/posts/?feedView=all"
              className="font-[family-name:var(--font-fraunces)] font-base hover:underline"
            >
              StartupHire
            </Link>
            . He is currently working as a Full Stack Engineer at{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/school/woxsen-university/posts/?feedView=all"
              className="font-[family-name:var(--font-fraunces)] font-base hover:underline"
            >
              Woxsen University
            </Link>
            .
          </p>
        </div>

        {/* projects */}
        <Projects />
      </main>
    </div>
  );
}
