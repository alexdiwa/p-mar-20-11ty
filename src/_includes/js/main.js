function toggleDetailsAriaExpanded(detailsId, summaryId) {
  const details = document.getElementById(detailsId);
  const summary = document.getElementById(summaryId);
  (details.open) ? summary.setAttribute('aria-expanded', 'false') : summary.setAttribute('aria-expanded', 'true');
}