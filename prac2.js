const sections = [
  {
    title: "LITTLE BIRD",
    image: "imagenes/littlebird.png",
    indtext:"click",
  },  
  {
    text: "Today, like every Sunday, I went out to see the little stalls at the antique market with my Dad. The warm spring sun lit up the street as I laughed with my father.",
    image: "imagenes/1.png",
    holdGif: "imagenes/1gif.gif",
    indtext:"hold",
  },
  {
    text: `On our way there, as we passed a coffee shop, I saw a little bird hopping around, trying to escape from a cat.
"Daddy, why doesn't the bird fly? The cat's going to eat it!"
"Maybe it has a broken wing, sweety." My father said as we got closer to the bird.`,
    image: "imagenes/2.png",
    video1: "imagenes/21.mp4",
    middleImage: "imagenes/2.2.png",
    video2: "imagenes/212.mp4",
    indtext:"click"
  },
  {
    text:`“Look, we’ll leave it up here so the cat can’t get to it.”
My father gently picked up the bird in his hands and placed it on a small ledge.
“Can’t we take it with us? The kitten will eat it otherwise.” I said with a pout.
“If we come back and it’s still here, we’ll take it home.”`,
    image: "imagenes/3.3.png",
    dragImage: "imagenes/3.png",
    finalImage: "imagenes/3.4.png",
    indtext:"drag"
  },
  
  {
    text: `All the way along, I couldn't wait to return, to see the little bird still there, and to know that I could take it home.
I laughed with my dad, asked him to buy me books from the little stalls, and told him how happy the bird would be living with us.`,
    image: "imagenes/5.png",
    clickGif: "imagenes/5gif.1.gif",
    clickGif2: "imagenes/5gif.2.gif",
    clickGif3: "imagenes/5gif.3.gif",
    indtext: "click"
  },
  {
    text: `On the way back, I tugged at my dad's arm to make him walk faster, eager to see if the chick was still where we'd left it.`,
    image: "imagenes/6.png",
    holdGif: "imagenes/6gif.gif",
    indtext: "hold"
  },
  {
    text: `When we arrived, I saw it, right where my dad had placed it, the cat wandering nearby with a frustraed expression at not being able to reach the birdie.
I turned to my dad with a smile, knowing that we could take the little bird home.`,
    image: "imagenes/7.png",
    dragImage: "imagenes/7.3.png",
    finalImage: "imagenes/7.2.png",
    indtext:"drag"
  },
  {
    text: `He picked it up gently and made a little nest for it inside the bag he carried, using a handkerchief to place the bird on top.
"You're going to love our house." I told the chick, who looked at me with its big eyes.`,
    backgroundImage: "imagenes/8.2.png",
    image: "imagenes/8.png",
    middleImage: "imagenes/8.3.png",
    indtext:"hold"
  },
  {
    text: `At home, we made a small nest out of a box and newspaper strips and put it on the balcony. 
    My sister and I watched how the little bird jumped and chirped happily.
"Tweet tweet!" my sister said between laughs, imitating the bird.`,
    image: "imagenes/9.png",
    clickSequence: [
      "imagenes/9.2.png",
      "imagenes/9.3.png",
      "imagenes/9.4.png",
    ],
    indtext:"click",
  },
  {
    text: `Days went by, and the little bird didn't seem to learn how to fly. He flapped his wings and hovered a little, but not for long.
"We'll have to buy him bird food after all. It looks like he's going to stay living with us." my mom said to my dad.`,
    image: "imagenes/10.png",
    holdGif: "imagenes/10gif.gif",
    indtext:"hold",
  },
  {
    text: `And so it was. The next morning, the four of us went out to buy food for the little bird.
  "Goodbye, birdie!" my sister and I said as we left.`,
    image: "imagenes/11.png",
    overlayImage: "imagenes/11.2.png",
    rotatable: true,
    indtext: "drag"
  },
  {
    text: `At the pet store, I couldn't stop talking about the little bird.
"It is going to love this food, he must be tired of eating bread." I said happily to my parents.`,
    image: "imagenes/12.png",
    bottomImages: {
      left: "imagenes/12.4.png",
      right: "imagenes/12.5.png"
    },
    indtext:"click"
  },
  {
    text: `When we got home, I ran straight to the balcony with the bird food to show the chick the gift we had bought him.`,
    image: "imagenes/13.png",
    arrowGifRight: "imagenes/13gif.gif",
    arrowGifLeft: "imagenes/13gif2.gif",
    indtext: "← →"
  },
  {
    text: `I searched for him and called it out, but the bird wasn't there anymore.`,
    image: "imagenes/14.png",
    randomImages: [
      "imagenes/14.1.png",
      "imagenes/14.2.png",
      "imagenes/14.3.png",
      "imagenes/14.4.png",
      "imagenes/14.5.png",
      "imagenes/14.6.png",
      "imagenes/14.7.png",
      "imagenes/14.8.png",
      "imagenes/14.9.png",
      "imagenes/14.10.png",
      "imagenes/14.11.png",
      "imagenes/14.12.png",
      "imagenes/14.13.png",
      "imagenes/14.14.png",
      "imagenes/14.15.png",
      "imagenes/14.16.png",
      "imagenes/14.17.png",
      "imagenes/14.18.png",
      "imagenes/14.19.png"
    ],
    finalRandomImage: "imagenes/14final.png",
    indtext: "click"
  },
  {
    text: `I ran crying into my mother's arms, and as she stroked my hair she told me,
"Don't be sad, sweetheart. The little bird learned to fly because you took such good care of it and now it can travel and see the world."`,
    image: "imagenes/15.png",
    clickSequence: [
      "imagenes/15.2.png",
      "imagenes/15.3.png",
      "imagenes/15.4.png"
    ],
    indtext:"click"
  },
  {
    text: `From that day on, for a while, a small bird would perch on the balcony railing and chirp for a few minutes before taking flight again.`,
    finalBird: true,
    indtext:"click"
  },
];

