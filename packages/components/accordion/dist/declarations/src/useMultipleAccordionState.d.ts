import { AccordionMultipleProps } from './AccordionMultiple';
declare type UseMultipleAccordionStateProps = Pick<AccordionMultipleProps, 'allowZeroCollapse' | 'onToggle' | 'value' | 'preExpand'>;
export default function useMultipleAccordionState(props: UseMultipleAccordionStateProps): {
    value: string[] | undefined;
    onToggle: (newValue: string) => void;
};
export {};
