import TechCard from "@/shared/tech-card";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Tech Stack Showcase</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore the technologies used in this project.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {techStack.map((tech, index) => (
            <TechCard key={index} title={tech.title} description={tech.description} href={tech.href} subtitle={tech.subtitle} />
          ))}
        </div>
      </div>
    </div>
  )
}

const techStack = [
  {

    title: 'Next.js',
    subtitle: 'Next.js is a React framework for production. It makes building fullstack React apps and sites a breeze.',
    description: 'The React framework for production.',
    href: 'https://nextjs.org',
  },
  {
    title: 'Tailwind CSS',
    subtitle: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    description: 'A utility-first CSS framework for rapid UI development.',
    href: 'https://tailwindcss.com',
  },
  {
    title: 'Framer Motion',
    subtitle: 'A production-ready motion library for React.',
    description: 'A production-ready motion library for React.',
    href: 'https://www.framer.com/motion/',
  },
  {
    title: 'TypeScript',
    subtitle: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript.',
    href: 'https://www.typescriptlang.org',
  },
  {
    title: 'shadcn/ui',
    subtitle: 'Build your component library',
    description: 'Beautifully designed components that you can copy and paste into your apps.',
    href: "https://ui.shadcn.com/"
  }
];