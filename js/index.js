
        document.getElementById('donate-noakahli-btn').addEventListener('click', function() {
        const inputValue = getValueByInputField('donate-noakahli-input');
        const mainBalance = getValueByTextField('main-balance')
        const donateAmount = getValueByTextField('donation-balance');
        const donateAmountTotal = donateAmount + inputValue;
        const mainBalanceNow = mainBalance - inputValue;

        if(inputValue <= 0 || isNaN(inputValue) || inputValue >= mainBalance){
            alert('invalid Donation Amount');
        }
        else{
            document.getElementById('main-balance').innerText = mainBalanceNow;
            document.getElementById('donation-balance').innerText = donateAmountTotal;
            document.getElementById('my_modal_4').showModal();




            const donateTitle = getInnerText('donate-title');
            const addHistory = document.getElementById('history');
            const historyDiv = document.createElement('div');
            historyDiv.className = 'border rounded-xl mb-6 border-gray-200 border-black py-6 px-4';
            historyDiv.innerHTML = `<p class="text-lg font-semibold">${parseFloat(inputValue)} Taka is Donated For ${donateTitle}</p>
            <p>Date: ${new Date()} </p>`
            addHistory.insertBefore(historyDiv, addHistory.firstChild);
            document.getElementById('donate-noakahli-input').value = '';
            
        }

        });



        // Donation Section 2

        document.getElementById('donate-feni-btn').addEventListener('click', function() {
            const inputValue = getValueByInputField('donate-feni-input');
            const mainBalance = getValueByTextField('main-balance')
            const donateAmount = getValueByTextField('donation-balance2');
            const donateAmountTotal = donateAmount + inputValue;
            const mainBalanceNow = mainBalance - inputValue;
    
            if(inputValue <= 0 || isNaN(inputValue) || inputValue >= mainBalance){
                alert('invalid Donation Amount');
            }
            else{
                document.getElementById('main-balance').innerText = mainBalanceNow;
                document.getElementById('donation-balance2').innerText = donateAmountTotal;
                document.getElementById('my_modal_4').showModal();
    
    
    
    
                const donateTitle = getInnerText('donate-title2');
                const addHistory = document.getElementById('history');
                const historyDiv = document.createElement('div');
                historyDiv.className = 'border rounded-xl mb-6 border-gray-200 border-black py-6 px-4';
                historyDiv.innerHTML = `<p class="text-lg font-semibold">${parseFloat(inputValue)} Taka is Donated For ${donateTitle}</p>
                <p>Date: ${new Date()} </p>`
                addHistory.insertBefore(historyDiv, addHistory.firstChild);
                document.getElementById('donate-feni-input').value = '';
                
            }
    
            });



            // Donate Section 3

            document.getElementById('donate-quota-btn').addEventListener('click', function() {
                const inputValue = getValueByInputField('donate-quota-input');
                const mainBalance = getValueByTextField('main-balance')
                const donateAmount = getValueByTextField('donation-balance3');
                const donateAmountTotal = donateAmount + inputValue;
                const mainBalanceNow = mainBalance - inputValue;
        
                if(inputValue <= 0 || isNaN(inputValue) || inputValue >= mainBalance){
                    alert('invalid Donation Amount');
                }
                else{
                    document.getElementById('main-balance').innerText = mainBalanceNow;
                    document.getElementById('donation-balance3').innerText = donateAmountTotal;
                    document.getElementById('my_modal_4').showModal();
        
        
        
        
                    const donateTitle = getInnerText('donate-title3');
                    const addHistory = document.getElementById('history');
                    const historyDiv = document.createElement('div');
                    historyDiv.className = 'border rounded-xl mb-6 border-gray-200 border-black py-6 px-4';
                    historyDiv.innerHTML = `<p class="text-lg font-semibold">${parseFloat(inputValue)} Taka is Donated For ${donateTitle}</p>
                    <p>Date: ${new Date()} </p>`
                    addHistory.insertBefore(historyDiv, addHistory.firstChild);
                    document.getElementById('donate-quota-input').value = '';
                    
                }
        
                });

                // Active Button

                document.getElementById('history-btn')
                .addEventListener('click', function(){
                    document.getElementById('history-btn').classList.add("bg-lime-400", "text-white")
                    const history = document.getElementById('history');
                    history.classList.remove('hidden');
                    document.getElementById('donation-btn').classList.remove("bg-lime-400", "text-white");
                    document.getElementById('donate-page').classList.add('hidden');
        
                    
                })
            document.getElementById('donation-btn')
                .addEventListener('click', function(){
                    document.getElementById('donation-btn').classList.add("bg-lime-400", "text-white");
                    const donateButton = document.getElementById('donate-page');
                    donateButton.classList.remove('hidden');
                    document.getElementById('history-btn').classList.remove("bg-lime-400", "text-white");
                    document.getElementById('history').classList.add('hidden');
                })
        



        
