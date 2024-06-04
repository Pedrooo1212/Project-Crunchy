const data = [
    {
        id: 1,
        Marca: 'Onix',
        Modelo: "Chevrolet",
        Preco: 90000,
        img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/dscf5489.dng_-e1585155608867.jpg?quality=70&strip=info'
    },
    {
        id: 2,
        Marca: 'Volkswagen',
        Modelo: "Gol",
        Preco: 85000,
        img: 'https://www.automaistv.com.br/wp-content/uploads/2020/12/volkswagen_gol_5-door_25_edited-990x594.jpg'
    },
    {
        id: 3,
        Marca: 'Ford',
        Modelo: "Ka	",
        Preco: 80000,
        img: 'https://mundodoautomovelparapcd.com.br/wp-content/uploads/2019/03/Ford-Ka-2019.jpg'
    },
    {
        id: 4,
        Marca: 'Fiat',
        Modelo: "Agro",
        Preco: 89000,
        img: 'https://th.bing.com/th/id/OIP.khHGk8DJ5UEouOYmqe0v-gHaE3?rs=1&pid=ImgDetMain'
    },
    {
        id: 5,
        Marca: 'Onix',
        Modelo: 90000,
        Preco: 51,
        img: ''
    },
    {
        id: 6,
        Marca: 'Renault',
        Modelo: "Kwid",
        Preco: 62000,
        img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/04/20190413-RENAULT-KWID-COLOMBIA-PRECIO-CARACTERISTICAS-Y-VERSIONES-01A.jpg'
    },
    {
        id: 7,
        Marca: 'Toyota',
        Modelo: "Etios",
        Preco: 60000,
        img: 'https://quatrorodas.abril.com.br/wp-content/uploads/2017/01/mun_2262.jpg?quality=70&strip=info'
    },
    {
        id: 8,
        Marca: 'Hyundai',
        Modelo: "Hb20",
        Preco: 82000,
        img: 'https://www.automaistv.com.br/wp-content/uploads/2022/09/Hyundai-HB20-Platinum-Plus-1_edited.jpg'
    },
    {
        id: 9,
        Marca: 'Honda',
        Modelo: "Fit",
        Preco: 58000,
        img: 'https://th.bing.com/th/id/OIP.MA4TD2xHJmoQbYuTj85ImwHaE8?rs=1&pid=ImgDetMain'
    },
    {
        id: 10,
        Marca: 'Nissan',
        Modelo: "March",
        Preco: 52000,
        img: 'https://th.bing.com/th/id/R.66454ada43a9ecb03ae6a237fee732ce?rik=5k8M%2f%2bfvC4mZig&riu=http%3a%2f%2fwww.roadsmile.com%2fimages%2fnissan-march_key_1.jpg&ehk=KdiKjtTOwT9jcjnVKiHQ6ofMO3qmiYYvusX7Dr8STYA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: 11,
        Marca: 'Peugeot',
        Modelo: "208",
        Preco: 89000,
        img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1-peugeot-208-2020-proto-drive-hero-front.jpg'
    },
    {
        id: 12,
        Marca: 'Citroën',
        Modelo: "C3",
        Preco: 49000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Citro%C3%ABn_C3_e-HDi_110_Airdream_Red_Block_(II)_%E2%80%93_Frontansicht%2C_21._April_2017%2C_D%C3%BCsseldorf.jpg'
    },
    {
        id: 13,
        Marca: 'Jeep',
        Modelo: "Renegade",
        Preco: 110000,
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8pjxhtjyF_uWkpkxTvL8i6znHHFd-tw6DNDt_IU4FYgD5v5exDnQ31p0qzRbXUKGgwcXOyN1Yx1cViZBheuRv21j1ycJkGpNFSQbE05KEdQW1wKurETVtKZ6bLaWdsS9Kc9paFqZOQ7pgWklWoBV9nMUkMnmh0EVaEmlxZhkuLDE4kMkGimcCzm6LaEY/s2560/Jeep-Renegade-2024%20(4).jpg'
    },
];

// Carros abaixo de 60.000
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    
    if (element.Preco < 60000) {
        console.log(element)
    };
};