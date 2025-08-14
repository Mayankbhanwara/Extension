document.getElementById("captureBtn").addEventListener("click", () => {
  chrome.tabs.captureVisibleTab(null, { format: "png" }, function(dataUrl) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "screenshot.png";
    link.click();
  });
});