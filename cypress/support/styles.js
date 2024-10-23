Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe o teste
  return false;
});

// remove -type -get -contains -click
let style = top.document.createElement("style");
const selector = `#unified-reporter .collapsible-content ul > li`;
const rule = `div > span > div > span.command-info`;
const beforeSpan = `span.command-method::before {content: '';}`;
style.innerHTML = `${selector} ${rule} ${beforeSpan}`;
style.setAttribute("data-hover-black-delete-before", "");
top.document.head.appendChild(style);

const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = `.command-name-request, .command-name-xhr, .command-name-uncaught-exception, .command-name-new-url { display: none };`;
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}
