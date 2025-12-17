import { ExperienceItemType } from "@/components/work-experience";

export const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "1",
    companyName: "Vinyasa Summer of Code",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "1-1",
        title: "Open Source Contributor",
        employmentPeriod: "Jun 2024 - July 2024",
        employmentType: "Part-time",
        description:
          "Developed multiple pages for a job portal website ",
        icon: "code",
        skills: ["JavaScript", "React", "Node.js", "TailwindCSS"],
        isExpanded: true,
      },
      // {
      //   id: "1-2",
      //   title: "Software Engineer",
      //   employmentPeriod: "Jan 2020 - Dec 2021",
      //   employmentType: "Full-time",
      //   description:
      //     "Developed and maintained web applications using modern technologies.",
      //   icon: "code",
      //   skills: ["HTML", "CSS", "JavaScript"],
      // },
    ],
  },
];
