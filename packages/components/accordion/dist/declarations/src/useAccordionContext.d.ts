/// <reference types="react" />
declare type AccordionContextType = {
    value?: string[];
    onToggle?: (value: string) => void;
};
export declare const AccordionContext: import("react").Context<AccordionContextType | null>;
export default function useAccordionContext(): AccordionContextType;
export {};
