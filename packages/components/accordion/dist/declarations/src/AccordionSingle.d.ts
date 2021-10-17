import React from 'react';
import { AccordionCommonProps } from './Accordion';
declare type AccordionSingleInternalProps = AccordionCommonProps & {
    value?: string;
    preExpand?: string;
    onToggle?: (value: string) => void;
};
export declare type AccordionSingleProps = AccordionSingleInternalProps & {
    type: 'single';
};
declare const _default: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    allowZeroCollapse?: boolean | undefined;
    className?: string | undefined;
    children: React.ReactNode;
} & {
    value?: string | undefined;
    preExpand?: string | undefined;
    onToggle?: ((value: string) => void) | undefined;
} & {
    type: "single";
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
