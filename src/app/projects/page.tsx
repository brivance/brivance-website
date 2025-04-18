import ExperienceCard from "@/app/components/cards/ExperienceCard";

export default function Experience() {
  return (
    <>
      <p className="text-center mt-24 text-5xl">Experience</p>
      <div className="mt-14 mx-24 flex flex-col gap-12">
        <ExperienceCard title="Software Engineer" subtitle="Wasatch BioLabs - Sept 2024 to April 2025" description="I am a full stack developer with a passion for building scalable and efficient web applications. I have experience working with various technologies such as React, Next.js, Node.js, and GraphQL. I am also proficient in JavaScript, TypeScript, and CSS. My skills include front-end development, back-end development, and database management." image="/experience/DNA-sequencing.jpeg" />
        <ExperienceCard title="Software Engineer Intern" subtitle="NovaRad - Nov 2023 to Feb 2024" description="I have experience working with various technologies such as React, Next.js, Node.js, and GraphQL. I am also proficient in JavaScript, TypeScript, and CSS. My skills include front-end development, back-end development, and database management." image="/experience/ct-scan.jpg" />
        <ExperienceCard title="LLM Research Assistant" subtitle="May 2023 to Dec 2023" description="I have experience working with various technologies such as React, Next.js, Node.js, and GraphQL. I am also proficient in JavaScript, TypeScript, and CSS. My skills include front-end development, back-end development, and database management." image="/experience/code.jpg" />
        <ExperienceCard title="Quality Assurance Specialist" subtitle="May 2022 to April 2023" description="I have experience working with various technologies such as React, Next.js, Node.js, and GraphQL. I am also proficient in JavaScript, TypeScript, and CSS. My skills include front-end development, back-end development, and database management." image="/experience/byutv-logo.jpg" />
      </div>
    </>
  );
}
