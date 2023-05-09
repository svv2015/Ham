let slider = 1;
                function showSlider(item) {
                    const ollSlids = document.querySelectorAll('.item-carousel-info');
                    const ollSlidsPhoto = document.querySelectorAll('.item');

                    if (item > ollSlids.length) {
                        slider = 1;
                    }
                    if (item < 1) {
                        slider = ollSlids.length
                    }
                    console.log(slider);
                }
                function plus() {
                    const ollSlids = document.querySelectorAll('.item-carousel-info');
                    const ollSlidsPhoto = document.querySelectorAll('.item');

                    ollSlids[slider - 1].classList.toggle('display-none')
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')

                    showSlider(slider += 1)
                    ollSlids[slider - 1].classList.toggle('display-none')
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')


                }
                function minus() {
                    const ollSlids = document.querySelectorAll('.item-carousel-info');
                    const ollSlidsPhoto = document.querySelectorAll('.item');
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')

                    ollSlids[slider - 1].classList.toggle('display-none')
                    showSlider(slider -= 1)
                    ollSlids[slider - 1].classList.toggle('display-none')
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')
                }
                function clickOnSlider(i) {
                    const ollSlids = document.querySelectorAll('.item-carousel-info');
                    const ollSlidsPhoto = document.querySelectorAll('.item');
                    
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')
                    
                    ollSlids[slider - 1].classList.toggle('display-none')
                    slider = i;
                    ollSlids[slider - 1].classList.toggle('display-none')
                    ollSlidsPhoto[slider - 1].classList.toggle('totop')
                }