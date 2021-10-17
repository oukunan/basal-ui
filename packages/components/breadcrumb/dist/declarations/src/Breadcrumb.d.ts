import React from 'react';
import { BreadcrumbLinkType } from './BreadcrumbLink';
declare type BreadcrumbProps = {
    links: BreadcrumbLinkType[];
    separator?: React.ReactNode;
    separatorGap?: string | number;
    navClassName?: string;
    listClassName?: string;
    linkClassName?: string;
};
declare const _default: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export default _default;
