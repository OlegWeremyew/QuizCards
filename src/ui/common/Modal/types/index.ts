import React from 'react';

export type ModalPropsType = {
  title?: string;
  show: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export type ModalButtonsWrapPropsType = {
  children: React.ReactNode;
  closeModal: () => void;
};
