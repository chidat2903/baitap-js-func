var man = [
    {
    id: 1 ,
    name: "Quần Nam",
    code: "TC1025011BA",
    price :"200000",
    image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"
    },
    {
        id: 2 ,
        name: "Quần Nam",
        code: "TC1025011BA",
        price :"200000",
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"
    },
    {
        id: 3 ,
        name: "Quần Nam",
        code: "TC1025011BA",
        price :"200000",
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"
    },
    {
        id: 4 ,
        name: "Quần Nam",
        code: "TC1025011BA",
        price :"200000",
        image:"https://www.google.com/search?q=quan+nam&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj95v_09bzoAhXJTX0KHZn1BIQQ_AUoAXoECA4QAw&biw=1440&bih=723#imgrc=tkUilfM7udvfMM"
    }
];

var women = [
    {
        id: 1,
        name :"Quần nữ",
        code: "TC543235",
        price : "200000",
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"
    },
    {
        id: 2,
        name :"Quần Nữ",
        code: "TC543235",
        price : "200000",
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"
    },
    {
        id: 3,
        name :"Quần Nữ",
        code: "TC543235",
        price : "200000",
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"
    },
    {
        id: 4,
        name :"Quần Nữ",
        code: "TC543235",
        price : "200000",
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"
    }
];
function listProducts(){
    for (var i = 0; i <= man.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width:400px">';
        demo += '<img class="card-img-top" src="'+man[i].image+'" alt="Card image" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick=order()>Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
    for (var i = 0; i <= women.length-1; i++){
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width:400px">';
        demo += '<img class="card-img-top" src="'+women[i].image+'" alt="Card image" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+'</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick=order()>Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';

        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}