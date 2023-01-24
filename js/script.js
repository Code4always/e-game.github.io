const impressum = document.querySelector('#open');
const openImpressum = document.querySelector('impressum');
const closeImpressum = document.querySelector('close');

openImpressum.addEventListener('click', () => {
    impressum.showImpressum();
})
