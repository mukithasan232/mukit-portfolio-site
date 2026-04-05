import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { RecentProjectHighlight } from "@/components/RecentProjectHighlight";
import { Projects } from "@/components/Projects";
import { GitHubInsights } from "@/components/GitHubInsights";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden" style={{ paddingBottom: 32 }}>
      <Hero />
      <div className="space-y-0">
        <SocialProof />
        <About />
        <Skills />
        <RecentProjectHighlight />
        <Projects />
        <GitHubInsights />
        <Services />
        <Experience />
        <Blog />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
