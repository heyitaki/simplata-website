!function() {
    const e = document,
        t = e.documentElement,
        n = e.body,
        s = window.sr = ScrollReveal();

    function a() {
        n.classList.add("lights-off");
    }

    t.classList.remove("no-js"), t.classList.add("js"), window.addEventListener("load", function() {
        n.classList.add("is-loaded");
    });

    n.classList.contains("has-animations") && window.addEventListener("load", function() {
        s.reveal(".feature", {
            duration: 600,
            distance: "20px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            origin: "right",
            viewFactor: .2
        });
    });

    window.addEventListener("load", a);
}();