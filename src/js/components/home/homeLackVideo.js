document.querySelectorAll('.home-lack_card-media video').forEach(video => {
  const isMobileOrTablet = () => window.innerWidth <= 1024; // Adjust breakpoint as needed

  const enableHoverPlayPause = () => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });
    video.addEventListener('mouseleave', () => {
      video.pause();
    });
  };



  const disableHoverPlayPause = () => {
    video.removeEventListener('mouseenter', () => video.play());
    video.removeEventListener('mouseleave', () => video.pause());
    video.play();
  };

  const handleVideoBehavior = () => {
    if (isMobileOrTablet()) {
      disableHoverPlayPause();
    } else {
      video.pause(); // Ensure the video doesn't autoplay on desktops initially
      enableHoverPlayPause();
    }
  };

  // Initial setup
  handleVideoBehavior();

  // Update behavior on window resize
  window.addEventListener('resize', handleVideoBehavior);
});
