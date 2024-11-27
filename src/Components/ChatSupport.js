
  (function (a, b, c, d, e, f, g) {
    c[d] =
      c[d] ||
      function () {
        (c[d].q = c[d].q || []).push(arguments);
      };
    c["_lsAlias"] = c[d];
    e = a.createElement(b);
    e.type = "text/javascript";
    e.async = true;
    e.src = import.meta.env.VITE_CHAT_URL;
    f = function () {
      g = a.getElementsByTagName(b)[0];
      g.parentNode.insertBefore(e, g);
    };
    c.addEventListener("load", f);
  })(document, "script", window, "_ls");
  _ls("init", { projectId: import.meta.env.VITE_CHAT_PROJECT_ID  });




