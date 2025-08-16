// 🚀 Generador cockpitizado de código embed para badges SVG

document.addEventListener("DOMContentLoaded", () => {
  const inputURL = document.getElementById("badge-url");
  const btnGenerar = document.getElementById("btn-generar");
  const preview = document.getElementById("preview-svg");
  const embedHTML = document.getElementById("embed-html");
  const embedMD = document.getElementById("embed-md");
  const embedJSX = document.getElementById("embed-jsx");
  const log = document.getElementById("log-estado");

  btnGenerar.addEventListener("click", async () => {
    const url = inputURL.value.trim();
    log.textContent = "🔍 Validando URL…";

    const resultado = await validarBadgeSVG(url);
    if (!resultado.valido) {
      log.textContent = `❌ ${resultado.motivo}`;
      preview.src = "";
      embedHTML.value = "";
      embedMD.value = "";
      embedJSX.value = "";
      return;
    }

    log.textContent = "✅ URL válida. Generando código embed…";
    preview.src = url;

    const embed = generarEmbed(url);
    embedHTML.value = embed.html;
    embedMD.value = embed.markdown;
    embedJSX.value = embed.jsx;
  });
});

async function validarBadgeSVG(url) {
  const esSVG = url.toLowerCase().endsWith(".svg");
  const esURL = /^https:\/\/[^ "]+$/.test(url);
  if (!esSVG || !esURL) return { valido: false, motivo: "URL inválida o no termina en .svg" };

  try {
    const res = await fetch(url, { method: "HEAD" });
    const tipo = res.headers.get("Content-Type");
    if (!res.ok || tipo !== "image/svg+xml") {
      return { valido: false, motivo: `Error HTTP ${res.status} o tipo inválido (${tipo})` };
    }
    return { valido: true };
  } catch (e) {
    return { valido: false, motivo: "Error de red o CORS" };
  }
}

function generarEmbed(url) {
  return {
    html: `<img src="${url}" alt="Badge SVG">`,
    markdown: `![Badge SVG](${url})`,
    jsx: `<img src="${url}" alt="Badge SVG" />`
  };
}