const container = document.getElementById('scroll-container');
const colors = ['color-0', 'color-1', 'color-2', 'color-3'];

sections.forEach((section, index) => {
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'section-container';
  
  const contentDiv = document.createElement('div');
  contentDiv.className = `section-content ${colors[index % colors.length]}`;
  contentDiv.dataset.index = index;
  
  const innerDiv = document.createElement('div');
  innerDiv.className = section.centered ? 'section-inner section-centered' : 'section-inner';
  
  if (section.title) {
    const title = document.createElement('h2');
    title.textContent = section.title;
    innerDiv.appendChild(title);
  }
  
  if (section.text) {
    const text = document.createElement('p');
    text.style.whiteSpace = 'pre-line';
    text.textContent = section.text;
    innerDiv.appendChild(text);
  }

  if (section.image) {
    const isImage14 = section.image === "imagenes/14.png" && section.randomImages;

    let img;
    let imgWrapper;

    // ***** CASO ESPECIAL LITTLE BIRD *****
    if (section.image === "imagenes/littlebird.png") {
      const littleImg = document.createElement('img');
      littleImg.src = section.image;
      littleImg.className = 'num-image clickable-image';
      littleImg.alt = 'Little bird';

      innerDiv.appendChild(littleImg);

      littleImg.addEventListener('click', () => {
        littleImg.src = 'imagenes/littlebirdgif.gif';

        const rect = littleImg.getBoundingClientRect();
        const parentRect = innerDiv.getBoundingClientRect();

        littleImg.style.position = 'absolute';
        littleImg.style.left = (rect.left - parentRect.left) + 'px';
        littleImg.style.top  = (rect.top  - parentRect.top)  + 'px';
        littleImg.style.transition = 'none';

        littleImg.classList.remove('clickable-image');
        littleImg.style.pointerEvents = 'none';

        let posX = rect.left - parentRect.left;
        let posY = rect.top  - parentRect.top;
        const speed = 5;
        const interval = 16;

        const flyInterval = setInterval(() => {
          posX -= speed;
          posY -= speed;

          littleImg.style.left = posX + 'px';
          littleImg.style.top  = posY + 'px';

          if (posX + littleImg.offsetWidth < 0 || posY + littleImg.offsetHeight < 0) {
            clearInterval(flyInterval);
            littleImg.remove();
          }
        }, interval);
      });

    } else if (isImage14) {
      // 14 con wrapper
      imgWrapper = document.createElement('div');
      imgWrapper.style.position = 'relative';
      imgWrapper.style.display = 'inline-block';

      img = document.createElement('img');
      img.src = section.image;
      img.className = section.video1 ? 'interactive-image' : 'num-image';
      img.alt = 'Little bird';

      imgWrapper.appendChild(img);
      innerDiv.appendChild(imgWrapper);

    } else if (section.image === "imagenes/8.png" && section.backgroundImage) {
      // 8: 8.2 detrás, 8.3 en medio (sube/baja), 8 delante
      const wrapper8 = document.createElement('div');
      wrapper8.style.position = 'relative';
      wrapper8.style.display = 'inline-block';
      wrapper8.style.overflow = 'hidden';

      const bgImg = document.createElement('img');
      bgImg.src = section.backgroundImage;
      bgImg.alt = 'background 8.2';
      bgImg.className = 'num-image';
      bgImg.style.position = 'absolute';
      bgImg.style.top = '0';
      bgImg.style.left = '0';
      bgImg.style.zIndex = '0';

      let midImg = null;
      if (section.middleImage) {
        midImg = document.createElement('img');
        midImg.src = section.middleImage;
        midImg.alt = 'middle 8.3';
        midImg.className = 'num-image';
        midImg.style.position = 'absolute';
        midImg.style.left = '0';
        midImg.style.top = '0';
        midImg.style.zIndex = '1';
        midImg.style.cursor = 'pointer';
      }

      img = document.createElement('img');
      img.src = section.image;
      img.alt = 'Little bird';
      img.className = 'num-image';
      img.style.position = 'relative';
      img.style.zIndex = '2';

      wrapper8.appendChild(bgImg);
      if (midImg) wrapper8.appendChild(midImg);
      wrapper8.appendChild(img);
      innerDiv.appendChild(wrapper8);

      // 8.3 sube mientras se mantiene pulsado SOBRE LA 8 y al soltar baja de nuevo
      if (midImg) {
        let upIntervalId = null;
        let downIntervalId = null;
        const originalTop = 0;
        const minTop = -80;
        const speed = 2;
        const tick = 16;

        const clearUp = () => {
          if (upIntervalId !== null) {
            clearInterval(upIntervalId);
            upIntervalId = null;
          }
        };

        const clearDown = () => {
          if (downIntervalId !== null) {
            clearInterval(downIntervalId);
            downIntervalId = null;
          }
        };

        const startHold = (e) => {
          e.preventDefault();
          clearDown();
          if (upIntervalId !== null) return;

          upIntervalId = setInterval(() => {
            const currentTop = parseInt(getComputedStyle(midImg).top, 10) || 0;
            let newTop = currentTop - speed;

            if (newTop <= minTop) {
              newTop = minTop;
              midImg.style.top = newTop + 'px';
              clearUp();
              return;
            }

            midImg.style.top = newTop + 'px';
          }, tick);
        };

        const startDown = () => {
          clearUp();
          if (downIntervalId !== null) return;

          downIntervalId = setInterval(() => {
            const currentTop = parseInt(getComputedStyle(midImg).top, 10) || 0;

            if (currentTop >= originalTop) {
              midImg.style.top = originalTop + 'px';
              clearDown();
              return;
            }

            const newTop = currentTop + speed;
            midImg.style.top = newTop + 'px';
          }, tick);
        };

        const stopHold = () => {
          startDown();
        };

        img.addEventListener('mousedown', startHold);
        document.addEventListener('mouseup', stopHold);
        img.addEventListener('mouseleave', stopHold);

        img.addEventListener('touchstart', startHold, { passive: false });
        document.addEventListener('touchend', stopHold);
        document.addEventListener('touchcancel', stopHold);
      }

    } else if (section.image === "imagenes/12.png" && section.bottomImages) {
      // 12: imagen principal a un lado, 12.4 y 12.5 en columna al otro
      const wrapper12 = document.createElement('div');
      wrapper12.className = 'section-12-wrapper';

      const leftCol = document.createElement('div');
      leftCol.className = 'section-12-left';

      const mainImg12 = document.createElement('img');
      mainImg12.src = section.image;
      mainImg12.className = 'num-image';
      mainImg12.alt = 'Little bird';
      leftCol.appendChild(mainImg12);

      const rightCol = document.createElement('div');
      rightCol.className = 'section-12-right';

      if (section.bottomImages.left) {
        const topImg = document.createElement('img');
        topImg.src = section.bottomImages.left;
        topImg.className = 'bottom-image clickable-image';
        topImg.alt = 'Top right image';
        
        topImg.addEventListener('click', () => {
          mainImg12.src = 'imagenes/12.2.png';
        });

        rightCol.appendChild(topImg);
      }

      if (section.bottomImages.right) {
        const bottomImg = document.createElement('img');
        bottomImg.src = section.bottomImages.right;
        bottomImg.className = 'bottom-image clickable-image';
        bottomImg.alt = 'Bottom right image';
        
        bottomImg.addEventListener('click', () => {
          mainImg12.src = 'imagenes/12.3.png';
        });

        rightCol.appendChild(bottomImg);
      }

      wrapper12.appendChild(leftCol);
      wrapper12.appendChild(rightCol);
      innerDiv.appendChild(wrapper12);

    } else {
      // resto de imágenes
      img = document.createElement('img');
      img.src = section.image;
      img.className = section.video1 ? 'interactive-image' : 'num-image';
      img.alt = 'Little bird';
      innerDiv.appendChild(img);
    }

    // CLICK GIF (5)
    if (section.clickGif && section.image !== "imagenes/littlebird.png") {
      const originalSrc = section.image;
      const gifSrc1 = section.clickGif;
      const gifSrc2 = section.clickGif2 || section.clickGif;
      const gifSrc3 = section.clickGif3 || section.clickGif2 || section.clickGif;
      let state = 0;

      img.classList.add('clickable-image');

      function handleClick() {
        if (state === 0) {
          img.src = gifSrc1;
          state = 1;
        } else if (state === 1) {
          img.src = gifSrc2;
          state = 2;
        } else if (state === 2) {
          img.src = gifSrc3;
          state = 3;
          img.removeEventListener('click', handleClick);
        }
      }

      img.addEventListener('click', handleClick);
    }

    // SECUENCIAS (9, 15)
    if (section.clickSequence && Array.isArray(section.clickSequence)) {
      const originalSrc = section.image;
      const sequence = section.clickSequence;
      let clickIndex = -1;

      img.classList.add('clickable-image');

      img.addEventListener('click', function () {
        clickIndex++;

        if (section.image === "imagenes/15.png" && clickIndex >= 3) {
          img.style.cursor = 'default';
          return;
        }

        if (clickIndex >= sequence.length) {
          img.src = originalSrc;
          clickIndex = -1;
        } else {
          img.src = sequence[clickIndex];
        }
      });
    }

    // RANDOM IMAGES FOR IMAGE 14
    if (isImage14) {
      const pool = [...section.randomImages];
      let finished = false;

      img.classList.add('clickable-image');

      img.addEventListener('click', function () {
        if (finished) return;

        if (pool.length > 0) {
          const randomIndex = Math.floor(Math.random() * pool.length);
          const nextSrc = pool.splice(randomIndex, 1)[0];

          const layer = document.createElement('img');
          layer.src = nextSrc;
          layer.className = 'random-layer';
          layer.alt = 'Random 14 layer';

          imgWrapper.appendChild(layer);
        } else {
          const layers = imgWrapper.querySelectorAll('.random-layer');
          layers.forEach(layerEl => layerEl.remove());

          const finalLayer = document.createElement('img');
          finalLayer.src = section.finalRandomImage;
          finalLayer.className = 'random-layer random-layer-final';
          finalLayer.alt = 'Final 14 image';

          imgWrapper.appendChild(finalLayer);

          finished = true;
          img.style.cursor = 'default';
        }
      });
    }

    // 13: flechas
    if (section.image === "imagenes/13.png" && (section.arrowGifRight || section.arrowGifLeft)) {
      img.style.position = 'relative';
      img.style.left = '0px';
      img.style.transition = 'left 0.05s linear';

      const originalSrc13 = section.image;
      const gifRight = section.arrowGifRight || originalSrc13;
      const gifLeft  = section.arrowGifLeft  || originalSrc13;

      let posX = 0;
      const step = 5;
      const maxOffset = 280;

      let leftDown = false;
      let rightDown = false;

      function updateSrc() {
        if (leftDown) {
          if (img.src !== gifLeft) img.src = gifLeft;
        } else if (rightDown) {
          if (img.src !== gifRight) img.src = gifRight;
        } else {
          if (img.src !== originalSrc13) img.src = originalSrc13;
        }
      }

      window.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          if (!leftDown) {
            leftDown = true;
            rightDown = false;
            updateSrc();
          }
          posX = Math.max(-maxOffset, posX - step);
          img.style.left = posX + 'px';
        } else if (e.key === 'ArrowRight') {
          if (!rightDown) {
            rightDown = true;
            leftDown = false;
            updateSrc();
          }
          posX = Math.min(maxOffset, posX + step);
          img.style.left = posX + 'px';
        }
      });

      window.addEventListener('keyup', function (e) {
        if (e.key === 'ArrowLeft') {
          leftDown = false;
          updateSrc();
        } else if (e.key === 'ArrowRight') {
          rightDown = false;
          updateSrc();
        }
      });
    }

    // HOLD GIF (1, 6, 10)
    if (section.holdGif && section.image !== "imagenes/littlebird.png") {
      const originalSrc = section.image;
      const gifSrc = section.holdGif;
      
      img.classList.add('clickable-image');
      
      img.addEventListener('mousedown', function() {
        img.src = gifSrc;
      });
      
      img.addEventListener('mouseup', function() {
        img.src = originalSrc;
      });
      
      img.addEventListener('mouseleave', function() {
        img.src = originalSrc;
      });
      
      img.addEventListener('touchstart', function(e) {
        e.preventDefault();
        img.src = gifSrc;
      });
      
      img.addEventListener('touchend', function(e) {
        e.preventDefault();
        img.src = originalSrc;
      });
    }
    
    // VIDEOS (2)
    if (section.video1 && section.video2) {
      img.classList.add('clickable-image');
      
      function createClickableImage(imgSrc, videoSrc, nextImageSrc) {
        const clickImg = document.createElement('img');
        clickImg.src = imgSrc;
        clickImg.className = 'interactive-image clickable-image';
        
        clickImg.addEventListener('click', function() {
          const video = document.createElement('video');
          video.src = videoSrc;
          video.className = 'interactive-video';
          video.autoplay = true;
          video.style.cursor = 'default';
          
          clickImg.replaceWith(video);
          
          video.addEventListener('ended', function() {
            const nextImg = createClickableImage(
              nextImageSrc, 
              nextImageSrc === section.image ? section.video1 : section.video2,
              nextImageSrc === section.image ? section.middleImage : section.image
            );
            video.replaceWith(nextImg);
          });
        });
        
        return clickImg;
      }
      
      img.addEventListener('click', function() {
        const video = document.createElement('video');
        video.src = section.video1;
        video.className = 'interactive-video';
        video.autoplay = true;
        video.style.cursor = 'default';
        
        img.replaceWith(video);
        
        video.addEventListener('ended', function() {
          const nextImg = createClickableImage(section.middleImage, section.video2, section.image);
          video.replaceWith(nextImg);
        });
      });
    }

    // DRAG IMAGE (3)
    if (section.dragImage && section.finalImage) {
      const dragImg = document.createElement('img');
      dragImg.src = section.dragImage;
      dragImg.className = 'drag-image';
      dragImg.draggable = true;
      dragImg.alt = 'Drag me';
      
      const originalDragSrc = section.dragImage;
      const activeDragSrc = section.dragImageActive || section.dragImage;
      
      img.classList.add('drop-zone');
      
      dragImg.addEventListener('dragstart', function(e) {
        e.dataTransfer.effectAllowed = 'move';
        dragImg.src = activeDragSrc;
        dragImg.style.opacity = '0.5';
      });
      
      dragImg.addEventListener('dragend', function() {
        dragImg.src = originalDragSrc;
        dragImg.style.opacity = '1';
      });
      
      img.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        img.style.border = '3px dashed #6B3F2B';
      });
      
      img.addEventListener('dragleave', function() {
        img.style.border = 'none';
      });
      
      img.addEventListener('drop', function(e) {
        e.preventDefault();
        img.style.border = 'none';
        img.src = section.finalImage;
        dragImg.remove();
        img.style.cursor = 'default';
        img.draggable = false;
      });
      
      innerDiv.appendChild(dragImg);
    }
  }

  // OVERLAY (11.2)
  if (section.overlayImage && section.rotatable) {
    const overlayImg = document.createElement('img');
    overlayImg.src = section.overlayImage;
    overlayImg.className = 'overlay-rotatable';
    overlayImg.alt = 'Rotate me';
    
    let isDragging = false;
    let startAngle = 0;
    let currentRotation = 0;
    
    const getAngle = (e, element) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    };
    
    const startRotate = (e) => {
      isDragging = true;
      startAngle = getAngle(e, overlayImg) - currentRotation;
      overlayImg.style.cursor = 'grabbing';
      e.preventDefault();
    };
    
    const rotate = (e) => {
      if (!isDragging) return;
      const angle = getAngle(e, overlayImg);
      currentRotation = angle - startAngle;
      overlayImg.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
      e.preventDefault();
    };
    
    const stopRotate = () => {
      isDragging = false;
      overlayImg.style.cursor = 'grab';
    };
    
    overlayImg.addEventListener('mousedown', startRotate);
    document.addEventListener('mousemove', rotate);
    document.addEventListener('mouseup', stopRotate);
    
    overlayImg.addEventListener('touchstart', startRotate);
    document.addEventListener('touchmove', rotate);
    document.addEventListener('touchend', stopRotate);
    
    innerDiv.appendChild(overlayImg);
  }

  // ANIMACIÓN FINAL (sección centrada)
  if (section.finalBird) {
    contentDiv.style.cursor = 'pointer';
    let hasPlayed = false;

    contentDiv.addEventListener('click', () => {
      if (hasPlayed) return;
      hasPlayed = true;

      const animWrapper = document.createElement('div');
      animWrapper.style.position = 'relative';
      animWrapper.style.width = '100%';
      animWrapper.style.height = '100%';

      contentDiv.removeChild(innerDiv);
      animWrapper.appendChild(innerDiv);
      contentDiv.appendChild(animWrapper);

      const birdGif = document.createElement('img');
      birdGif.src = 'imagenes/littlebirdgif2.gif';
      birdGif.alt = 'Little bird flying';
      birdGif.className = 'num-image';
      birdGif.style.position = 'absolute';
      birdGif.style.top = '50%';
      birdGif.style.left = '-400px';
      birdGif.style.transform = 'translateY(-50%)';
      birdGif.style.pointerEvents = 'none';
      animWrapper.appendChild(birdGif);

      const targetX = (animWrapper.clientWidth - 350) / 2;
      let posX = -400;
      const speed = 8;
      const interval = 16;

      const flyInterval = setInterval(() => {
        posX += speed;
        birdGif.style.left = posX + 'px';

        if (posX >= targetX) {
          clearInterval(flyInterval);
          birdGif.style.left = targetX + 'px';
          birdGif.src = 'imagenes/littlebird2.png';
        }
      }, interval);
    });
  }

  // indtext
  if (section.indtext) {
    const ind = document.createElement('p');
    ind.textContent = section.indtext;
    ind.className = 'indtext';
    innerDiv.appendChild(ind);
  }

  contentDiv.appendChild(innerDiv);
  sectionDiv.appendChild(contentDiv);
  container.appendChild(sectionDiv);
});

// Scroll animation
function updateSections() {
  const sectionContainers = document.querySelectorAll('.section-container');
  
  sectionContainers.forEach((container) => {
    const content = container.querySelector('.section-content');
    const rect = container.getBoundingClientRect();
    const containerTop = rect.top;
    const containerHeight = rect.height;
    
    const progress = Math.max(0, Math.min(1, -containerTop / containerHeight));
    
    const scale = 1 - (progress * 0.2);
    
    const opacity = 1 - (progress * 0.4);
    
    content.style.transform = `scale(${scale})`;
    content.style.opacity = opacity;
  });
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateSections();
      ticking = false;
    });
    ticking = true;
  }
});

updateSections();
