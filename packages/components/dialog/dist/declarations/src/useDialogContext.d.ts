/// <reference types="react" />
declare type DialogContextType = {
    open?: boolean;
    onClose: () => void;
};
export declare const DialogContext: import("react").Context<DialogContextType | null>;
export default function useDialogContext(): DialogContextType;
export {};
