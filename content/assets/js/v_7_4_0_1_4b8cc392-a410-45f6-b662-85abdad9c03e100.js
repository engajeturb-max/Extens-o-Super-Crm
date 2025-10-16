import {
  j as e,
  v as d,
  D as i,
  b5 as m,
  b1 as h,
  F as x,
  J as u,
  ab as g,
  I as s,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e10.js";
import { u as j } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e19.js";
import { a as f } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e33.js";
import { V as v } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e18.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e8.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e4.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e5.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e7.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e6.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e9.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e31.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e22.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e2.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e3.js";
function R() {
  const { language: o } = j(),
    { active: a, toggleSwitch: p, token: t, getToken: n } = f(),
    l = () => {
      const c =  "https://qr.thelinkstore.cloud/crmapidoc";
      window.open(c, "_blank");
    },
    r = () => {
      t
        ? (g(t),
          s({ type: "Success", message: o.tokenCopied, position: "top-right" }))
        : s({ type: "Error", message: o.tokenIsEmpty, position: "top-right" });
    };
  return e.jsxs("div", {
    className: "grid gap-6 !w-[550px]",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx(d, { children: o.configAPI }),
          e.jsx(i, { children: o.ApiDesc }),
        ],
      }),
      e.jsxs("div", {
        className: "w-full flex gap-1 items-center",
        style: { maxHeight: "2rem" },
        children: [
          e.jsx("div", {
            className: "!w-4/5 lg:tooltip lg:tooltip-top cursor-pointer",
            "data-tip": "Clique para copiar o token",
            onClick: () => r(),
            children: e.jsx("input", {
              type: "text",
              placeholder: o.APIinputPlace,
              value: t,
              className:
                "input input-bordered !w-full input-sm pointer-events-none",
              readOnly: !0,
            }),
          }),
          e.jsxs("div", {
            onClick: () => n(),
            className:
              "flex items-center justify-center gap-0.5 h-full text-sm w-min whitespace-nowrap px-2 border border-[var(--primaria)] border-solid rounded-lg pulse hover:text-[var(--primaria)] cursor-pointer",
            children: [e.jsx("p", { children: o.APIGerarToken }), e.jsx(m, {})],
          }),
          e.jsx("div", {
            onClick: () => r(),
            className:
              "p-2 lg:tooltip lg:tooltip-left gap-0.5 h-full text-sm border border-[var(--primaria)] border-solid rounded-lg pulse hover:text-[var(--primaria)] cursor-pointer",
            "data-tip": "Copiar Token",
            children: e.jsx(h, {}),
          }),
        ],
      }),
      e.jsxs("div", {
        children: [
          e.jsxs("label", {
            htmlFor: "toggle",
            className:
              "flex justify-between cursor-pointer mb-1.5 items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded",
            children: [
              e.jsx(i, { children: o.APISwitch }),
              e.jsx(x, { estado: a, switchUpdate: () => p(), id: "toggle" }),
            ],
          }),
          e.jsx("div", {
            className: "flex",
            children: e.jsx(u, { name: o.APIOpenDoc, funcao: l }),
          }),
        ],
      }),
    ],
  });
}
export { R as default };
