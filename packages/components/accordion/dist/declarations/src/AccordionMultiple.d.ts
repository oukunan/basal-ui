import React from 'react';
import { AccordionCommonProps } from './Accordion';
declare type AccordionMultipleInternalProps = AccordionCommonProps & {
    value?: string[];
    preExpand?: string[];
    onToggle?: (value: string[]) => void;
};
export declare type AccordionMultipleProps = AccordionMultipleInternalProps & {
    type: 'multiple';
};
declare const _default: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    allowZeroCollapse?: boolean | undefined;
    className?: string | undefined;
    children: React.ReactNode;
} & {
    value?: string[] | undefined;
    preExpand?: string[] | undefined;
    onToggle?: ((value: string[]) => void) | undefined;
} & {
    type: "multiple";
} & React.RefAttributes<HTMLDivElement>>;
export default _default;
