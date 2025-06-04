import ExperienceCard from "../components/cards/ExperienceCard";

export default function Experience() {
  return (
    <>
      <div className="mt-20 mx-24 flex flex-col gap-12">
        <ExperienceCard
          title="Software Engineer"
          subtitle="Wasatch BioLabs - Sept 2024 to April 2025"
          description="Tools: Next.js, NextAuth, React, AWS, TypeScript, Figma, PostgreSQL, TailwindCSS, Git, Docker, Figma"
          moreInformation={
            <ul className="list-disc pl-3">
              <li>Developed an audit logging system to track all database modifications and ensure compliance with F11 (FDA) regulations</li>
              <li>Created a PIN-based secondary authentication mechanism to secure the submission of and access to sensitive data</li>
              <li>Implemented Figma designs for the sample ordering workflow, enabling users to upload files (stored in AWS S3) and import CSV data for in-browser editing</li>
              <li>Addressed and resolved over 20 distinct permissions issues, preventing security risks by limiting unnecessary access or denial of essential features</li>
            </ul>
          }
          image="/experience/DNA-sequencing.jpeg" />
        <ExperienceCard
          title="Software Engineer Intern"
          subtitle="NovaRad - Nov 2023 to Feb 2024"
          description="Tools: Python, SciKit-Learn, NumPy, SimpleITK, PyTorch, Git, Markdown. Worked with MONAI tools to train a 3D model for classifying medical images"
          moreInformation={
            <ul className="list-disc pl-3">
              <li>Trained a DenseNet121 model to classify the orientation of 3D medical scans, automatically correcting orientation for radiologist manual reviews</li>
              <li>Prepared over 200 3D NIfTI images for a training dataset using SimpleITK, a popular multidimensional image analysis library</li>
              <li>Achieved orientation classification accuracy of &gt;99%</li>
            </ul>
          }
          image="/experience/ct-scan.jpg" />
        <ExperienceCard
          title="LLM Research Assistant"
          subtitle="May 2023 to Dec 2023"
          description="Exploring natural language processing through prompt engineering and conducting in-depth data analysis"
          moreInformation={
            <ul className="list-disc pl-3">
              <li>Designed and ran over 10 large scale experiments testing the capabilities of 11 LLMs including the Meta Llama family, T5, OPT, and the OpenAI GPT family</li>
              <li>Contributed to the project Mimicking Human Persuasive Dynamics With LLMs, awarded Session Winner at BYU’s Student Research Conference</li>
            </ul>
          }
          image="/experience/code.jpg"
        />
        <ExperienceCard
          title="Quality Assurance Specialist"
          subtitle="May 2022 to April 2023"
          description="Identified and documented software defects through Jira, initiating collaboration for swift software issue resolution. Tools: JavaScript, Kotlin, Mocha"
          moreInformation={
            <ul className="list-disc pl-3">
              <li>Ensured accuracy of BYUtv’s live channel content by catching and reporting bugs in advertised show times–crucial for broadcasts like General Conference with up to 4 million viewers</li>
              <li>Wrote automatic testing scripts on navigation flows for BYUtv’s Roku application, improving efficiency by 10x from manual testing</li>
            </ul>
          }
          image="/experience/byutv-logo.jpg"
        />
      </div>
    </>
  );
}
