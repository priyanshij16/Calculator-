(function()
 
{

    let  screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear  = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // buttons should be working 
    buttons.forEach(function (button)
    {
        button.addEventListener('click', function(e)
        
        {
        let value = e.target.dataset.num;
     // this means we are pushing our values inside the screen
        screen.value += value;
        })
    })
    equal.addEventListener('click', function(e)
    {
        if(screen.value === '')
      {  screen.value = "Please enter"; 
    }
      else
      {
        let answer = eval(screen.value);
        screen.value= answer;}
    })
   clear.addEventListener('click', function(e)
   {
       screen.value ="";
   })
}) ();
    