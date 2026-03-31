"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
function Navbar() {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var LOGO_BORDER_RADIUS = "rounded-full";
    // ✅ FIXED SIZES (valid Tailwind only)
    var LOGO_SIZE_DEFAULT = "h-12 md:h-16 lg:h-20";
    var LOGO_SIZE_SCROLLED = "h-10 md:h-12 lg:h-14";
    react_1.useEffect(function () {
        var handleScroll = function () {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    var navLinks = [
        { href: "/", label: "Home" },
        { href: "/rooms", label: "Rooms & Suites" },
        { href: "/gallery", label: "Gallery" },
        { href: "/login", label: "Sign In" },
    ];
    return (React.createElement("nav", { className: "fixed w-full z-50 transition-all duration-500 " + (scrolled
            ? "bg-black/95 backdrop-blur-md py-2 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4") },
        React.createElement("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" }),
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center" },
            React.createElement(link_1["default"], { href: "/", className: "flex items-center gap-[2px] group flex-shrink-0" },
                React.createElement("div", { className: "overflow-hidden flex-shrink-0 " + LOGO_BORDER_RADIUS + " transition-all duration-500" },
                    React.createElement(image_1["default"], { src: "https://res.cloudinary.com/duweg8kpv/image/upload/mondillolo-removebg-preview_jxb72h.png", alt: "Mondilo Royal Hotel & Suites", width: 200, height: 80, className: "w-auto object-contain transition-all duration-500 " + (scrolled ? LOGO_SIZE_SCROLLED : LOGO_SIZE_DEFAULT), priority: true })),
                React.createElement("div", { className: "flex flex-col leading-tight gap-[1px] -ml-5" },
                    React.createElement("span", { className: "font-serif font-semibold uppercase tracking-[0.4em] transition-all duration-500 text-white/90 group-hover:text-[#d4af37] " + (scrolled
                            ? "text-[9px] md:text-[10px]"
                            : "text-[10px] md:text-[11px] lg:text-[12px]") }, "Mondilo Royal"),
                    React.createElement("span", { className: "font-sans font-light tracking-[0.35em] uppercase text-[#d4af37] transition-all duration-500 " + (scrolled
                            ? "text-[7px] md:text-[8px]"
                            : "text-[8px] md:text-[9px] lg:text-[10px]") }, "Hotel & Suites"))),
            React.createElement("div", { className: "hidden md:flex items-center space-x-2 lg:space-x-3" },
                navLinks.map(function (link) { return (React.createElement(link_1["default"], { key: link.href, href: link.href, className: "relative text-[8px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#d4af37] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#d4af37] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap" }, link.label)); }),
                React.createElement("div", { className: "h-5 w-px bg-[#d4af37]/40" }),
                React.createElement(link_1["default"], { href: "/book", className: "relative overflow-hidden border border-[#d4af37] text-[#d4af37] font-bold px-6 lg:px-8 py-2.5 uppercase tracking-[0.2em] text-[10px] lg:text-[11px] transition-all duration-300 hover:text-black group whitespace-nowrap" },
                    React.createElement("span", { className: "absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-300" }),
                    React.createElement("span", { className: "relative z-10" }, "Book Now"))),
            React.createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "md:hidden text-white hover:text-[#d4af37] transition-colors focus:outline-none p-1", "aria-label": "Toggle menu" }, isOpen ? React.createElement(lucide_react_1.X, { size: 24 }) : React.createElement(lucide_react_1.Menu, { size: 24 }))),
        React.createElement("div", { className: "md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-md flex flex-col items-center py-10 space-y-6 transition-all duration-300 border-t border-[#d4af37]/20 " + (isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none") },
            React.createElement("div", { className: "flex flex-col items-center" },
                React.createElement("div", { className: "overflow-hidden " + LOGO_BORDER_RADIUS },
                    React.createElement(image_1["default"], { src: "https://res.cloudinary.com/duweg8kpv/image/upload/mondillolo-removebg-preview_jxb72h.png", alt: "Mondilo Royal Hotel", width: 200, height: 80, className: "h-14 md:h-16 w-auto object-contain" })),
                React.createElement("span", { className: "font-semibold uppercase tracking-[0.4em] text-white/90 text-[10px]" }, "Mondilo Royal Hotel"),
                React.createElement("span", { className: "font-light tracking-[0.35em] uppercase text-[#d4af37] text-[9px]" }, "Hotel & Suites")),
            React.createElement("div", { className: "w-20 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" }),
            navLinks.map(function (link) { return (React.createElement(link_1["default"], { key: link.href, href: link.href, onClick: function () { return setIsOpen(false); }, className: "text-sm font-bold uppercase tracking-[0.3em] text-white/80 hover:text-[#d4af37] transition-colors duration-300" }, link.label)); }),
            React.createElement(link_1["default"], { href: "/book", onClick: function () { return setIsOpen(false); }, className: "mt-2 border border-[#d4af37] text-[#d4af37] font-bold px-10 py-3 uppercase tracking-[0.2em] text-xs hover:bg-[#d4af37] hover:text-black transition-all duration-300" }, "Book Now"))));
}
exports["default"] = Navbar;
