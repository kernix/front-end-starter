// Passive event listeners
jQuery.event.special.touchstart = {
    setup: (_, ns, handle) => {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: (_, ns, handle) => {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
