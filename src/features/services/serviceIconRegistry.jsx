import {
  LearningIcon,
  CloudIcon,
  ChipIcon,
} from "@/shared/icons/TechIcons";

const ICONS = {
  learning: LearningIcon,
  cloud: CloudIcon,
  chip: ChipIcon,
};

export function renderServiceIcon(iconKey) {
  const Icon = ICONS[iconKey];

  if (!Icon) {
    return null;
  }

  return <Icon />;
}
