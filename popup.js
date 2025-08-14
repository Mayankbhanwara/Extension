document.getElementById("copyBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = tab.url;

  // Use the clipboard API
  try {
    await navigator.clipboard.writeText(url);
    document.getElementById("status").textContent = "URL copied to clipboard!";
  } catch (err) {
    document.getElementById("status").textContent = "Failed to copy URL.";
  }
});