/* filepath: d:\markdown-previewer\js\script.js */
document.addEventListener("DOMContentLoaded", function () {
  const markdownInput = document.getElementById("markdown-input");
  const previewOutput = document.getElementById("preview-output");
  const clearBtn = document.getElementById("clear-btn");

  // Configure marked options to integrate with highlight.js
  marked.setOptions({
    breaks: true,
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return code;
    },
  });

  // Function to update preview
  function updatePreview() {
    const markdownText = markdownInput.value;
    const html = marked.parse(markdownText);
    previewOutput.innerHTML = html;
  }

  // Update preview on input
  markdownInput.addEventListener("input", updatePreview);

  // Clear textarea and preview
  clearBtn.addEventListener("click", function () {
    markdownInput.value = "";
    updatePreview();
  });

  // Initial preview update
  updatePreview();
});
