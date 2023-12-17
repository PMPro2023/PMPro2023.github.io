window.onload = function(){ 

    let a = '0'
    let b = '0'
    let expressionResult = ''
    let selectedOperation = null
    let selectedOperationn = null
    function factorial(n) {
        let result = 1;
        for(let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    function summ(n) {
        
        return result;
    }
    var pdigits = []
    var mdigits = []

    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if (a === '0'){
                a = '';
            }
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if (b === '0'){
                b = '';
            }
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = b        
            }
        }
    }
    
    // устанавка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '0') return
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '0') return
        pdigits.push(outputElement.innerHTML)
        a = '0'
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '0') return
        mdigits.push(a)
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '0') return
        selectedOperation = '/'
    }
    document.getElementById("btn_op_percent").onclick = function() { 
        if (a === '0') return
        selectedOperation = '%'
    }
    document.getElementById("btn_op_back").onclick = function() { 
        if (a === '0') return
        if (a !== '0' || b === '0'){
            a = parseInt(a.toString().substring(0, a.toString().length - 1));
            if (a.toString().length === 1){a = '0'}
            outputElement.innerHTML = a
        }
        else{
            if (b !== '0'){
                b = parseInt(b.toString().substring(0, b.toString().length - 1));
                if (a.toString().length === 1){a = '0'}
                outputElement.innerHTML = b
            }
        }
    }
    var isBlue = false;
    document.getElementById("btn_op_color").onclick = function() {
        const background = document.getElementById("myBody");
        if(isBlue){
            background.style.background = "Grey";
        }
        else{
            background.style.background = "blue";
        }
        isBlue = !isBlue
        background.style.backgroundImage = "url('https://i2.wp.com/sciartica.net/wp-content/uploads/2015/08/TrueRandom2.png?fit=1754%2C1140&ssl=1')";
        background.style.backgroundRepeat = "no-repeat";
        background.style.backgroundPositionX = "Center";
        background.style.backgroundPositionY = "Center";
    }
    var isResult = false;
    document.getElementById("btn_result_color").onclick = function() {
        const background = document.getElementById("result");
        if(isResult){
            background.style.background = "Yellow";
        }
        else{
            background.style.background = "blue";
        }
        isResult = !isResult
    }
    document.getElementById("btn_op_square").onclick = function() { 
        if (a === '0') return
        if (a !== '0' && b === '0'){
            a = (a) * (a)
            outputElement.innerHTML = a
        }
        else{
            if (b !== '0'){
                b = (b) * (b)
                outputElement.innerHTML = b
            }
        }
    }
    document.getElementById("btn_op_root").onclick = function() { 
        if (a === '0') return
        if (a !== '0' && b === '0'){
            a = Math.sqrt(a)
            outputElement.innerHTML = a
        }
        else{
            if (b !== '0'){
                b = Math.sqrt(b)
                outputElement.innerHTML = b
            }
        }
    }
    document.getElementById("btn_op_factorial").onclick = function() { 
        if (a === '0') return
        if (a !== '0' && b === '0'){
            a = factorial(a)
            outputElement.innerHTML = a
        }
        else{
            if (b !== '0'){
                b = factorial(b)
                outputElement.innerHTML = b
            }
        }
    }
    document.getElementById("btn_op_sign").onclick = function() { 
        if (a === '0') return
        if (a !== '0' && b === '0'){
            a = -a
            outputElement.innerHTML = a
        }
        else{
            if (b !== '0'){
                b = -b
                outputElement.innerHTML = b
            }
        }
    }
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = '0'
        b = '0'
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                for ( let i = 0; i < pdigits.length; i++)
                {
                    b = pdigits[i]
                    expressionResult = (+expressionResult) + (+b)
                }
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = ((+a) / 100) * (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };

    /*
1.Запрограммируйте операцию смены знака +/-;                                                                                                ****
2.Запрограммируйте операцию вычисления процента %;                                                                                          ****                                                                         
3.Добавьте кнопку стирания введенной цифры назад (backspace). Расположить кнопку можно, например, на месте нерабочих +/- и % кнопок;        ****
4.Сделайте смену цвета фона по кнопке;                                                                                                      ****
5.Запрограммируйте операцию вычисления квадратного корня √;                                                                                 ****
6.Запрограммируйте операцию возведения в квадрат x²;                                                                                        ****
7.Запрограммируйте операцию вычисления факториала x!;                                                                                       ****
8.Добавьте кнопку, которая за раз добавляет сразу три нуля (000);                                                                           ****
9.Запрограммируйте накапливаемое сложние;                                                                                                   
10.Запрограммируйте накапливаемое вычитание;                                                                                                
11.Сделайте смену цвета окна вывода результата по кнопке.                                                                                   ****
    */