      window.addEventListener('scroll', function (event) {
      $('.notion-callout.bg-yellow-light').each((i, el) => {
        let bound = el.getBoundingClientRect();
        if(bound.top <= 100){
          el.classList.add('isStickyBlinker')
        }else{
          el.classList.remove('isStickyBlinker')
        }
      });
    });
