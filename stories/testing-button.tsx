import { TestingI } from "./testing-button.type";

export const TestingButton = ({ size, label, color, ...props }: TestingI) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
