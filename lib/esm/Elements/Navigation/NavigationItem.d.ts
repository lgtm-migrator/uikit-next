/// <reference types="react" />
export declare type NavigationItem = {
    name: string;
    to: string;
    icon?: JSX.Element;
    count?: string | number;
    children?: {
        name: string;
        to: string;
    }[];
};
export declare type StepsNavigationItem = {
    id?: string;
    name: string;
    description?: string;
    href?: string;
    to?: string;
    status: StepNavigationStatus;
};
export declare enum StepNavigationStatus {
    complete = "COMPLETE",
    current = "CURRENT",
    upcoming = "UPCOMING"
}
