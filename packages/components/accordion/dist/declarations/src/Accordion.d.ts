import React from 'react';
import AccordionHeader from './AccordionHeader';
import AccordionItem from './AccordionItem';
import AccordionContent from './AccordionContent';
import { AccordionSingleProps } from './AccordionSingle';
import { AccordionMultipleProps } from './AccordionMultiple';
export declare type AccordionCommonProps = React.HTMLAttributes<HTMLDivElement> & {
    allowZeroCollapse?: boolean;
    className?: string;
    children: React.ReactNode;
};
declare type AccordionCompoundedComponentType = React.ForwardRefExoticComponent<(AccordionSingleProps | AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>> & {
    Item: typeof AccordionItem;
    Header: typeof AccordionHeader;
    Content: typeof AccordionContent;
};
declare const Accordion: AccordionCompoundedComponentType;
export default Accordion;
