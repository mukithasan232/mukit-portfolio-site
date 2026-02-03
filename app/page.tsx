import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubInsights } from "@/components/GitHubInsights";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <SocialProof />
      <About />
      <Skills />
      <Projects />
      <GitHubInsights />
      <Services />
      <Experience />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}
