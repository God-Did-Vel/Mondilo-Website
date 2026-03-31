"use client";
"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
function VideoSection() {
    var videoRef = react_1.useRef(null);
    var _a = react_1.useState(false), isPlaying = _a[0], setIsPlaying = _a[1];
    var _b = react_1.useState(false), videoError = _b[0], setVideoError = _b[1];
    var togglePlay = function () {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            }
            else {
                videoRef.current.play()["catch"](function (err) {
                    console.error("Play error:", err);
                    setIsPlaying(false);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };
    var handleVideoError = function () {
        console.error("Video failed to load");
        setVideoError(true);
        setIsPlaying(false);
    };
    return (React.createElement("section", { className: "relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black" },
        !videoError && (React.createElement("video", { ref: videoRef, onError: handleVideoError, onPlay: function () { return setIsPlaying(true); }, onPause: function () { return setIsPlaying(false); }, loop: true, playsInline: true, preload: "metadata", muted: true, className: "absolute inset-0 w-full h-full object-cover", crossOrigin: "anonymous" },
            React.createElement("source", { src: "https://res.cloudinary.com/duweg8kpv/video/upload/White_and_Brown_Food_Facebook_Video_Promo_cmq9hk.mp4", type: "video/mp4" }),
            "Your browser does not support the video tag.")),
        React.createElement("div", { className: "absolute inset-0 bg-black/60" }),
        React.createElement("div", { className: "relative z-10 text-center px-6" },
            React.createElement(framer_motion_1.motion.div, { onClick: togglePlay, initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.8 }, className: "mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full border border-white/30 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:border-white transition-all duration-300 group" }, isPlaying ? (React.createElement(lucide_react_1.Pause, { className: "text-white w-8 h-8 group-hover:text-accent transition-colors" })) : (React.createElement(lucide_react_1.Play, { className: "text-white ml-2 w-8 h-8 group-hover:text-accent transition-colors" }))),
            React.createElement(framer_motion_1.motion.h4, { className: "text-accent uppercase tracking-[0.3em] text-sm mb-4 font-light", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 } }, "Discover"),
            React.createElement(framer_motion_1.motion.h2, { className: "text-4xl md:text-6xl font-serif text-white tracking-wide", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.3 } }, "The Art of Luxury"),
            videoError && (React.createElement(framer_motion_1.motion.p, { className: "text-gray-400 mt-4 text-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 } }, "Video unavailable. Displaying static background.")))));
}
exports["default"] = VideoSection;
