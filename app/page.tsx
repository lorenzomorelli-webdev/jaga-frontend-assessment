import Title from "@/app/components/custom/title";
import Navbar from "./components/custom/navbar";

export default function Home() {
  return (
    <main
      id="base-container"
      className="flex flex-col justify-center items-center pt-8 gap-5">
      <Title
        title={"Product Builder"}
        className={"font-semibold text-6xl "}
      />
      <Navbar />
    </main>
  );
}
