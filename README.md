# 📦 ComercialX Cockpit

Cockpit técnico federado para validación remota, auditoría visual y publicación multiplataforma en GitHub Pages, Netlify y Railway.

---

## 🌐 Países y Entornos Federados

| País     | Tienda     | Entorno     | Visor | Log | Embed | Badge |
|----------|------------|-------------|-------|-----|-------|-------|
| 🇨🇱 Chile   | Santiago   | Producción  | [Visor](visor-chile.html) | [Log](logs/log-chile.txt) | [Embed](embeds/embed-chile.html) | ![Chile](badges/badge-chile.svg) |
| 🇲🇽 México  | CDMX       | Staging     | [Visor](visor-mexico.html) | [Log](logs/log-mexico.txt) | [Embed](embeds/embed-mexico.html) | ![México](badges/badge-mexico.svg) |
| 🇪🇸 España  | Madrid     | QA          | [Visor](visor-espana.html) | [Log](logs/log-espana.txt) | [Embed](embeds/embed-espana.html) | ![España](badges/badge-españa.svg) |

---

## 📊 Dashboard Técnico

- [Dashboard Monitor](dashboard-monitor.html)
- [dashboard.csv](dashboard.csv)
- [dashboard-maestro-normalizado.json](dashboard-maestro-normalizado.json)

---

## 🛠️ Scripts Técnicos

| Script | Descripción |
|--------|-------------|
| `generador-dashboard-csv.sh` | Genera `dashboard.csv` desde JSON maestro |
| `validador-csv.sh` | Valida estructura y encoding del CSV |
| `validador-remoto.sh` | Ejecuta validación remota por país |
| `verificador-submodulo.sh` | Verifica estado del submódulo técnico |
| `visor-submodulo.html` | Visor visual del estado del submódulo |

---

## 🚀 Deploy y Trazabilidad

- Publicado en: [GitHub Pages](https://acserne.github.io/comercialx-demo/)
- Historial completo: [GitHub Actions](https://github.com/ACSERNE/comercialx-demo/actions)
- Últimos intentos de deploy:
  - ❌ #34 – Fallido
  - ❌ #33 – Fallido
  - ❌ #32 – Fallido
  - ❌ #28 – Fallido

---

## 🤝 Contribuir

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ACSERNE/comercialx-demo.git
   cd comercialx-demo
   ```

2. Ejecuta validaciones:
   ```bash
   bash validador-remoto.sh
   bash verificador-submodulo.sh
   ```

3. Genera artefactos:
   ```bash
   bash generador-dashboard-csv.sh
   ```

4. Haz commit y push:
   ```bash
   git add .
   git commit -m "Iteración cockpitizada"
   git push origin gh-pages
   ```

---

## 🧭 Federado por ComercialX Cockpit

Validación remota, trazabilidad visual y auditoría extendida para Chile, México y España.  
Compatible con GitHub Pages, Netlify y Railway.  
Reproducible en CLI, web y entorno federado.

---

## 🔗 Enlaces Auditables

- [Dashboard Técnico](dashboard.csv)
- [JSON Maestro Normalizado](dashboard-maestro-normalizado.json)
- [Visor Submódulo](visor-submodulo.html)
- [Estado Federado](status.md)
- [Log de Validación](log-validacion.csv)
