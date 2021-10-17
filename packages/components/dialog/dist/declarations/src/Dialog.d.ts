import React from 'react';
export declare type DialogProps = {
    open?: boolean;
    children: React.ReactNode;
    onClose: () => void;
};
declare function Dialog(props: DialogProps): JSX.Element;
declare namespace Dialog {
    var Overlay: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    var Content: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
}
export default Dialog;
