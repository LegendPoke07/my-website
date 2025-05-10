// Wait until the DOM is fully loaded
window.onload = function () {
  // Element references
  const continueBtn = document.getElementById("continueBtn");
  const nextStageBtn = document.getElementById("nextStage");
  const galleryStartBtn = document.getElementById("galleryStart");
  const galleryImage = document.getElementById("galleryImage");
  const galleryText = document.getElementById("galleryText");
  const nextImageBtn = document.getElementById("nextImage");

  const stage1 = document.getElementById("stage1");
  const stage2 = document.getElementById("stage2");
  const stage3 = document.getElementById("stage3");
  const gallery = document.getElementById("gallery");

  // Image data
  const images = [
    {
      src: "image1.jpg",
      text: "Maa ke bina zindagi adhoori si lagti hai,\nUski har baat, har dua zaroori si lagti hai,\nWoh roti bhi hai toh pyaar barsaati hai,\nMaa sab kuch kehkar bhi, kuch na keh paati hai."
    },
    {
      src: "image2.jpg",
      text: "Maa ka dil samundar se gehra hai,\nHar dard woh chup chaap seh jaata hai.\nJo maa ke paas hota hai, woh kabhi tanha nahi hota,\nMaa khud bhookhi reh jaaye, magar humein kabhi bhookha nahi sota."
    },
    {
      src: "image4.jpg",
      text: "Na chahiye sona, na chandi ka haar,\nBas maa ke saath ho har ek tyohar.\nMaa ke kadmon mein jannat basti hai,\nUski muskurahat meri taqdeer likhti hai.."
    }
  ];

  let current = 0;

  // Show the current image and text
  function showImage() {
    if (current < images.length) {
      galleryImage.src = images[current].src;
      galleryText.innerHTML = images[current].text.replace(/\n/g, "<br>");
    } else {
      nextImageBtn.style.display = "none";
      galleryText.innerHTML = "Love you always ❤️";
    }
  }

  // Event listeners
  if (continueBtn) {
    continueBtn.onclick = () => {
      stage1?.classList.add("hidden");
      stage2?.classList.remove("hidden");
    };
  }

  if (nextStageBtn) {
    nextStageBtn.onclick = () => {
      stage2?.classList.add("hidden");
      stage3?.classList.remove("hidden");
    };
  }

  if (galleryStartBtn) {
    galleryStartBtn.onclick = () => {
      stage3?.classList.add("hidden");
      gallery?.classList.remove("hidden");
      showImage();
    };
  }

  if (nextImageBtn) {
    nextImageBtn.onclick = () => {
      current++;
      showImage();
    };
  }
};
