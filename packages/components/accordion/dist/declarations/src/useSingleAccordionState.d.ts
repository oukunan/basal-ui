import { AccordionSingleProps } from './AccordionSingle';
declare type UseSingleAccordionStateProps = Pick<AccordionSingleProps, 'allowZeroCollapse' | 'onToggle' | 'value' | 'preExpand'>;
export default function useSingleAccordionState(props: UseSingleAccordionStateProps): {
    value: string | undefined;
    onToggle: (newValue: string) => void;
};
export {};
