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
exports.TabNavigation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var foundation_react_1 = require("@sergeimeza/foundation-react");
var __1 = require("../../..");
var methods_1 = require("../../../helpers/methods");
var TabNavigationType;
(function (TabNavigationType) {
    TabNavigationType["default"] = "default";
    TabNavigationType["pills"] = "pills";
})(TabNavigationType || (TabNavigationType = {}));
var TabNavigationComponent = function (_a) {
    var _b;
    var _c = _a.tabs, tabs = _c === void 0 ? [] : _c, _d = _a.type, type = _d === void 0 ? TabNavigationType.default : _d, _e = _a.tabItemClassNames, tabItemClassNames = _e === void 0 ? '' : _e, _f = _a.tabItemSelectedClassNames, tabItemSelectedClassNames = _f === void 0 ? '' : _f, _g = _a.isNavBar, isNavBar = _g === void 0 ? false : _g, _h = _a.showIcons, showIcons = _h === void 0 ? false : _h, _j = _a.showBadge, showBadge = _j === void 0 ? true : _j, _k = _a.onTabSelected, onTabSelected = _k === void 0 ? function (tab) {
        console.log('tab selected:', tab.name);
    } : _k;
    var _l = (0, foundation_react_1.useArray)(tabs), tabItems = _l.array, setTabItems = _l.set;
    function handleChange(e) {
        handleItemChange(e.target.value);
    }
    function handleItemChange(value) {
        var _tabItems = tabItems.slice();
        _tabItems = _tabItems.map(function (e) { return (__assign(__assign({}, e), { current: false })); });
        var index = _tabItems.findIndex(function (i) { return i.name === value; });
        _tabItems[index].current = true;
        setTabItems(_tabItems);
        onTabSelected(_tabItems[index]);
    }
    var navBarTabNavigation = ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tabItems.map(function (tab) { return ((0, jsx_runtime_1.jsx)(__1.Anchor, __assign({ to: tab.to, href: tab.href, className: (0, methods_1.classNames)(tab.current
                ? 'border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium') }, { children: tab.name }), tab.name)); }) }, void 0));
    var standardTabNavigation = ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "sm:hidden" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "tabs", className: "sr-only" }, { children: "Select a tab" }), void 0), (0, jsx_runtime_1.jsx)("select", __assign({ id: "tabs", name: "tabs", className: "block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md", defaultValue: (_b = tabs[0]) === null || _b === void 0 ? void 0 : _b.name, onChange: handleChange }, { children: tabItems.map(function (tab) { return ((0, jsx_runtime_1.jsx)("option", { children: tab.name }, tab.name)); }) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden sm:block" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, methods_1.classNames)(type === TabNavigationType.default
                        ? 'border-b border-gray-200'
                        : '') }, { children: (0, jsx_runtime_1.jsx)("nav", __assign({ className: (0, methods_1.classNames)(type === TabNavigationType.default
                            ? '-mb-px flex space-x-8'
                            : 'flex space-x-4'), "aria-label": "Tabs" }, { children: tabItems.map(function (tab) { return ((0, jsx_runtime_1.jsxs)(__1.Anchor, __assign({ type: "button", to: tab.to, href: tab.href, onClick: function () {
                                handleItemChange(tab.name);
                            }, className: type === TabNavigationType.default
                                ? (0, methods_1.classNames)(tab.current
                                    ? 'border-primary-500 text-primary-600 ' +
                                        tabItemSelectedClassNames
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 ' +
                                        tabItemClassNames, 'group inline-flex items-center', 'py-4 px-1 border-b-2 font-medium text-sm')
                                : (0, methods_1.classNames)(tab.current
                                    ? 'bg-primary-400 text-white ' +
                                        tabItemSelectedClassNames
                                    : 'text-gray-500 hover:text-gray-700 ' +
                                        tabItemClassNames, 'px-3 py-2 font-medium text-sm rounded-md'), "aria-current": tab.current ? 'page' : undefined }, { children: [showIcons && tab.icon && ((0, jsx_runtime_1.jsx)(tab.icon, { className: (0, methods_1.classNames)(tab.current
                                        ? 'text-primary-500'
                                        : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5'), "aria-hidden": "true" }, void 0)), (0, jsx_runtime_1.jsx)("span", { children: tab.name }, void 0), showBadge && tab.count ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, methods_1.classNames)(tab.current
                                        ? 'bg-primary-100 text-primary-600'
                                        : 'bg-gray-100 text-gray-900', 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block') }, { children: tab.count }), void 0)) : null] }), tab.name)); }) }), void 0) }), void 0) }), void 0)] }, void 0));
    return isNavBar ? navBarTabNavigation : standardTabNavigation;
};
exports.TabNavigation = Object.assign(TabNavigationComponent, {
    type: TabNavigationType,
});
exports.default = exports.TabNavigation;
