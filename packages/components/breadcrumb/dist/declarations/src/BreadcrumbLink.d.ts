import React from 'react';
export declare type BreadcrumbLinkType = {
    label: React.ReactNode;
    href: string;
};
export default function BreadcrumbLink(props: {
    link: BreadcrumbLinkType;
    className?: string;
    lastLink?: boolean;
}): JSX.Element;
