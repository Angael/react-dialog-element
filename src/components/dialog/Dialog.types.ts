import type { ComponentPropsWithoutRef } from 'react';

export type DialogProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
} & ComponentPropsWithoutRef<'dialog'>;
