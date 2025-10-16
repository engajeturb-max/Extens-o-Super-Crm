import {
  j as e,
  v as d,
  D as n,
  H as m,
  J as p,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e10.js";
import { J as v } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e22.js";
import { u as x } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e19.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e18.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e8.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e4.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e5.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e7.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e6.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e2.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e3.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e9.js";
function P() {
  const {
      IA: t,
      setIA: s,
      viewIA: a,
      setViewIA: r,
      validateGeminiKey: o,
      validateGPTKey: c,
    } = v(),
    { language: i } = x();
  return e.jsxs("div", {
    className: "w-[500px]",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx(d, { children: i.assistenteIA }),
          e.jsx("span", {
            className: "text-sm text-red-600",
            children: i.versaoBetaAssistente,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-4 flex flex-col gap-4",
        children: [
          e.jsxs("div", {
            role: "tablist",
            className: "tabs tabs-boxed w-[350px]",
            children: [
              e.jsxs("a", {
                role: "tab",
                className:
                  "tab font-bold bg-base-200 gap-2 " +
                  (a === "Gemini"
                    ? "tab-active !bg-[var(--primaria)] !text-[var(--letra)]"
                    : ""),
                onClick: () => r("Gemini"),
                children: [
                  "Gemini ",
                  i.gratuita,
                  t.activeIA === "Gemini" &&
                    e.jsx("div", {
                      className:
                        "badge badge-accent badge-xs !bg-[var(--secundaria)] shadow-2xl pulse !text-[var(--letra)] px-1 py-[10px] border border-solid border-[var(--letra)]",
                      children: e.jsx("span", {
                        className: "pb-[3px]",
                        children: i.active,
                      }),
                    }),
                ],
              }),
              e.jsxs("a", {
                role: "tab",
                className:
                  "tab font-bold bg-base-200 gap-2 " +
                  (a === "GPT"
                    ? "tab-active !bg-[var(--primaria)] !text-[var(--letra)]"
                    : ""),
                onClick: () => r("GPT"),
                children: [
                  "GPT ",
                  i.active,
                  t.activeIA === "GPT" &&
                    e.jsx("div", {
                      className:
                        "badge badge-accent badge-xs !bg-[var(--secundaria)] shadow-2xl pulse !text-[var(--letra)] px-1 py-[10px] border border-solid border-[var(--letra)]",
                      children: e.jsx("span", {
                        className: "pb-[3px]",
                        children: i.active,
                      }),
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              a === "Gemini" &&
                e.jsxs(n, {
                  children: [
                    i.inteligenciaDesenvolvidaGoogle,
                    e.jsx("a", {
                      href: "https://aistudio.google.com/app/apikey",
                      target: "_blank",
                      children: " https://aistudio.google.com/app/apikey",
                    }),
                  ],
                }),
              a === "GPT" &&
                e.jsxs(n, {
                  children: [
                    i.inteligenciaDesenvolvidaOpenIA,
                    e.jsx("a", {
                      href: "https://platform.openai.com/api-keys",
                      target: "_blank",
                      children: " https://platform.openai.com/api-keys",
                    }),
                  ],
                }),
            ],
          }),
          e.jsxs("label", {
            className:
              "input input-bordered input-sm flex items-center gap-2 border border-solid",
            children: [
              e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                className:
                  "w-4 h-4 opacity-70 " +
                  (t.activeIA === a
                    ? "text-[var(--unread-marker-background)]"
                    : ""),
                children: e.jsx("path", {
                  fillRule: "evenodd",
                  d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                  clipRule: "evenodd",
                }),
              }),
              e.jsx("input", {
                type: "text",
                placeholder: "Insert API Key here",
                className: "grow",
                value: a === "Gemini" ? t.keyGemini : t.keyGPT,
                onChange: (l) =>
                  s(a === "Gemini" ? "keyGemini" : "keyGPT", l.target.value),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "m-auto",
            children: [
              t.activeIA === a &&
                e.jsx(m, {
                  name: a === "Gemini" ? "Remove Gemini AI" : "Remove ChatGpt AI",
                  funcao: () => s("activeIA", null),
                }),
              t.activeIA !== a &&
                e.jsx(p, {
                  name: a === "Gemini" ? "Activate Gemini AI" : "Activate ChatGPT AI",
                  funcao: () => (a === "Gemini" ? o() : c()),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { P as default };
