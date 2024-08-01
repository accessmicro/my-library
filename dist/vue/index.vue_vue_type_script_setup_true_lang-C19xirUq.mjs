import { defineComponent as l, ref as o, withDirectives as i, openBlock as r, createElementBlock as p, isRef as s, vModelText as u, unref as m } from "vue";
const f = /* @__PURE__ */ l({
  __name: "index",
  setup(a) {
    let e = o("nghiem");
    return (_, t) => i((r(), p("input", {
      type: "text",
      class: "lg-input",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => s(e) ? e.value = n : e = n)
    }, null, 512)), [
      [u, m(e)]
    ]);
  }
});
export {
  f as _
};
