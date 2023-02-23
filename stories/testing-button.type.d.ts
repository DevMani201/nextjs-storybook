export interface TestingI {
  label: string;
  color: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
}
