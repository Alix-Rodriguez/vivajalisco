import About from "../components/About";
import Margaritas from "../components/Margaritas";
import NavBar from "../components/NavBar";
import Platters from "../components/Platters";
import Slider from "../components/Slider";
import Welcome from "../components/Welcome";
import Menus from "../components/Menus";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>

      <Head>
        <title>VivaJalisco</title>
        <link rel="icon" href="/img/logo7.png" />
        <meta name="description" content="Desarrollo web Diseño Publicidad Marketing" />
      </Head>

      <NavBar />
      <section
        id="about"
        className="text-white h-screen bg-black  text-center flex "
      >
        <Slider />
      </section>
      <section id="weolcome" className="lg:h-screen h-auto flex ">
        <Welcome />
      </section>
      <section
        id="contact"
        className="text-[#343434] h-screen text-center flex "
      >
        <About />
      </section>
      <section id="projects" className=" text-white h-screen bg-[#004857] flex">
        <Menus />
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('img/5.jpg')",
        }}
      >
        <Margaritas />
      </section>
      <section
        id="projects"
        className=" text-white h-screen "
        style={{
          backgroundImage: "url('img/6.jpg')",
        }}
      >
        <Platters />
      </section>

      <section id="projects" className=" text-white h-auto">
        <Gallery />
      </section>
      <section id="projects" className=" text-white lg:px-0 px-12 h-[45vh] bg-[#004857] flex justify-center items-center">
        <Image className="lg:w-[600px] w-[200px]" src="/img/LOGO.png" width={600} height={40}></Image>
      </section>
      <footer className="flex basis-full h-[30vh] bg-black">
        <Footer />
      </footer>
    </div>
  );
}
