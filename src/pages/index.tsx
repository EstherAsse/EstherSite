import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import WithSubnavigation from "@/Component/navbar";
import CallToActionWithVideo from "@/Component/presentation";
import SimpleAccordion from "@/Component/accordion";
import ArticleList from "@/Component/education";
import SimpleThreeColumns from "@/Component/parcours";
import SmallWithLogoLeft from "@/Component/footer";
import BlogPostGrid from "@/Component/projet";
import ExperienceTimeline from "@/Component/experience";
import SocialProfileWithImageHorizontal from "@/Component/contact";
import GridListWith from "@/Component/competences";
import CompetTech from "@/Component/competTech";
import CentreInteret from "@/Component/centre";
import CoursesGrid from "@/Component/compGrid";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WithSubnavigation/>
        <CallToActionWithVideo/> 
        <SimpleThreeColumns/>
        <ArticleList/>
        <SimpleAccordion/>
        <ExperienceTimeline/>
        <GridListWith/>
        <CompetTech/>
        <BlogPostGrid/>
        <CoursesGrid/>
        <CentreInteret/>
        <SocialProfileWithImageHorizontal/>
        <SmallWithLogoLeft/>
      </main> 
    </>
  );
}
