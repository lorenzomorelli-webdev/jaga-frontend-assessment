import Title from "@/app/components/custom/title";
import Navbar from "./components/custom/navbar";
import SectionsContainer from "./components/sections/sectionsContainer";
import FooterNavbar from "./components/custom/footerNavbar";
import { baseUrl, Car } from "@/utils/utils";

export default async function Home() {
  async function getCars() {
    console.log(baseUrl);
    const res = await fetch(baseUrl + "/api/cars");
    if (!res.ok) {
      throw new Error("Failed to fetch cars");
    }
    return res.json();
  }

  const cars: Car[] = await getCars();

  return (
    <main
      id="base-container"
      className="flex flex-col justify-center items-center pt-8 gap-5">
      <Title
        title={"Product Builder"}
        className={"font-semibold text-6xl "}
      />
      <Navbar />
      <SectionsContainer cars={cars} />
      <FooterNavbar />
    </main>
  );
}
