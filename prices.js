function Prices (){

    var option= prompt("Press 1 for Airport Parking or Press 2 for Harbour Parking");

    if(option==1){
        var airport=[0,100,135,175,200,230,265,300,330,360,390,410,440,470,500,530,560,590,620,650,680,710,740,770,800,830,860,890,920,950,980,1000];
    var select=prompt("How many days would you like your car parked select an option from 1 to 31");
    var airportprice= airport[select];

    alert("Estimated Price " +""+"R"+""+ airportprice);
    
    }

    else{

        var harbour=[0,0,0,300,370,450,500,550,600,650,700,750,800];
        var hselect=prompt("How many days would you like your car parked select an option from 3 to 12");
        var harbourprice=harbour[hselect];
        alert("Estimated Price " +""+"R"+""+ harbourprice);

        
    }
}