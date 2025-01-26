const textInput = document.getElementById("input");
const copyBtn = document.getElementById("copy");
const pasteArea = document.getElementById("pasteArea");
const pasteBtn = document.getElementById("paste");

// Copy text from input
copyBtn.addEventListener("click", () => {
  textInput.select();
  navigator.clipboard.writeText(textInput.value).then(() => {
    alert("Text copied to clipboard!");
  });
});

// Paste text into textarea
pasteBtn.addEventListener("click", async () => {
  const text = await navigator.clipboard.readText();
  pasteArea.value = text;
});
