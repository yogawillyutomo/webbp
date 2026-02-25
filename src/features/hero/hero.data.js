import {
  CodeIcon,
  BrainIcon,
  CloudIcon,
  ChipIcon,
  LayoutIcon,
  PhoneIcon,
  ChartIcon,
  TrophyIcon
} from "@/shared/icons/TechIcons";


export const badges = [
  // ⬆️ TOP CENTER
 
    {
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    icon: <PhoneIcon />,
    // position: "absolute -bottom-16 left-[-140px]",
  },

  // ↖️ TOP LEFT

     {
    title: "Cloud Solutions",
    subtitle: "Scalable Infra",
    icon: <CloudIcon />,
    offsetY: -20
    // position: "absolute -top-16 right-[-140px]",
  },
  // ↗️ TOP RIGHT

    {
    title: "Web Development",
    subtitle: "Modern Architecture",
    icon: <CodeIcon />,
    offsetY: 20
    // position: "absolute -top-16 left-[-140px]",
  },

  // ⬅️ MIDDLE LEFT
  {
    title: "IoT Solutions",
    subtitle: "Connected Systems",
    icon: <ChipIcon />,
    offsetY: -20
    // position: "absolute top-1/2 left-[-200px] -translate-y-1/2",
  },

  // ➡️ MIDDLE RIGHT

 
  {
    title: "UI/UX Design",
    subtitle: "User Experience",
    icon: <LayoutIcon />,
    // position: "absolute top-1/2 right-[-200px] -translate-y-1/2",
  },

  // ↙️ BOTTOM LEFT
 {
    title: "AI Integration",
    subtitle: "Smart Automation",
    icon: <BrainIcon />,
    offsetY: 20
    // position: "absolute -top-35 left-1/2 -translate-x-1/2",
  },

  // ↘️ BOTTOM RIGHT

    {
    title: "Competition Mentoring",
    subtitle: "Tech Championship",
    icon: <TrophyIcon />,
    offsetY: -20
    // position: "absolute -bottom-35 left-1/2 -translate-x-1/2",
  },

  // ⬇️ BOTTOM CENTER
  {
    title: "Tech Consultation",
    subtitle: "Strategic Advisory",
    icon: <ChartIcon />,
     offsetY: 20
    // position: "absolute -bottom-16 right-[-140px]",
  },

];

