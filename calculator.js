let calculation = localStorage.getItem('calculation') || '';
        display(calculation);
        function display(no){
            document.querySelector('.displayCalculation').innerHTML = `${no}`;
        }
        function updateCalculation(number)
        {
            calculation += number;
            display(calculation);
            localStorage.setItem('calculation',calculation);
        }
