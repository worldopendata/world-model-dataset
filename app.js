const state = { datasets: [], query: "", task: "", domain: "" };
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

function fillSelect(selector, values) {
  const select = $(selector);
  values.sort().forEach((value) => select.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`));
}

function card(dataset) {
  const tags = [...dataset.domain.map((x) => `<span class="tag domain">${escapeHtml(x)}</span>`), ...dataset.modalities.slice(0, 5).map((x) => `<span class="tag">${escapeHtml(x)}</span>`)].join("");
  const links = Object.entries(dataset.links).map(([key, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${({homepage:"主页",paper:"论文",code:"代码",download:"下载"})[key] || key} ↗</a>`).join("");
  return `<article class="card">
    <div class="card-top"><div><span class="task">${escapeHtml(dataset.primaryTaskZh)}</span><h3>${escapeHtml(dataset.name)}</h3><span class="verdict">${escapeHtml(dataset.verdict)}</span></div><span class="year">${dataset.year}</span></div>
    <p class="summary">${escapeHtml(dataset.summary)}</p><div class="tags">${tags}</div>
    <div class="details"><div class="detail"><b>数据规模</b><span>${escapeHtml(dataset.scale)}</span></div><div class="detail"><b>机构</b><span>${escapeHtml(dataset.organizations)}</span></div><div class="detail"><b>访问方式</b><span>${escapeHtml(dataset.access)}</span></div><div class="detail"><b>许可说明</b><span>${escapeHtml(dataset.license)}</span></div></div>
    <div class="note"><strong>WM 适用建议</strong><br>${escapeHtml(dataset.wmNote)}</div>
    <div class="card-actions"><span class="stars" aria-label="推荐度 ${dataset.rating} 星">${"★".repeat(dataset.rating)}${"☆".repeat(5-dataset.rating)}</span>${links}</div>
  </article>`;
}

function render() {
  const query = state.query.trim().toLowerCase();
  const shown = state.datasets.filter((d) => {
    const searchable = [d.name, d.summary, d.primaryTask, d.primaryTaskZh, d.organizations, ...d.domain, ...d.modalities].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) && (!state.task || d.primaryTask === state.task) && (!state.domain || d.domain.includes(state.domain));
  }).sort((a,b) => b.year-a.year || a.name.localeCompare(b.name));
  $("#datasetGrid").innerHTML = shown.map(card).join("");
  $("#resultCount").textContent = `${shown.length} 个数据集`;
  $("#emptyState").hidden = shown.length > 0;
}

async function init() {
  try {
    const response = await fetch("datasets.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.datasets = await response.json();
    fillSelect("#taskFilter", [...new Set(state.datasets.map((d) => d.primaryTask))]);
    fillSelect("#domainFilter", [...new Set(state.datasets.flatMap((d) => d.domain))]);
    $("#metricDatasets").textContent = String(state.datasets.length).padStart(2,"0");
    $("#metricTasks").textContent = String(new Set(state.datasets.map((d) => d.primaryTask)).size).padStart(2,"0");
    $("#metricDomains").textContent = String(new Set(state.datasets.flatMap((d) => d.domain)).size).padStart(2,"0");
    render();
  } catch (error) {
    $("#emptyState").hidden = false;
    $("#emptyState").textContent = `数据加载失败：${error.message}`;
  }
}

$("#searchInput").addEventListener("input", (e) => { state.query = e.target.value; render(); });
$("#taskFilter").addEventListener("change", (e) => { state.task = e.target.value; render(); });
$("#domainFilter").addEventListener("change", (e) => { state.domain = e.target.value; render(); });
$("#resetButton").addEventListener("click", () => { state.query = state.task = state.domain = ""; $("#searchInput").value = $("#taskFilter").value = $("#domainFilter").value = ""; render(); });
init();
