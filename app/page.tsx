import About from "@/components/About";
import ContactsInfo from "@/components/ContactsInfo";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";
import "@/public/css/template-dark/dark.css";

const Page = () => {
  return (
    <GlitcheLayout onepage={true} dark={true}>
      <Hero mouse={true} />
      <About />
      <Skills />
      <Services />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Page;
