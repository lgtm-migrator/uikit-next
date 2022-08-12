"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLayout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var __1 = require("../..");
var SidebarLayoutType;
(function (SidebarLayoutType) {
    SidebarLayoutType["simple"] = "simple";
})(SidebarLayoutType || (SidebarLayoutType = {}));
var SidebarLayoutComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'min-h-screen flex overflow-hidden bg-gray-100' : _b, _c = _a.header, header = _c === void 0 ? undefined : _c, _d = _a.sidebarNavigation, sidebarNavigation = _d === void 0 ? undefined : _d, _e = _a.title, title = _e === void 0 ? undefined : _e, _f = _a.type, type = _f === void 0 ? SidebarLayoutType.simple : _f, children = _a.children;
    var _g = (0, react_1.useState)(false), sidebarOpen = _g[0], setSidebarOpen = _g[1];
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, __1.classNames)(className) }, { children: [(0, jsx_runtime_1.jsx)(react_2.Transition.Root, __assign({ show: sidebarOpen, as: react_1.Fragment }, { children: (0, jsx_runtime_1.jsxs)(react_2.Dialog, __assign({ as: "div", className: "fixed inset-0 flex z-40 md:hidden", onClose: setSidebarOpen }, { children: [(0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog.Overlay, { className: "fixed inset-0 bg-gray-600 bg-opacity-75" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_1.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute top-0 right-0 -mr-12 pt-2" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: function () { return setSidebarOpen(false); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Close sidebar" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.XIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0) }), void 0), sidebarNavigation] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "shrink-0 w-14", "aria-hidden": "true" }, void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden md:flex md:shrink-0" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex flex-col w-64" }, { children: sidebarNavigation }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex flex-col w-0 flex-1 overflow-hidden" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative z-10 shrink-0 flex h-16 bg-white shadow" }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden", onClick: function () { return setSidebarOpen(true); } }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Open sidebar" }), void 0), (0, jsx_runtime_1.jsx)(outline_1.MenuAlt2Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0)] }), void 0), header] }), void 0), (0, jsx_runtime_1.jsx)("main", __assign({ className: "flex-1 relative overflow-y-auto focus:outline-none" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "py-6" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" }, { children: (0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-2xl font-semibold text-gray-900" }, { children: title }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" }, { children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsx)("div", __assign({ className: "py-4" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "border-4 border-dashed border-gray-200 rounded-lg h-96" }, void 0) }), void 0)) }), void 0)] }), void 0) }), void 0)] }), void 0)] }), void 0));
};
exports.SidebarLayout = Object.assign(SidebarLayoutComponent, {
    type: SidebarLayoutType,
});
exports.default = exports.SidebarLayout;
