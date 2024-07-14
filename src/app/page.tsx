import AboutUs from "@/components/aboutus";
import LandingPage from "@/components/landing-page"
import Team from "@/components/team"

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-black">
      
      <LandingPage/>
      <AboutUs/>
      <Team/>
    </main>
  );
}
