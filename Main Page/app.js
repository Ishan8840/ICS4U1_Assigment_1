const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCount = 0;
    arrow.addEventListener("click", ()=> {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCount++;
        if(itemNum - (3 + clickCount) + (3-ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCount = 0;
        }
    });
});

const arrowUp = document.querySelectorAll(".arrow-up");
const cover = document.querySelectorAll(".cover-container");

arrowUp.forEach((arrow, i) => {
    const hasClicked = sessionStorage.getItem(`coverClicked-${i}`);

    if (hasClicked) {
        cover[i].style.display = "none"; // Hide cover
    } else {
        cover[i].style.display = "block"; // Show cover
    }

    arrow.addEventListener("click", () => {
        if (!hasClicked) {
            cover[i].style.transform = `translateY(-100%)`;
            sessionStorage.setItem(`coverClicked-${i}`, 'true');
        }
    });
});
