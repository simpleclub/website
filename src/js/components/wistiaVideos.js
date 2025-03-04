import '../../css/components/_wistiaVideos.scss'

(function () {
  const wistiaPlayers = document.querySelectorAll("wistia-player");
  if (wistiaPlayers.length === 0) return; // Exit if no videos found


  let scriptLoaded = false; // Track if main Wistia player.js is loaded

  const loadWistiaScripts = (player) => {
    const mediaId = player.getAttribute("media-id");
    if (!mediaId) return; // Ensure media-id exists


    // Load Wistia player.js once
    if (!scriptLoaded) {
      scriptLoaded = true;
      const playerScript = document.createElement("script");
      playerScript.src = "https://fast.wistia.com/player.js";
      playerScript.async = true;
      document.body.appendChild(playerScript);
    }

    // Load the video-specific script
    const videoScript = document.createElement("script");
    videoScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
    videoScript.async = true;
    videoScript.type = "module";
    document.body.appendChild(videoScript);
  };

  // **Use IntersectionObserver to lazy load videos**
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadWistiaScripts(entry.target);
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      });
    },
    { rootMargin: "150px" } // Load slightly before it enters view
  );

  // Observe each wistia-player element
  wistiaPlayers.forEach((player) => observer.observe(player));
})();
