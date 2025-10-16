import {
  j as a,
  v as A,
  D as T,
  H as E,
  V as v,
  J as C,
  I as _,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e10.js";
import { a as r } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e4.js";
import { a as b } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e6.js";
import { n as k } from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e22.js";
import {
  R as q,
  i as P,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e24.js";
import {
  u as B,
  a as z,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e19.js";
import {
  V as w,
  W as c,
} from "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e18.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e8.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e5.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e7.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e2.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e3.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e9.js";
import "./v_7_4_0_1_4b8cc392-a410-45f6-b662-85abdad9c03e34.js";
function ae() {
  const { language: t } = B(),
    { label: u } = z(),
    { close: f } = k(),
    [n, g] = r.useState(""),
    [o, h] = r.useState(),
    [l, S] = r.useState([]),
    [N, p] = r.useState([]);
  r.useEffect(() => {
    (async () => {
      try {
        // const e = await b.get(`${w.backend}api/modelosCRM/get`, {
        const e = await b.get("https://adminsupercrm.softwaresdeautomacao.com/api/modelosCRM/get.php", {

          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        S(e.data.modelos), p(e.data.modelos);
      } catch (e) {
        console.error(t.erroAoCapturarModelos, e);
      }
    })();
  }, []),
    r.useEffect(() => {
      if (n.length === 0) p(l);
      else {
        let e = [];
        l.forEach((i) => {
          var d;
          (d = i.nome) != null &&
            d.toUpperCase().includes(n.toUpperCase()) &&
            e.push(i);
        }),
          p(e);
      }
    }, [n]);
  const x = async () => {
      var M;
      const e = await c.Conn("getMyUserId"),
        i = await c.Utils("getContato", e),
        d = await c.Contact("getProfilePictureUrl", e),
        I = await c.Profile("isBusiness"),
        s = await c.Contact("getBusinessProfile", e);
      let j = "";
      s && s.website && s.website[0] && (j = s.website[0]);
      let y = "";
      s &&
        s.categories &&
        (M = s.categories[0]) != null &&
        M.localized_display_name &&
        (y = s.categories[0].localized_display_name);
      const U = {
        whatsapp: e,
        label: u.name,
        wl_id: u.chromeStoreID,
        nome: i.name,
        picture: d,
        segmento: o ? l.find((m) => m.id === o).nome : "Outros",
        descricao: (s == null ? void 0 : s.description) || "",
        email: (s == null ? void 0 : s.email) || "",
        website: j,
        categoria: y,
        isBussines: I,
      };
      try {
        await b.post(
          `${w.backend}api/clientesRegistrados/set`,
          { ...U },
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
      } catch (m) {
        console.error(t.erroAoSalvarModeloCRM, m);
      }
    },
    R = async () => {
      if (
        (f(),
        chrome.storage.local.set({ initSystem: !0 }),
        x(),
        o === 1 / 0 || o === void 0 || o === null)
      )
        return;
      const e = JSON.parse(l.find((i) => i.id === o).arquivo);
      q(e.userTabs || []),
        chrome.storage.local.set(
          {
            guardaMsg: e.guardaMsg || [],
            categoria: e.categoria || [],
            medias: e.medias || [],
          },
          () => {
            P();
          }
        ),
        _({
          type: "Success",
          message: t.cRMAdicionadoAoSistema,
          position: "top-right",
        });
    };
  return a.jsxs("div", {
    className: "w-[600px] grid gap-4",
    children: [
      a.jsx(A, { children: t.segmentoDeAtuacao }),
      a.jsx(T, { children: t.voceReceberaUmCRM }),
      a.jsxs("div", {
        className: "flex gap-4",
        children: [
          a.jsx("input", {
            type: "text",
            value: n,
            onChange: (e) => g(e.target.value),
            placeholder: t.pesquisarPorSegmento,
            className: "input input-bordered input-sm w-full",
          }),
          n.length > 0 &&
            a.jsx(E, { name: t.limparBusca, funcao: () => g("") }),
        ],
      }),
      a.jsxs("div", {
        className: "grid gap-1 overflow-auto py-2",
        style: { maxHeight: "calc(100vh - 270px)" },
        children: [
          N.slice()
            .sort((e, i) => e.nome.localeCompare(i.nome))
            .map((e) =>
              a.jsx(
                "div",
                {
                  className: "py-2",
                  children: a.jsxs("label", {
                    htmlFor: e.id,
                    className: "flex items-center cursor-pointer ",
                    children: [
                      a.jsx(v, {
                        estado: o === e.id,
                        id: e.id,
                        checkedUpdade: () => h(e.id),
                      }),
                      a.jsx("span", { className: "pl-1", children: e.nome }),
                    ],
                  }),
                },
                e.id
              )
            ),
          a.jsx("div", {
            className: "py-2",
            children: a.jsxs("label", {
              htmlFor: "Infinity",
              className: "flex items-center cursor-pointer ",
              children: [
                a.jsx(v, {
                  estado: o === 1 / 0,
                  id: "Infinity",
                  checkedUpdade: () => h(1 / 0),
                }),
                a.jsx("span", { className: "pl-1", children: "Outros" }),
              ],
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex justify-end pt-2",
        children: [
          a.jsx(C, {
            name: t.cancel,
            funcao: () => {
              f(), chrome.storage.local.set({ initSystem: !0 }), x();
            },
          }),
          a.jsx(C, { name: t.select, funcao: R }),
        ],
      }),
    ],
  });
}
export { ae as default };
