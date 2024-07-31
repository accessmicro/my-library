import * as react_jsx_runtime from 'react/jsx-runtime';

type BaseButtonPropsType = {
    children?: React.ReactNode;
    title?: string | React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const BaseButton: (props: BaseButtonPropsType) => react_jsx_runtime.JSX.Element;

export { BaseButtonPropsType, BaseButton as default };
