import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type SuperRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: number) => void;
};
