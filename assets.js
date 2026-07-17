function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]));
}

function money(cents) {
  return "$" + (cents / 100).toFixed(2);
}

function bindCopyButton(button, getText, labelCopied) {
  const labelDefault = button.textContent;
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(getText()).then(() => {
      button.textContent = labelCopied || "Copied!";
      setTimeout(() => { button.textContent = labelDefault; }, 1500);
    }).catch(() => {
      button.textContent = "Couldn't copy";
      setTimeout(() => { button.textContent = labelDefault; }, 1500);
    });
  });
}
