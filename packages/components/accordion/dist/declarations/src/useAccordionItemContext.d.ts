import React from 'react';
declare type AccordionItemContextType = {
    itemId: string;
    headerId: string;
    contentId: string;
    isExpanded: boolean;
    onToggle?: () => void;
};
export declare function AccordionItemProvider(props: {
    itemId: string;
    children: React.ReactNode;
}): JSX.Element;
export default function useAccordionItemContext(): AccordionItemContextType;
export {};
