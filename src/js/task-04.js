

    const counterButton = {
        add: document.querySelector("[data-action='increment']"),
        minus: document.querySelector("[data-action='decrement']"),
       };
     
      
    let counterValue = 0;
    function increment(){
        counterValue +=1;
      document.getElementById('value').textContent = counterValue;
    }
    function decrement(){
        counterValue -=1;
      document.getElementById('value').textContent = counterValue;
    }

   
      counterButton.add.addEventListener('click', increment);
      counterButton.minus.addEventListener('click', decrement);