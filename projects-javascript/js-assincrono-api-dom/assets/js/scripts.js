const BASE_URL = 'https://randomfox.ca/floof/';
const catBtn = document.getElementById('change-floof');


//pega a imagem da api e retorna o endereço da mesma
const getFloof = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.image;
    } catch (e) {
        console.log(e.message);
    }
};

//atribui o endereço no catImg do index.html
const loadImg = async () => {
    const catImg = document.getElementById('floof');
    catImg.src = await getFloof();
};

//executa a função ao clicar no button no index
catBtn.addEventListener('click', loadImg);

//já executa para inicar com a imagem
loadImg();
