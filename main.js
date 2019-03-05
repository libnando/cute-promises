const main = () => {

    _buySomething = (val, itemName) => {

        const _myCash = 10;

        return new Promise(function(resolve, reject){

            setTimeout(function(){

                if(val > _myCash){                
                    reject("vocẽ não pode comprar ".concat(itemName));
                }
    
                resolve("você comprou ".concat(itemName));

            }, 1000);

        });

    };

    return {
        init : () =>{

            const mainDiv = document.getElementById("main");
            const items = [
                {val:8, name :"cerveja"},
                {val:11, name:"brócolis"},
                {val:5, name:"café"},
                {val:15, name:"salada"},                
                {val:2, name:"chocolate"},
                {val:6, name:"água"}
            ];

            items.forEach(e => {
               
                let lineDiv = document.createElement("div");         

                _buySomething(e.val, e.name).then((result) => {
                    lineDiv.innerHTML = result;
                    mainDiv.append(lineDiv);
                }).catch((err) => {
                    lineDiv.innerHTML = err;
                    mainDiv.append(lineDiv);
                });

            });

        }
    };

};

main().init();