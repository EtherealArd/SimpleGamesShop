var Product = require('../models/product');
var mongoode = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png',
    title: 'Skyrim',
    description: 'Game of the year 2011',
    price:300
}),
new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81sn7JnHz4L._SL1500_.jpg',
    title: 'Witcher',
    description: 'Game of the year 2015',
    price:500
}),
new Product({
    imagePath: 'http://www.skidrowcrack.com/download/2018/02/Kingdom-Come-Deliverance-1.jpg',
    title: 'Kingdom Come:Deliverance',
    description: 'Game about knights and fights',
    price:700
}),
new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/uk/archive/a/af/20150101003343%21S.T.A.L.K.E.R._Clear_Sky_%28cover%29.jpg',
    title: 'S.T.A.L.K.E.R.: Clear Sky',
    description: 'Explore the Zone of Chernobyl',
    price:150
}),
new Product({
    imagePath: 'https://im9.cz/iR/importprodukt-orig/41e/41ee32525dae549429c02c52c4042646.jpg',
    title: 'Metro 2033',
    description: 'Survive in moscow metro with another survivals',
    price:350
}),
new Product({
    imagePath: 'https://im9.cz/iR/importprodukt-orig/863/863c79c6f46d4118f6246173b6735644.jpg',
    title: 'Fallout 4',
    description: 'War never changes',
    price:800
})
]

var done = 0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length)
        exit();
    });
}

function exit()
{
    mongoose.disconnect(); 
}

