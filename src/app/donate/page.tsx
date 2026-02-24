import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"
import DonateClient from "./DonateClient"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Afrokokoroot Foundation. Your donation empowers youth and bridges communities through Afrobeat music.",
  openGraph: {
    title: "Donate | Afrokokoroot Foundation",
    description: "Support the Afrokokoroot Foundation. Your donation empowers youth and bridges communities through Afrobeat music.",
    url: `${siteConfig.url}/donate`,
  },
}

export default function DonatePage() {
  return <DonateClient />
}
