var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from '../../../helpers/methods';
import { Anchor } from '../../..';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
var VerticalNavigationComponent = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.secondaryNavigationTitle, secondaryNavigationTitle = _c === void 0 ? undefined : _c, _d = _a.secondaryItems, secondaryItems = _d === void 0 ? undefined : _d, _e = _a.showIcons, showIcons = _e === void 0 ? true : _e;
    var router = useRouter();
    var pathname = router.pathname;
    // memo or state
    var navItems = useState(items.slice())[0];
    return (_jsxs("nav", __assign({ "aria-label": "Sidebar" }, { children: [_jsx("div", __assign({ className: "space-y-1" }, { children: navItems.map(function (item) {
                    var current = router.pathname.includes(item.to);
                    return !item.children ? (_jsxs(Anchor, __assign({ to: item.to, "aria-current": current ? 'page' : undefined, className: classNames(current
                            ? 'bg-primary-100 text-primary-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500') }, { children: [showIcons && item.icon && item.icon, _jsx("span", __assign({ className: "truncate" }, { children: item.name }), void 0), item.count ? (_jsx("span", __assign({ className: classNames(current
                                    ? 'bg-white'
                                    : 'bg-gray-100 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full') }, { children: item.count }), void 0)) : null] }), item.name)) : (_jsx(Disclosure, __assign({ as: "div", defaultOpen: current, className: "space-y-1" }, { children: function (_a) {
                            var _b;
                            var open = _a.open;
                            return (_jsxs(_Fragment, { children: [_jsxs(Disclosure.Button, __assign({ className: classNames(current
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500') }, { children: [_jsx("svg", __assign({ className: classNames(open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 shrink-0 h-5 w-5 group-hover:text-gray-400 transition-colors ease-in-out duration-150'), viewBox: "0 0 20 20", "aria-hidden": "true" }, { children: _jsx("path", { d: "M6 6L14 10L6 14V6Z", fill: "currentColor" }, void 0) }), void 0), item.name] }), void 0), _jsx(Disclosure.Panel, __assign({ className: "space-y-1" }, { children: (_b = item.children) === null || _b === void 0 ? void 0 : _b.map(function (subItem) { return (_jsx(Anchor, __assign({ to: subItem.to, className: classNames(subItem.to === router.pathname
                                                ? 'bg-primary-100 text-primary-900'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full  flex items-center pl-10 pr-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500') }, { children: subItem.name }), subItem.name)); }) }), void 0)] }, void 0));
                        } }), item.name));
                }) }), void 0), secondaryItems && secondaryItems.length > 0 && (_jsxs("div", __assign({ className: "mt-8" }, { children: [secondaryNavigationTitle && (_jsx("h3", __assign({ className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider", id: "projects-headline" }, { children: secondaryNavigationTitle }), void 0)), _jsx("div", __assign({ className: "mt-1 space-y-1", "aria-labelledby": "projects-headline" }, { children: secondaryItems === null || secondaryItems === void 0 ? void 0 : secondaryItems.map(function (item) { return (_jsx(Anchor, __assign({ to: item.to, className: classNames('w-full group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md', 'hover:text-gray-900 hover:bg-gray-50', 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500') }, { children: _jsx("span", __assign({ className: "truncate" }, { children: item.name }), void 0) }), item.name)); }) }), void 0)] }), void 0))] }), void 0));
};
export var VerticalNavigation = Object.assign(VerticalNavigationComponent, {});
export default VerticalNavigation;
