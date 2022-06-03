import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

export type DefaultTextareaPropsType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type SuperTextareaTextPropsType = DefaultTextareaPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};
