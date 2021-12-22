const valInput = document.querySelector("#value")
const btnVal = document.querySelectorAll(".btn")
let count = 0;
btnVal.forEach(function(btn)
{
    btn.addEventListener("click", function(e)
    {
        const styles = e.currentTarget.classList 
        if (styles.contains('decrease'))
        {
            count--
            valInput.style.color = "red"
        }    
        if (styles.contains('increase'))
        {
            count++
            valInput.style.color = "green"
        }
        else if (styles.contains('reset'))
        {
            count = 0;
            valInput.style.color = "black"
        }
        valInput.textContent = count;
        
    }) 
            

})