export type Poll = {
  id: string;
  title: string;
  option1: number;
  option2: number;
  optionName1: string;
  optionName2: string;
  timestamp: { nanoseconds: number; seconds: number };
  closed: boolean;
};
