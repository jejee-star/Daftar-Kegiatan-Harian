const form = document.getElementById('itemForm');
const input = document.getElementById('itemInput');
const p = document.getElementById('errorMessage');
const list = document.getElementById('daftar');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = input.value.trim();

   if(inputValue === ''){
    // jika kosong
    errorMessage.textContent = 'Field tidak boleh kosong';
    input.classList.add('invalid');
    input.classList.remove('valid');
   } else {
    // jika tidak kosong
    errorMessage.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');

   const newListItem = document.createElement('li');
   newListItem.textContent = inputValue;

   list.appendChild(newListItem);

   input.value = '';
   }
});