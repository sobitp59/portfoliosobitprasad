import { DownloadLoadIcon } from "../assets/icons/icons";

export default function DownloadResume() {
  return (
    <a
      href="/files/sobit-prasad-resume.pdf"
      download
      className="flex items-center gap-1 text-xs text-white transition"
    >
      Download CV <DownloadLoadIcon />
    </a>

  )

}
