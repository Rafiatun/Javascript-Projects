const dummytext=['Lemon drops sweet cookie bear claw cupcake chupa chups.Gummies toffee sweet toffee chocolate cake. Bear claw macaroon sesamesnaps gummies topping. Macaroon cake macaroon macaroon croissant cupcake carrot cake jelly-o donut. Cotton candy topping chocolate cake cotton candy pie bear claw sugar plum. Halvah pastry carrot cake danish chocolate cake sesame snaps chupa chups tootsie roll pie. Sugar plum croissant caramels cupcake caramels. Candy canes wafer marshmallow wafer halvah marshmallow. Gummi bears carrot cake pie sweet roll cupcake powder biscuit. Jelly beans cotton candy jelly beans.','Sweet chocolate cake bonbon oat cake chocolate. Apple pie carrot cake jujubes dragée tootsie roll apple pie wafer candy canes oat cake. Jelly beans jelly beans sweet roll gummi bears fruitcake sugar plum. Sweet gummi bears halvah gummies candy canes candy lemon drops. Jelly beans macaroon donut dragée. Donut marshmallow powder pastry tiramisu pastry.', 'Cookie lemon drops pudding toffee wafer candy candy. Cotton candy donut muffin cupcake chupa chups sesame snaps chocolate bar cheesecake cotton candy. Jelly marzipan cheesecake chocolate fruitcake dragée. Croissant biscuit halvah gingerbread icing muffin sweet roll chocolate. Lollipop macaroon chocolate bar gingerbread jujubes marzipan wafer. Tart pie marshmallow cake. Wafer topping tootsie roll tootsie roll apple pie marzipan. Candy canes cotton candy pastry. Gummies muffin jujubes liquorice. Cake cookie tootsie roll brownie pudding.','Icing dragée dessert macaroon donut soufflé sugar plum lollipop. Dessert gingerbread fruitcake marshmallow powder fruitcake. Jelly beans topping bonbon lollipop cupcake muffin gummies sweet roll chocolate cake. Toffee candy candy canes tootsie roll sesame snaps candy canes tootsie roll. Cupcake caramels cookie tiramisu tootsie roll cheesecake toffee cotton candy toffee. Cake gingerbread jelly beans tiramisu. Dessert carrot cake pudding. Gingerbread croissant sweet bear claw donut marshmallow croissant pie. Danish wafer sweet topping.', 'Chupa chups jelly beans icing marzipan pie lemon drops macaroon halvah. Fruitcake jujubes oat cake gingerbread sweet roll gingerbread. Topping jelly beans toffee cupcake. Tootsie roll brownie topping gummies gummi bears danish biscuit croissant cotton candy. Dessert danish marshmallow. Sweet wafer oat cake pie.'];

const form=document.querySelector("#form");
const amount=document.querySelector("#amount");
const result=document.querySelector("#result");
const button=document.querySelector('#click');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const number=parseInt(amount.value);

    const ran= Math.floor((Math.random())*(dummytext.length));
    if(isNaN(number) || number <= 0 || number > 9){
        result.innerHTML = `<p>${dummytext[ran]}</p>`;
    } else {
        const slicedarray = dummytext.slice(0, number);
        const finalarray = slicedarray.map(function(singleDummy){
            return `<p>${singleDummy}</p>`;
        }).join('');
    result.innerHTML= finalarray;
    }
});
