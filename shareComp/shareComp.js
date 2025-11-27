
(function (global) {

  async function copyShareLinkToClipboard(text) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      } else {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        return success;
      }
    } catch (error) {
      console.error("Failed to copy share link:", error);
      return false;
    }
  }

 
  function initShareSection(options = {}) {
    const {
      selector = ".share-section",
      title = document.title,
      url = window.location.href,
      root = document, 
    } = options;

    const pageUrl = encodeURIComponent(url);
    const pageTitle = encodeURIComponent(title);

    const shareUrls = {
      fb: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      x: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`,
      whatsapp: `https://wa.me/?text=${pageTitle}%20${pageUrl}`,
      telegram: `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`,
    };


    const container = root.querySelector(selector);
    if (!container) return;


    Object.entries(shareUrls).forEach(([platform, shareUrl]) => {
      const button = container.querySelector(`.share-button.${platform}`);
      if (button) {
        button.href = shareUrl;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
      }
    });


    const copyLinkBtn = container.querySelector(".share-button.copylink");
    if (copyLinkBtn) {
      copyLinkBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const success = await copyShareLinkToClipboard(url);
        if (!success) {
          alert("ვერ მოხერხდა ბმულის კოპირება");
        }
      });
    }
  }


  global.ShareWidget = {
    initShareSection,
  };
})(window);
