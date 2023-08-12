import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import { data } from "@/data";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ services }) {
  console.log(services);
  return (
    <>
      <Head>
        <title>Yobe</title>
        <meta name="description" content="Yobe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
