
        // Image Gallery JavaScript
        function showImage(src) {
            document.getElementById('frontImage').src = src;
            document.getElementById('frontThumnail').style.display = 'flex';
        }

        // let thumbnail = document.getElementsByClassName("thumbnail")
        // thumbnail.addEventListener("click", (e)=>{
        //     console.log(this.classname)

        // })
        // function enlargeImage(src) {
        //     img.addEventListener("click", ()=>{

        //     })
        //     document.getElementById('enlargedImage').src = src;
        //     document.getElementById('enlargedImageContainer').style.display = 'flex';
        // }

        function closeShowImage() {
            document.getElementById('frontThumnail').style.display = 'none';
        }

        // Slideshow JavaScript
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }