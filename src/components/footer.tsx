import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-[0.8px] border-gray-500/40">
      <div className="flex h-16 items-center justify-between px-4">


        <Image
          src={"/favicon_light.svg"}
          alt={"Sobit Prasad logo"}
          width={100}
          height={100}
          className="h-8 w-8"
        />
        {/* <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
          Sobit Prasad
        </p>   */}
        
        
        <p className="text-sm text-muted-foreground">
          This website is crafted by a human 👨🏾.
        </p>

      </div>
    </footer>
  );
}
