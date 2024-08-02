import { j as c } from "../../jsx-runtime-sen3WxAA.mjs";
import { useEffect as n } from "react";
const u = (r) => {
  const { title: o, children: s, className: l } = r;
  return n(() => {
    var e;
    let t = document.querySelector(":root");
    (e = t == null ? void 0 : t.style) == null || e.setProperty("--color-primary", "red");
  }, []), /* @__PURE__ */ c.jsx("button", {
    className: `lg-btn ${l}`,
    children: s || o
  });
};
export {
  u as default
};
