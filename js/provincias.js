'use strict';
let listaProvincias = [{
        "Provincia": "1",
        "Nombre": "San José"
    },
    {
        "Provincia": "2",
        "Nombre": "Alajuela"
    },
    {
        "Provincia": "3",
        "Nombre": "Cartago"
    },
    {
        "Provincia": "4",
        "Nombre": "Heredia"
    },
    {
        "Provincia": "5",
        "Nombre": "Guanacaste"
    },
    {
        "Provincia": "6",
        "Nombre": "Puntarenas"
    },
    {
        "Provincia": "7",
        "Nombre": "Limón"
    }
]
let listaCantones = [{
        "Id": "101",
        "Provincia": "1",
        "Nombre": "San José"
    },
    {
        "Id": "102",
        "Provincia": "1",
        "Nombre": "Escazú"
    },
    {
        "Id": "103",
        "Provincia": "1",
        "Nombre": "Desamparados"
    },
    {
        "Id": "104",
        "Provincia": "1",
        "Nombre": "Puriscal"
    },
    {
        "Id": "105",
        "Provincia": "1",
        "Nombre": "Tarrazú"
    },
    {
        "Id": "106",
        "Provincia": "1",
        "Nombre": "Aserrí"
    },
    {
        "Id": "107",
        "Provincia": "1",
        "Nombre": "Mora"
    },
    {
        "Id": "108",
        "Provincia": "1",
        "Nombre": "Goicoechea"
    },
    {
        "Id": "109",
        "Provincia": "1",
        "Nombre": "Santa Ana"
    },
    {
        "Id": "110",
        "Provincia": "1",
        "Nombre": "Alajuelita"
    },
    {
        "Id": "111",
        "Provincia": "1",
        "Nombre": "Vázquez de Coronado"
    },
    {
        "Id": "112",
        "Provincia": "1",
        "Nombre": "Acosta"
    },
    {
        "Id": "113",
        "Provincia": "1",
        "Nombre": "Tibás"
    },
    {
        "Id": "114",
        "Provincia": "1",
        "Nombre": "Moravia"
    },
    {
        "Id": "115",
        "Provincia": "1",
        "Nombre": "Montes de Oca"
    },
    {
        "Id": "116",
        "Provincia": "1",
        "Nombre": "Turrubares"
    },
    {
        "Id": "117",
        "Provincia": "1",
        "Nombre": "Dota"
    },
    {
        "Id": "118",
        "Provincia": "1",
        "Nombre": "Curridabat"
    },
    {
        "Id": "119",
        "Provincia": "1",
        "Nombre": "Pérez Zeledón"
    },
    {
        "Id": "120",
        "Provincia": "1",
        "Nombre": "León Cortés Castro"
    },
    {
        "Id": "201",
        "Provincia": "2",
        "Nombre": "Alajuela"
    },
    {
        "Id": "202",
        "Provincia": "2",
        "Nombre": "San Ramón"
    },
    {
        "Id": "203",
        "Provincia": "2",
        "Nombre": "Grecia"
    },
    {
        "Id": "204",
        "Provincia": "2",
        "Nombre": "San Mateo"
    },
    {
        "Id": "205",
        "Provincia": "2",
        "Nombre": "Atenas"
    },
    {
        "Id": "206",
        "Provincia": "2",
        "Nombre": "Naranjo"
    },
    {
        "Id": "207",
        "Provincia": "2",
        "Nombre": "Palmares"
    },
    {
        "Id": "208",
        "Provincia": "2",
        "Nombre": "Poás"
    },
    {
        "Id": "209",
        "Provincia": "2",
        "Nombre": "Orotina"
    },
    {
        "Id": "210",
        "Provincia": "2",
        "Nombre": "San Carlos"
    },
    {
        "Id": "211",
        "Provincia": "2",
        "Nombre": "Zarcero"
    },
    {
        "Id": "212",
        "Provincia": "2",
        "Nombre": "Valverde Vega"
    },
    {
        "Id": "213",
        "Provincia": "2",
        "Nombre": "Upala"
    },
    {
        "Id": "214",
        "Provincia": "2",
        "Nombre": "Los Chiles"
    },
    {
        "Id": "215",
        "Provincia": "2",
        "Nombre": "Guatuso"
    },
    {
        "Id": "301",
        "Provincia": "3",
        "Nombre": "Cartago"
    },
    {
        "Id": "302",
        "Provincia": "3",
        "Nombre": "Paraíso"
    },
    {
        "Id": "303",
        "Provincia": "3",
        "Nombre": "La Unión"
    },
    {
        "Id": "304",
        "Provincia": "3",
        "Nombre": "Jiménez"
    },
    {
        "Id": "305",
        "Provincia": "3",
        "Nombre": "Turrialba"
    },
    {
        "Id": "306",
        "Provincia": "3",
        "Nombre": "Alvarado"
    },
    {
        "Id": "307",
        "Provincia": "3",
        "Nombre": "Oreamuno"
    },
    {
        "Id": "308",
        "Provincia": "3",
        "Nombre": "El Guarco"
    },
    {
        "Id": "401",
        "Provincia": "4",
        "Nombre": "Heredia"
    },
    {
        "Id": "402",
        "Provincia": "4",
        "Nombre": "Barva"
    },
    {
        "Id": "403",
        "Provincia": "4",
        "Nombre": "Santo Domingo"
    },
    {
        "Id": "404",
        "Provincia": "4",
        "Nombre": "Santa Bárbara"
    },
    {
        "Id": "405",
        "Provincia": "4",
        "Nombre": "San Rafael"
    },
    {
        "Id": "406",
        "Provincia": "4",
        "Nombre": "San Isidro"
    },
    {
        "Id": "407",
        "Provincia": "4",
        "Nombre": "Belén"
    },
    {
        "Id": "408",
        "Provincia": "4",
        "Nombre": "Flores"
    },
    {
        "Id": "409",
        "Provincia": "4",
        "Nombre": "San Pablo"
    },
    {
        "Id": "410",
        "Provincia": "4",
        "Nombre": "Sarapiquí"
    },
    {
        "Id": "501",
        "Provincia": "5",
        "Nombre": "Liberia"
    },
    {
        "Id": "502",
        "Provincia": "5",
        "Nombre": "Nicoya"
    },
    {
        "Id": "503",
        "Provincia": "5",
        "Nombre": "Santa Cruz"
    },
    {
        "Id": "504",
        "Provincia": "5",
        "Nombre": "Bagaces"
    },
    {
        "Id": "505",
        "Provincia": "5",
        "Nombre": "Carrillo"
    },
    {
        "Id": "506",
        "Provincia": "5",
        "Nombre": "Cañas"
    },
    {
        "Id": "507",
        "Provincia": "5",
        "Nombre": "Abangares"
    },
    {
        "Id": "508",
        "Provincia": "5",
        "Nombre": "Tilarán"
    },
    {
        "Id": "509",
        "Provincia": "5",
        "Nombre": "Nandayure"
    },
    {
        "Id": "510",
        "Provincia": "5",
        "Nombre": "La Cruz"
    },
    {
        "Id": "511",
        "Provincia": "5",
        "Nombre": "Hojancha"
    },
    {
        "Id": "601",
        "Provincia": "6",
        "Nombre": "Puntarenas"
    },
    {
        "Id": "602",
        "Provincia": "6",
        "Nombre": "Esparza"
    },
    {
        "Id": "603",
        "Provincia": "6",
        "Nombre": "Buenos Aires"
    },
    {
        "Id": "604",
        "Provincia": "6",
        "Nombre": "Montes de Oro"
    },
    {
        "Id": "605",
        "Provincia": "6",
        "Nombre": "Osa"
    },
    {
        "Id": "606",
        "Provincia": "6",
        "Nombre": "Quepos"
    },
    {
        "Id": "607",
        "Provincia": "6",
        "Nombre": "Golfito"
    },
    {
        "Id": "608",
        "Provincia": "6",
        "Nombre": "Coto Brus"
    },
    {
        "Id": "609",
        "Provincia": "6",
        "Nombre": "Parrita"
    },
    {
        "Id": "610",
        "Provincia": "6",
        "Nombre": "Corredores"
    },
    {
        "Id": "611",
        "Provincia": "6",
        "Nombre": "Garabito"
    },
    {
        "Id": "701",
        "Provincia": "7",
        "Nombre": "Limón"
    },
    {
        "Id": "702",
        "Provincia": "7",
        "Nombre": "Pococí"
    },
    {
        "Id": "703",
        "Provincia": "7",
        "Nombre": "Siquirres"
    },
    {
        "Id": "704",
        "Provincia": "7",
        "Nombre": "Talamanca"
    },
    {
        "Id": "705",
        "Provincia": "7",
        "Nombre": "Matina"
    },
    {
        "Id": "706",
        "Provincia": "7",
        "Nombre": "Guácimo"
    }
]

let listaDistritos = [{
        "Id": "10101",
        "Canton": "101",
        "Nombre": "Carmen"
    },
    {
        "Id": "10102",
        "Canton": "101",
        "Nombre": "Merced"
    },
    {
        "Id": "10103",
        "Canton": "101",
        "Nombre": "Hospital"
    },
    {
        "Id": "10104",
        "Canton": "101",
        "Nombre": "Catedral"
    },
    {
        "Id": "10105",
        "Canton": "101",
        "Nombre": "Zapote"
    },
    {
        "Id": "10106",
        "Canton": "101",
        "Nombre": "San Francisco de Dos Ríos"
    },
    {
        "Id": "10107",
        "Canton": "101",
        "Nombre": "Uruca"
    },
    {
        "Id": "10108",
        "Canton": "101",
        "Nombre": "Mata Redonda"
    },
    {
        "Id": "10109",
        "Canton": "101",
        "Nombre": "Pavas"
    },
    {
        "Id": "10110",
        "Canton": "101",
        "Nombre": "Hatillo"
    },
    {
        "Id": "10111",
        "Canton": "101",
        "Nombre": "San Sebastián"
    },
    {
        "Id": "10201",
        "Canton": "102",
        "Nombre": "Escazú"
    },
    {
        "Id": "10202",
        "Canton": "102",
        "Nombre": "San Antonio"
    },
    {
        "Id": "10203",
        "Canton": "102",
        "Nombre": "San Rafael"
    },
    {
        "Id": "10301",
        "Canton": "103",
        "Nombre": "Desamparados"
    },
    {
        "Id": "10302",
        "Canton": "103",
        "Nombre": "San Miguel"
    },
    {
        "Id": "10303",
        "Canton": "103",
        "Nombre": "San Juan de Dios"
    },
    {
        "Id": "10304",
        "Canton": "103",
        "Nombre": "San Rafael Arriba"
    },
    {
        "Id": "10305",
        "Canton": "103",
        "Nombre": "San Antonio"
    },
    {
        "Id": "10306",
        "Canton": "103",
        "Nombre": "Frailes"
    },
    {
        "Id": "10307",
        "Canton": "103",
        "Nombre": "Patarrá"
    },
    {
        "Id": "10308",
        "Canton": "103",
        "Nombre": "San Cristóbal"
    },
    {
        "Id": "10309",
        "Canton": "103",
        "Nombre": "Rosario"
    },
    {
        "Id": "10310",
        "Canton": "103",
        "Nombre": "Damas"
    },
    {
        "Id": "10311",
        "Canton": "103",
        "Nombre": "San Rafael Abajo"
    },
    {
        "Id": "10312",
        "Canton": "103",
        "Nombre": "Gravilias"
    },
    {
        "Id": "10313",
        "Canton": "103",
        "Nombre": "Los Guido"
    },
    {
        "Id": "10401",
        "Canton": "104",
        "Nombre": "Santiago"
    },
    {
        "Id": "10402",
        "Canton": "104",
        "Nombre": "Mercedes Sur"
    },
    {
        "Id": "10403",
        "Canton": "104",
        "Nombre": "Barbacoas"
    },
    {
        "Id": "10404",
        "Canton": "104",
        "Nombre": "Grifo Alto"
    },
    {
        "Id": "10405",
        "Canton": "104",
        "Nombre": "San Rafael"
    },
    {
        "Id": "10406",
        "Canton": "104",
        "Nombre": "Candelarita"
    },
    {
        "Id": "10407",
        "Canton": "104",
        "Nombre": "Desamparaditos"
    },
    {
        "Id": "10408",
        "Canton": "104",
        "Nombre": "San Antonio"
    },
    {
        "Id": "10409",
        "Canton": "104",
        "Nombre": "Chires"
    },
    {
        "Id": "10501",
        "Canton": "105",
        "Nombre": "San Marcos"
    },
    {
        "Id": "10502",
        "Canton": "105",
        "Nombre": "San Lorenzo"
    },
    {
        "Id": "10503",
        "Canton": "105",
        "Nombre": "San Carlos"
    },
    {
        "Id": "10601",
        "Canton": "106",
        "Nombre": "Aserrí"
    },
    {
        "Id": "10602",
        "Canton": "106",
        "Nombre": "Tarbaca"
    },
    {
        "Id": "10603",
        "Canton": "106",
        "Nombre": "Vuelta de Jorco"
    },
    {
        "Id": "10604",
        "Canton": "106",
        "Nombre": "San Gabriel"
    },
    {
        "Id": "10605",
        "Canton": "106",
        "Nombre": "Legua"
    },
    {
        "Id": "10606",
        "Canton": "106",
        "Nombre": "Monterrey"
    },
    {
        "Id": "10607",
        "Canton": "106",
        "Nombre": "Salitrillos"
    },
    {
        "Id": "10701",
        "Canton": "107",
        "Nombre": "Colón"
    },
    {
        "Id": "10702",
        "Canton": "107",
        "Nombre": "Guayabo"
    },
    {
        "Id": "10703",
        "Canton": "107",
        "Nombre": "Tabarcia"
    },
    {
        "Id": "10704",
        "Canton": "107",
        "Nombre": "Piedras Negras"
    },
    {
        "Id": "10705",
        "Canton": "107",
        "Nombre": "Picagres"
    },
    {
        "Id": "10706",
        "Canton": "107",
        "Nombre": "Jaris"
    },
    {
        "Id": "10801",
        "Canton": "108",
        "Nombre": "Guadalupe"
    },
    {
        "Id": "10802",
        "Canton": "108",
        "Nombre": "San Francisco"
    },
    {
        "Id": "10803",
        "Canton": "108",
        "Nombre": "Calle Blancos"
    },
    {
        "Id": "10804",
        "Canton": "108",
        "Nombre": "Mata de Plátano"
    },
    {
        "Id": "10805",
        "Canton": "108",
        "Nombre": "Ipís"
    },
    {
        "Id": "10806",
        "Canton": "108",
        "Nombre": "Rancho Redondo"
    },
    {
        "Id": "10807",
        "Canton": "108",
        "Nombre": "Purral"
    },
    {
        "Id": "10901",
        "Canton": "109",
        "Nombre": "Santa Ana"
    },
    {
        "Id": "10902",
        "Canton": "109",
        "Nombre": "Salitral"
    },
    {
        "Id": "10903",
        "Canton": "109",
        "Nombre": "Pozos"
    },
    {
        "Id": "10904",
        "Canton": "109",
        "Nombre": "Uruca"
    },
    {
        "Id": "10905",
        "Canton": "109",
        "Nombre": "Piedades"
    },
    {
        "Id": "10906",
        "Canton": "109",
        "Nombre": "Brasil"
    },
    {
        "Id": "11001",
        "Canton": "110",
        "Nombre": "Alajuelita"
    },
    {
        "Id": "11002",
        "Canton": "110",
        "Nombre": "San Josecito"
    },
    {
        "Id": "11003",
        "Canton": "110",
        "Nombre": "San Antonio"
    },
    {
        "Id": "11004",
        "Canton": "110",
        "Nombre": "Concepción"
    },
    {
        "Id": "11005",
        "Canton": "110",
        "Nombre": "San Felipe"
    },
    {
        "Id": "11101",
        "Canton": "111",
        "Nombre": "San Isidro"
    },
    {
        "Id": "11102",
        "Canton": "111",
        "Nombre": "San Rafael"
    },
    {
        "Id": "11103",
        "Canton": "111",
        "Nombre": "Dulce Nombre de Jesús"
    },
    {
        "Id": "11104",
        "Canton": "111",
        "Nombre": "Patalillo"
    },
    {
        "Id": "11105",
        "Canton": "111",
        "Nombre": "Cascajal"
    },
    {
        "Id": "11201",
        "Canton": "112",
        "Nombre": "San Ignacio"
    },
    {
        "Id": "11202",
        "Canton": "112",
        "Nombre": "Guaitil"
    },
    {
        "Id": "11203",
        "Canton": "112",
        "Nombre": "Palmichal"
    },
    {
        "Id": "11204",
        "Canton": "112",
        "Nombre": "Cangrejal"
    },
    {
        "Id": "11205",
        "Canton": "112",
        "Nombre": "Sabanillas"
    },
    {
        "Id": "11301",
        "Canton": "113",
        "Nombre": "San Juan"
    },
    {
        "Id": "11302",
        "Canton": "113",
        "Nombre": "Cinco Esquinas"
    },
    {
        "Id": "11303",
        "Canton": "113",
        "Nombre": "Anselmo Llorente"
    },
    {
        "Id": "11304",
        "Canton": "113",
        "Nombre": "León XIII"
    },
    {
        "Id": "11305",
        "Canton": "113",
        "Nombre": "Colima"
    },
    {
        "Id": "11401",
        "Canton": "114",
        "Nombre": "San Vicente"
    },
    {
        "Id": "11402",
        "Canton": "114",
        "Nombre": "San Jerónimo"
    },
    {
        "Id": "11403",
        "Canton": "114",
        "Nombre": "La Trinidad"
    },
    {
        "Id": "11501",
        "Canton": "115",
        "Nombre": "San Pedro"
    },
    {
        "Id": "11502",
        "Canton": "115",
        "Nombre": "Sabanilla"
    },
    {
        "Id": "11503",
        "Canton": "115",
        "Nombre": "Mercedes"
    },
    {
        "Id": "11504",
        "Canton": "115",
        "Nombre": "San Rafael"
    },
    {
        "Id": "11601",
        "Canton": "116",
        "Nombre": "San Pablo"
    },
    {
        "Id": "11602",
        "Canton": "116",
        "Nombre": "San Pedro"
    },
    {
        "Id": "11603",
        "Canton": "116",
        "Nombre": "San Juan de Mata"
    },
    {
        "Id": "11604",
        "Canton": "116",
        "Nombre": "San Luis"
    },
    {
        "Id": "11605",
        "Canton": "116",
        "Nombre": "Carara"
    },
    {
        "Id": "11701",
        "Canton": "117",
        "Nombre": "Santa María"
    },
    {
        "Id": "11702",
        "Canton": "117",
        "Nombre": "Jardín"
    },
    {
        "Id": "11703",
        "Canton": "117",
        "Nombre": "Copey"
    },
    {
        "Id": "11801",
        "Canton": "118",
        "Nombre": "Curridabat"
    },
    {
        "Id": "11802",
        "Canton": "118",
        "Nombre": "Granadilla"
    },
    {
        "Id": "11803",
        "Canton": "118",
        "Nombre": "Sánchez"
    },
    {
        "Id": "11804",
        "Canton": "118",
        "Nombre": "Tirrases"
    },
    {
        "Id": "11901",
        "Canton": "119",
        "Nombre": "San Isidro de El General"
    },
    {
        "Id": "11902",
        "Canton": "119",
        "Nombre": "General"
    },
    {
        "Id": "11903",
        "Canton": "119",
        "Nombre": "Daniel Flores"
    },
    {
        "Id": "11904",
        "Canton": "119",
        "Nombre": "Rivas"
    },
    {
        "Id": "11905",
        "Canton": "119",
        "Nombre": "San Pedro"
    },
    {
        "Id": "11906",
        "Canton": "119",
        "Nombre": "Platanares"
    },
    {
        "Id": "11907",
        "Canton": "119",
        "Nombre": "Pejibaye"
    },
    {
        "Id": "11908",
        "Canton": "119",
        "Nombre": "Cajón"
    },
    {
        "Id": "11909",
        "Canton": "119",
        "Nombre": "Barú"
    },
    {
        "Id": "11910",
        "Canton": "119",
        "Nombre": "Río Nuevo"
    },
    {
        "Id": "11911",
        "Canton": "119",
        "Nombre": "Páramo"
    },
    {
        "Id": "12001",
        "Canton": "120",
        "Nombre": "San Pablo"
    },
    {
        "Id": "12002",
        "Canton": "120",
        "Nombre": "San Andrés"
    },
    {
        "Id": "12003",
        "Canton": "120",
        "Nombre": "Llano Bonito"
    },
    {
        "Id": "12004",
        "Canton": "120",
        "Nombre": "San Isidro"
    },
    {
        "Id": "12005",
        "Canton": "120",
        "Nombre": "Santa Cruz"
    },
    {
        "Id": "12006",
        "Canton": "120",
        "Nombre": "San Antonio"
    },
    {
        "Id": "20101",
        "Canton": "201",
        "Nombre": "Alajuela"
    },
    {
        "Id": "20102",
        "Canton": "201",
        "Nombre": "San José"
    },
    {
        "Id": "20103",
        "Canton": "201",
        "Nombre": "Carrizal"
    },
    {
        "Id": "20104",
        "Canton": "201",
        "Nombre": "San Antonio"
    },
    {
        "Id": "20105",
        "Canton": "201",
        "Nombre": "Guácima"
    },
    {
        "Id": "20106",
        "Canton": "201",
        "Nombre": "San Isidro"
    },
    {
        "Id": "20107",
        "Canton": "201",
        "Nombre": "Sabanilla"
    },
    {
        "Id": "20108",
        "Canton": "201",
        "Nombre": "San Rafael"
    },
    {
        "Id": "20109",
        "Canton": "201",
        "Nombre": "Río Segundo"
    },
    {
        "Id": "20110",
        "Canton": "201",
        "Nombre": "Desamparados"
    },
    {
        "Id": "20111",
        "Canton": "201",
        "Nombre": "Turrúcares"
    },
    {
        "Id": "20112",
        "Canton": "201",
        "Nombre": "Tambor"
    },
    {
        "Id": "20113",
        "Canton": "201",
        "Nombre": "Garita"
    },
    {
        "Id": "20114",
        "Canton": "201",
        "Nombre": "Sarapiquí"
    },
    {
        "Id": "20201",
        "Canton": "202",
        "Nombre": "San Ramón"
    },
    {
        "Id": "20202",
        "Canton": "202",
        "Nombre": "Santiago"
    },
    {
        "Id": "20203",
        "Canton": "202",
        "Nombre": "San Juan"
    },
    {
        "Id": "20204",
        "Canton": "202",
        "Nombre": "Piedades Norte"
    },
    {
        "Id": "20205",
        "Canton": "202",
        "Nombre": "Piedades Sur"
    },
    {
        "Id": "20206",
        "Canton": "202",
        "Nombre": "San Rafael"
    },
    {
        "Id": "20207",
        "Canton": "202",
        "Nombre": "San Isidro"
    },
    {
        "Id": "20208",
        "Canton": "202",
        "Nombre": "Los Ángeles"
    },
    {
        "Id": "20209",
        "Canton": "202",
        "Nombre": "Alfaro"
    },
    {
        "Id": "20210",
        "Canton": "202",
        "Nombre": "Volio"
    },
    {
        "Id": "20211",
        "Canton": "202",
        "Nombre": "Concepción"
    },
    {
        "Id": "20212",
        "Canton": "202",
        "Nombre": "Zapotal"
    },
    {
        "Id": "20213",
        "Canton": "202",
        "Nombre": "Peñas Blancas"
    },
    {
        "Id": "20301",
        "Canton": "203",
        "Nombre": "Grecia"
    },
    {
        "Id": "20302",
        "Canton": "203",
        "Nombre": "San Isidro"
    },
    {
        "Id": "20303",
        "Canton": "203",
        "Nombre": "San José"
    },
    {
        "Id": "20304",
        "Canton": "203",
        "Nombre": "San Roque"
    },
    {
        "Id": "20305",
        "Canton": "203",
        "Nombre": "Tacares"
    },
    {
        "Id": "20306",
        "Canton": "203",
        "Nombre": "Río Cuarto"
    },
    {
        "Id": "20307",
        "Canton": "203",
        "Nombre": "Puente de Piedra"
    },
    {
        "Id": "20308",
        "Canton": "203",
        "Nombre": "Bolívar"
    },
    {
        "Id": "20401",
        "Canton": "204",
        "Nombre": "San Mateo"
    },
    {
        "Id": "20402",
        "Canton": "204",
        "Nombre": "Desmonte"
    },
    {
        "Id": "20403",
        "Canton": "204",
        "Nombre": "Jesús María"
    },
    {
        "Id": "20501",
        "Canton": "205",
        "Nombre": "Atenas"
    },
    {
        "Id": "20502",
        "Canton": "205",
        "Nombre": "Jesús"
    },
    {
        "Id": "20503",
        "Canton": "205",
        "Nombre": "Mercedes"
    },
    {
        "Id": "20504",
        "Canton": "205",
        "Nombre": "San Isidro"
    },
    {
        "Id": "20505",
        "Canton": "205",
        "Nombre": "Concepción"
    },
    {
        "Id": "20506",
        "Canton": "205",
        "Nombre": "San José"
    },
    {
        "Id": "20507",
        "Canton": "205",
        "Nombre": "Santa Eulalia"
    },
    {
        "Id": "20508",
        "Canton": "205",
        "Nombre": "Escobal"
    },
    {
        "Id": "20601",
        "Canton": "206",
        "Nombre": "Naranjo"
    },
    {
        "Id": "20602",
        "Canton": "206",
        "Nombre": "San Miguel"
    },
    {
        "Id": "20603",
        "Canton": "206",
        "Nombre": "San José"
    },
    {
        "Id": "20604",
        "Canton": "206",
        "Nombre": "Cirrí Sur"
    },
    {
        "Id": "20605",
        "Canton": "206",
        "Nombre": "San Jerónimo"
    },
    {
        "Id": "20606",
        "Canton": "206",
        "Nombre": "San Juan"
    },
    {
        "Id": "20607",
        "Canton": "206",
        "Nombre": "El Rosario"
    },
    {
        "Id": "20608",
        "Canton": "206",
        "Nombre": "Palmitos"
    },
    {
        "Id": "20701",
        "Canton": "207",
        "Nombre": "Palmares"
    },
    {
        "Id": "20702",
        "Canton": "207",
        "Nombre": "Zaragoza"
    },
    {
        "Id": "20703",
        "Canton": "207",
        "Nombre": "Buenos Aires"
    },
    {
        "Id": "20704",
        "Canton": "207",
        "Nombre": "Santiago"
    },
    {
        "Id": "20705",
        "Canton": "207",
        "Nombre": "Candelaria"
    },
    {
        "Id": "20706",
        "Canton": "207",
        "Nombre": "Esquipulas"
    },
    {
        "Id": "20707",
        "Canton": "207",
        "Nombre": "La Granja"
    },
    {
        "Id": "20801",
        "Canton": "208",
        "Nombre": "San Pedro"
    },
    {
        "Id": "20802",
        "Canton": "208",
        "Nombre": "San Juan"
    },
    {
        "Id": "20803",
        "Canton": "208",
        "Nombre": "San Rafael"
    },
    {
        "Id": "20804",
        "Canton": "208",
        "Nombre": "Carrillos"
    },
    {
        "Id": "20805",
        "Canton": "208",
        "Nombre": "Sabana Redonda"
    },
    {
        "Id": "20901",
        "Canton": "209",
        "Nombre": "Orotina"
    },
    {
        "Id": "20902",
        "Canton": "209",
        "Nombre": "El Mastate"
    },
    {
        "Id": "20903",
        "Canton": "209",
        "Nombre": "Hacienda Vieja"
    },
    {
        "Id": "20904",
        "Canton": "209",
        "Nombre": "Coyolar"
    },
    {
        "Id": "20905",
        "Canton": "209",
        "Nombre": "La Ceiba"
    },
    {
        "Id": "21001",
        "Canton": "210",
        "Nombre": "Quesada"
    },
    {
        "Id": "21002",
        "Canton": "210",
        "Nombre": "Florencia"
    },
    {
        "Id": "21003",
        "Canton": "210",
        "Nombre": "Buenavista"
    },
    {
        "Id": "21004",
        "Canton": "210",
        "Nombre": "Aguas Zarcas"
    },
    {
        "Id": "21005",
        "Canton": "210",
        "Nombre": "Venecia"
    },
    {
        "Id": "21006",
        "Canton": "210",
        "Nombre": "Pital"
    },
    {
        "Id": "21007",
        "Canton": "210",
        "Nombre": "La Fortuna"
    },
    {
        "Id": "21008",
        "Canton": "210",
        "Nombre": "La Tigra"
    },
    {
        "Id": "21009",
        "Canton": "210",
        "Nombre": "La Palmera"
    },
    {
        "Id": "21010",
        "Canton": "210",
        "Nombre": "Venado"
    },
    {
        "Id": "21011",
        "Canton": "210",
        "Nombre": "Cutris"
    },
    {
        "Id": "21012",
        "Canton": "210",
        "Nombre": "Monterrey"
    },
    {
        "Id": "21013",
        "Canton": "210",
        "Nombre": "Pocosol"
    },
    {
        "Id": "21101",
        "Canton": "211",
        "Nombre": "Zarcero"
    },
    {
        "Id": "21102",
        "Canton": "211",
        "Nombre": "Laguna"
    },
    {
        "Id": "21103",
        "Canton": "211",
        "Nombre": "Tapesco"
    },
    {
        "Id": "21104",
        "Canton": "211",
        "Nombre": "Guadalupe"
    },
    {
        "Id": "21105",
        "Canton": "211",
        "Nombre": "Palmira"
    },
    {
        "Id": "21106",
        "Canton": "211",
        "Nombre": "Zapote"
    },
    {
        "Id": "21107",
        "Canton": "211",
        "Nombre": "Brisas"
    },
    {
        "Id": "21201",
        "Canton": "212",
        "Nombre": "Sarchí Norte"
    },
    {
        "Id": "21202",
        "Canton": "212",
        "Nombre": "Sarchí Sur"
    },
    {
        "Id": "21203",
        "Canton": "212",
        "Nombre": "Toro Amarillo"
    },
    {
        "Id": "21204",
        "Canton": "212",
        "Nombre": "San Pedro"
    },
    {
        "Id": "21205",
        "Canton": "212",
        "Nombre": "Rodríguez"
    },
    {
        "Id": "21301",
        "Canton": "213",
        "Nombre": "Upala"
    },
    {
        "Id": "21302",
        "Canton": "213",
        "Nombre": "Aguas Claras"
    },
    {
        "Id": "21303",
        "Canton": "213",
        "Nombre": "San José (Pizote)"
    },
    {
        "Id": "21304",
        "Canton": "213",
        "Nombre": "Bijagua"
    },
    {
        "Id": "21305",
        "Canton": "213",
        "Nombre": "Delicias"
    },
    {
        "Id": "21306",
        "Canton": "213",
        "Nombre": "Dos Ríos"
    },
    {
        "Id": "21307",
        "Canton": "213",
        "Nombre": "Yoliyllal"
    },
    {
        "Id": "21401",
        "Canton": "214",
        "Nombre": "Los Chiles"
    },
    {
        "Id": "21402",
        "Canton": "214",
        "Nombre": "Caño Negro"
    },
    {
        "Id": "21403",
        "Canton": "214",
        "Nombre": "El Amparo"
    },
    {
        "Id": "21404",
        "Canton": "214",
        "Nombre": "San Jorge"
    },
    {
        "Id": "21501",
        "Canton": "215",
        "Nombre": "San Rafael"
    },
    {
        "Id": "21502",
        "Canton": "215",
        "Nombre": "Buenavista"
    },
    {
        "Id": "21503",
        "Canton": "215",
        "Nombre": "Cote"
    },
    {
        "Id": "21504",
        "Canton": "215",
        "Nombre": "Katira"
    },
    {
        "Id": "30101",
        "Canton": "301",
        "Nombre": "Oriental"
    },
    {
        "Id": "30102",
        "Canton": "301",
        "Nombre": "Occidental"
    },
    {
        "Id": "30103",
        "Canton": "301",
        "Nombre": "Carmen"
    },
    {
        "Id": "30104",
        "Canton": "301",
        "Nombre": "San Nicolás"
    },
    {
        "Id": "30105",
        "Canton": "301",
        "Nombre": "Aguacaliente (San Francisco)"
    },
    {
        "Id": "30106",
        "Canton": "301",
        "Nombre": "Guadalupe (Arenilla)"
    },
    {
        "Id": "30107",
        "Canton": "301",
        "Nombre": "Corralillo"
    },
    {
        "Id": "30108",
        "Canton": "301",
        "Nombre": "Tierra Blanca"
    },
    {
        "Id": "30109",
        "Canton": "301",
        "Nombre": "Dulce Nombre"
    },
    {
        "Id": "30110",
        "Canton": "301",
        "Nombre": "Llano Grande"
    },
    {
        "Id": "30111",
        "Canton": "301",
        "Nombre": "Quebradilla"
    },
    {
        "Id": "30201",
        "Canton": "302",
        "Nombre": "Paraíso"
    },
    {
        "Id": "30202",
        "Canton": "302",
        "Nombre": "Santiago"
    },
    {
        "Id": "30203",
        "Canton": "302",
        "Nombre": "Orosi"
    },
    {
        "Id": "30204",
        "Canton": "302",
        "Nombre": "Cachí"
    },
    {
        "Id": "30205",
        "Canton": "302",
        "Nombre": "Llanos de Santa Lucía"
    },
    {
        "Id": "30301",
        "Canton": "303",
        "Nombre": "Tres Ríos"
    },
    {
        "Id": "30302",
        "Canton": "303",
        "Nombre": "San Diego"
    },
    {
        "Id": "30303",
        "Canton": "303",
        "Nombre": "San Juan"
    },
    {
        "Id": "30304",
        "Canton": "303",
        "Nombre": "San Rafael"
    },
    {
        "Id": "30305",
        "Canton": "303",
        "Nombre": "Concepción"
    },
    {
        "Id": "30306",
        "Canton": "303",
        "Nombre": "Dulce Nombre"
    },
    {
        "Id": "30307",
        "Canton": "303",
        "Nombre": "San Ramón"
    },
    {
        "Id": "30308",
        "Canton": "303",
        "Nombre": "Río Azul"
    },
    {
        "Id": "30401",
        "Canton": "304",
        "Nombre": "Juan Viñas"
    },
    {
        "Id": "30402",
        "Canton": "304",
        "Nombre": "Tucurrique"
    },
    {
        "Id": "30403",
        "Canton": "304",
        "Nombre": "Pejibaye"
    },
    {
        "Id": "30501",
        "Canton": "305",
        "Nombre": "Turrialba"
    },
    {
        "Id": "30502",
        "Canton": "305",
        "Nombre": "La Suiza"
    },
    {
        "Id": "30503",
        "Canton": "305",
        "Nombre": "Peralta"
    },
    {
        "Id": "30504",
        "Canton": "305",
        "Nombre": "Santa Cruz"
    },
    {
        "Id": "30505",
        "Canton": "305",
        "Nombre": "Santa Teresita"
    },
    {
        "Id": "30506",
        "Canton": "305",
        "Nombre": "Pavones"
    },
    {
        "Id": "30507",
        "Canton": "305",
        "Nombre": "Tuis"
    },
    {
        "Id": "30508",
        "Canton": "305",
        "Nombre": "Tayutic"
    },
    {
        "Id": "30509",
        "Canton": "305",
        "Nombre": "Santa Rosa"
    },
    {
        "Id": "30510",
        "Canton": "305",
        "Nombre": "Tres Equis"
    },
    {
        "Id": "30511",
        "Canton": "305",
        "Nombre": "La Isabel"
    },
    {
        "Id": "30512",
        "Canton": "305",
        "Nombre": "Chirripó"
    },
    {
        "Id": "30601",
        "Canton": "306",
        "Nombre": "Pacayas"
    },
    {
        "Id": "30602",
        "Canton": "306",
        "Nombre": "Cervantes"
    },
    {
        "Id": "30603",
        "Canton": "306",
        "Nombre": "Capellades"
    },
    {
        "Id": "30701",
        "Canton": "307",
        "Nombre": "San Rafael"
    },
    {
        "Id": "30702",
        "Canton": "307",
        "Nombre": "Cot"
    },
    {
        "Id": "30703",
        "Canton": "307",
        "Nombre": "Potrero Cerrado"
    },
    {
        "Id": "30704",
        "Canton": "307",
        "Nombre": "Cipreses"
    },
    {
        "Id": "30705",
        "Canton": "307",
        "Nombre": "Santa Rosa"
    },
    {
        "Id": "30801",
        "Canton": "308",
        "Nombre": "El Tejar"
    },
    {
        "Id": "30802",
        "Canton": "308",
        "Nombre": "San Isidro"
    },
    {
        "Id": "30803",
        "Canton": "308",
        "Nombre": "Tobosi"
    },
    {
        "Id": "30804",
        "Canton": "308",
        "Nombre": "Patio de Agua"
    },
    {
        "Id": "40101",
        "Canton": "401",
        "Nombre": "Heredia"
    },
    {
        "Id": "40102",
        "Canton": "401",
        "Nombre": "Mercedes"
    },
    {
        "Id": "40103",
        "Canton": "401",
        "Nombre": "San Francisco"
    },
    {
        "Id": "40104",
        "Canton": "401",
        "Nombre": "Ulloa"
    },
    {
        "Id": "40105",
        "Canton": "401",
        "Nombre": "Varablanca"
    },
    {
        "Id": "40201",
        "Canton": "402",
        "Nombre": "Barva"
    },
    {
        "Id": "40202",
        "Canton": "402",
        "Nombre": "San Pedro"
    },
    {
        "Id": "40203",
        "Canton": "402",
        "Nombre": "San Pablo"
    },
    {
        "Id": "40204",
        "Canton": "402",
        "Nombre": "San Roque"
    },
    {
        "Id": "40205",
        "Canton": "402",
        "Nombre": "Santa Lucía"
    },
    {
        "Id": "40206",
        "Canton": "402",
        "Nombre": "San José de la Montaña"
    },
    {
        "Id": "40301",
        "Canton": "403",
        "Nombre": "Santo Domingo"
    },
    {
        "Id": "40302",
        "Canton": "403",
        "Nombre": "San Vicente"
    },
    {
        "Id": "40303",
        "Canton": "403",
        "Nombre": "San Miguel"
    },
    {
        "Id": "40304",
        "Canton": "403",
        "Nombre": "Paracito"
    },
    {
        "Id": "40305",
        "Canton": "403",
        "Nombre": "Santo Tomás"
    },
    {
        "Id": "40306",
        "Canton": "403",
        "Nombre": "Santa Rosa"
    },
    {
        "Id": "40307",
        "Canton": "403",
        "Nombre": "Tures"
    },
    {
        "Id": "40308",
        "Canton": "403",
        "Nombre": "Pará"
    },
    {
        "Id": "40401",
        "Canton": "404",
        "Nombre": "Santa Bárbara"
    },
    {
        "Id": "40402",
        "Canton": "404",
        "Nombre": "San Pedro"
    },
    {
        "Id": "40403",
        "Canton": "404",
        "Nombre": "San Juan"
    },
    {
        "Id": "40404",
        "Canton": "404",
        "Nombre": "Jesús"
    },
    {
        "Id": "40405",
        "Canton": "404",
        "Nombre": "Santo Domingo"
    },
    {
        "Id": "40406",
        "Canton": "404",
        "Nombre": "Puraba"
    },
    {
        "Id": "40501",
        "Canton": "405",
        "Nombre": "San Rafael"
    },
    {
        "Id": "40502",
        "Canton": "405",
        "Nombre": "San Josécito"
    },
    {
        "Id": "40503",
        "Canton": "405",
        "Nombre": "Santiago"
    },
    {
        "Id": "40504",
        "Canton": "405",
        "Nombre": "Los Ángeles"
    },
    {
        "Id": "40505",
        "Canton": "405",
        "Nombre": "Concepción"
    },
    {
        "Id": "40601",
        "Canton": "406",
        "Nombre": "San Isidro"
    },
    {
        "Id": "40602",
        "Canton": "406",
        "Nombre": "San José"
    },
    {
        "Id": "40603",
        "Canton": "406",
        "Nombre": "Concepción"
    },
    {
        "Id": "40604",
        "Canton": "406",
        "Nombre": "San Francisco"
    },
    {
        "Id": "40701",
        "Canton": "407",
        "Nombre": "San Antonio"
    },
    {
        "Id": "40702",
        "Canton": "407",
        "Nombre": "La Ribera"
    },
    {
        "Id": "40703",
        "Canton": "407",
        "Nombre": "La Asunción"
    },
    {
        "Id": "40801",
        "Canton": "408",
        "Nombre": "San Joaquín de Flores"
    },
    {
        "Id": "40802",
        "Canton": "408",
        "Nombre": "Barrantes"
    },
    {
        "Id": "40803",
        "Canton": "408",
        "Nombre": "Llorente"
    },
    {
        "Id": "40901",
        "Canton": "409",
        "Nombre": "San Pablo"
    },
    {
        "Id": "40902",
        "Canton": "409",
        "Nombre": "Rincón de Sabanilla"
    },
    {
        "Id": "41001",
        "Canton": "410",
        "Nombre": "Puerto Viejo"
    },
    {
        "Id": "41002",
        "Canton": "410",
        "Nombre": "La Virgen"
    },
    {
        "Id": "41003",
        "Canton": "410",
        "Nombre": "Horquetas"
    },
    {
        "Id": "41004",
        "Canton": "410",
        "Nombre": "Llanuras del Gaspar"
    },
    {
        "Id": "41005",
        "Canton": "410",
        "Nombre": "Cureña"
    },
    {
        "Id": "50101",
        "Canton": "501",
        "Nombre": "Liberia"
    },
    {
        "Id": "50102",
        "Canton": "501",
        "Nombre": "Cañas Dulces"
    },
    {
        "Id": "50103",
        "Canton": "501",
        "Nombre": "Mayorga"
    },
    {
        "Id": "50104",
        "Canton": "501",
        "Nombre": "Nacascolo"
    },
    {
        "Id": "50105",
        "Canton": "501",
        "Nombre": "Curubande"
    },
    {
        "Id": "50201",
        "Canton": "502",
        "Nombre": "Nicoya"
    },
    {
        "Id": "50202",
        "Canton": "502",
        "Nombre": "Mansion"
    },
    {
        "Id": "50203",
        "Canton": "502",
        "Nombre": "San Antonio"
    },
    {
        "Id": "50204",
        "Canton": "502",
        "Nombre": "Quebrada Honda"
    },
    {
        "Id": "50205",
        "Canton": "502",
        "Nombre": "Samara"
    },
    {
        "Id": "50206",
        "Canton": "502",
        "Nombre": "Nosara"
    },
    {
        "Id": "50207",
        "Canton": "502",
        "Nombre": "Belén de Nosarita"
    },
    {
        "Id": "50301",
        "Canton": "503",
        "Nombre": "Santa Cruz"
    },
    {
        "Id": "50302",
        "Canton": "503",
        "Nombre": "Bolson"
    },
    {
        "Id": "50303",
        "Canton": "503",
        "Nombre": "Veintisiete de Abril"
    },
    {
        "Id": "50304",
        "Canton": "503",
        "Nombre": "Tempate"
    },
    {
        "Id": "50305",
        "Canton": "503",
        "Nombre": "Cartagena"
    },
    {
        "Id": "50306",
        "Canton": "503",
        "Nombre": "Cuajiniquil"
    },
    {
        "Id": "50307",
        "Canton": "503",
        "Nombre": "Diria"
    },
    {
        "Id": "50308",
        "Canton": "503",
        "Nombre": "Cabo Velas"
    },
    {
        "Id": "50309",
        "Canton": "503",
        "Nombre": "Tamarindo"
    },
    {
        "Id": "50401",
        "Canton": "504",
        "Nombre": "Bagaces"
    },
    {
        "Id": "50402",
        "Canton": "504",
        "Nombre": "Fortuna"
    },
    {
        "Id": "50403",
        "Canton": "504",
        "Nombre": "Mogote"
    },
    {
        "Id": "50404",
        "Canton": "504",
        "Nombre": "Río Naranjo"
    },
    {
        "Id": "50501",
        "Canton": "505",
        "Nombre": "Filadelfia"
    },
    {
        "Id": "50502",
        "Canton": "505",
        "Nombre": "Palmira"
    },
    {
        "Id": "50503",
        "Canton": "505",
        "Nombre": "Sardinal"
    },
    {
        "Id": "50504",
        "Canton": "505",
        "Nombre": "Belén"
    },
    {
        "Id": "50601",
        "Canton": "506",
        "Nombre": "Cañas"
    },
    {
        "Id": "50602",
        "Canton": "506",
        "Nombre": "Palmira"
    },
    {
        "Id": "50603",
        "Canton": "506",
        "Nombre": "San Miguel"
    },
    {
        "Id": "50604",
        "Canton": "506",
        "Nombre": "Bebedero"
    },
    {
        "Id": "50605",
        "Canton": "506",
        "Nombre": "Porozal"
    },
    {
        "Id": "50701",
        "Canton": "507",
        "Nombre": "Juntas"
    },
    {
        "Id": "50702",
        "Canton": "507",
        "Nombre": "Sierra"
    },
    {
        "Id": "50703",
        "Canton": "507",
        "Nombre": "San Juan"
    },
    {
        "Id": "50704",
        "Canton": "507",
        "Nombre": "Colorado"
    },
    {
        "Id": "50801",
        "Canton": "508",
        "Nombre": "Tilarán"
    },
    {
        "Id": "50802",
        "Canton": "508",
        "Nombre": "Quebrada Grande"
    },
    {
        "Id": "50803",
        "Canton": "508",
        "Nombre": "Tronadora"
    },
    {
        "Id": "50804",
        "Canton": "508",
        "Nombre": "Santa Rosa"
    },
    {
        "Id": "50805",
        "Canton": "508",
        "Nombre": "Líbano"
    },
    {
        "Id": "50806",
        "Canton": "508",
        "Nombre": "Tierras Morenas"
    },
    {
        "Id": "50807",
        "Canton": "508",
        "Nombre": "Arenal"
    },
    {
        "Id": "50901",
        "Canton": "509",
        "Nombre": "Carmona"
    },
    {
        "Id": "50902",
        "Canton": "509",
        "Nombre": "Santa Rita"
    },
    {
        "Id": "50903",
        "Canton": "509",
        "Nombre": "Zapotal"
    },
    {
        "Id": "50904",
        "Canton": "509",
        "Nombre": "San Pablo"
    },
    {
        "Id": "50905",
        "Canton": "509",
        "Nombre": "Porvenir"
    },
    {
        "Id": "50906",
        "Canton": "509",
        "Nombre": "Bejuco"
    },
    {
        "Id": "51001",
        "Canton": "510",
        "Nombre": "La Cruz"
    },
    {
        "Id": "51002",
        "Canton": "510",
        "Nombre": "Santa Cecilia"
    },
    {
        "Id": "51003",
        "Canton": "510",
        "Nombre": "Garita"
    },
    {
        "Id": "51004",
        "Canton": "510",
        "Nombre": "Santa Elena"
    },
    {
        "Id": "51101",
        "Canton": "511",
        "Nombre": "Hojancha"
    },
    {
        "Id": "51102",
        "Canton": "511",
        "Nombre": "Monte Romo"
    },
    {
        "Id": "51103",
        "Canton": "511",
        "Nombre": "Puerto Carrillo"
    },
    {
        "Id": "51104",
        "Canton": "511",
        "Nombre": "Huacas"
    },
    {
        "Id": "60101",
        "Canton": "601",
        "Nombre": "Puntarenas"
    },
    {
        "Id": "60102",
        "Canton": "601",
        "Nombre": "Pitahaya"
    },
    {
        "Id": "60103",
        "Canton": "601",
        "Nombre": "Chomes"
    },
    {
        "Id": "60104",
        "Canton": "601",
        "Nombre": "Lepanto"
    },
    {
        "Id": "60105",
        "Canton": "601",
        "Nombre": "Paquera"
    },
    {
        "Id": "60106",
        "Canton": "601",
        "Nombre": "Manzanillo"
    },
    {
        "Id": "60107",
        "Canton": "601",
        "Nombre": "Guacimal"
    },
    {
        "Id": "60108",
        "Canton": "601",
        "Nombre": "Barranca"
    },
    {
        "Id": "60109",
        "Canton": "601",
        "Nombre": "Monte Verde"
    },
    {
        "Id": "60110",
        "Canton": "601",
        "Nombre": "Isla del Coco"
    },
    {
        "Id": "60111",
        "Canton": "601",
        "Nombre": "Cobano"
    },
    {
        "Id": "60112",
        "Canton": "601",
        "Nombre": "Chacarita"
    },
    {
        "Id": "60113",
        "Canton": "601",
        "Nombre": "Chira"
    },
    {
        "Id": "60114",
        "Canton": "601",
        "Nombre": "Acapulco"
    },
    {
        "Id": "60115",
        "Canton": "601",
        "Nombre": "El Roble"
    },
    {
        "Id": "60116",
        "Canton": "601",
        "Nombre": "Arancibia"
    },
    {
        "Id": "60201",
        "Canton": "602",
        "Nombre": "Espiritu Santo"
    },
    {
        "Id": "60202",
        "Canton": "602",
        "Nombre": "San Juan Grande"
    },
    {
        "Id": "60203",
        "Canton": "602",
        "Nombre": "Macacona"
    },
    {
        "Id": "60204",
        "Canton": "602",
        "Nombre": "San Rafael"
    },
    {
        "Id": "60205",
        "Canton": "602",
        "Nombre": "San Jerónimo"
    },
    {
        "Id": "60301",
        "Canton": "603",
        "Nombre": "Buenos Aires"
    },
    {
        "Id": "60302",
        "Canton": "603",
        "Nombre": "Volcan"
    },
    {
        "Id": "60303",
        "Canton": "603",
        "Nombre": "Potrero Grande"
    },
    {
        "Id": "60304",
        "Canton": "603",
        "Nombre": "Boruca"
    },
    {
        "Id": "60305",
        "Canton": "603",
        "Nombre": "Pilas"
    },
    {
        "Id": "60306",
        "Canton": "603",
        "Nombre": "Colinas"
    },
    {
        "Id": "60307",
        "Canton": "603",
        "Nombre": "Changena"
    },
    {
        "Id": "60308",
        "Canton": "603",
        "Nombre": "Briolley"
    },
    {
        "Id": "60309",
        "Canton": "603",
        "Nombre": "Brunka"
    },
    {
        "Id": "60401",
        "Canton": "604",
        "Nombre": "Miramar"
    },
    {
        "Id": "60402",
        "Canton": "604",
        "Nombre": "La Unión"
    },
    {
        "Id": "60403",
        "Canton": "604",
        "Nombre": "San Isidro"
    },
    {
        "Id": "60501",
        "Canton": "605",
        "Nombre": "Puerto Cortes"
    },
    {
        "Id": "60502",
        "Canton": "605",
        "Nombre": "Palmar"
    },
    {
        "Id": "60503",
        "Canton": "605",
        "Nombre": "Sierpe"
    },
    {
        "Id": "60504",
        "Canton": "605",
        "Nombre": "Bahia Ballena"
    },
    {
        "Id": "60505",
        "Canton": "605",
        "Nombre": "Piedras Blancas"
    },
    {
        "Id": "60601",
        "Canton": "606",
        "Nombre": "Quepos"
    },
    {
        "Id": "60602",
        "Canton": "606",
        "Nombre": "Savegre"
    },
    {
        "Id": "60603",
        "Canton": "606",
        "Nombre": "Naranjito"
    },
    {
        "Id": "60701",
        "Canton": "607",
        "Nombre": "Golfito"
    },
    {
        "Id": "60702",
        "Canton": "607",
        "Nombre": "Puerto Jiménez"
    },
    {
        "Id": "60703",
        "Canton": "607",
        "Nombre": "Guaycara"
    },
    {
        "Id": "60704",
        "Canton": "607",
        "Nombre": "Pavon"
    },
    {
        "Id": "60801",
        "Canton": "608",
        "Nombre": "San Vito"
    },
    {
        "Id": "60802",
        "Canton": "608",
        "Nombre": "Sabalito"
    },
    {
        "Id": "60803",
        "Canton": "608",
        "Nombre": "Aguabuena"
    },
    {
        "Id": "60804",
        "Canton": "608",
        "Nombre": "Limóncito"
    },
    {
        "Id": "60805",
        "Canton": "608",
        "Nombre": "Pittier"
    },
    {
        "Id": "60901",
        "Canton": "609",
        "Nombre": "Parrita"
    },
    {
        "Id": "61001",
        "Canton": "610",
        "Nombre": "Corredor"
    },
    {
        "Id": "61002",
        "Canton": "610",
        "Nombre": "La Cuesta"
    },
    {
        "Id": "61003",
        "Canton": "610",
        "Nombre": "Canoas"
    },
    {
        "Id": "61004",
        "Canton": "610",
        "Nombre": "Laurel"
    },
    {
        "Id": "61101",
        "Canton": "611",
        "Nombre": "Jacó"
    },
    {
        "Id": "61102",
        "Canton": "611",
        "Nombre": "Tarcoles"
    },
    {
        "Id": "70101",
        "Canton": "701",
        "Nombre": "Limón"
    },
    {
        "Id": "70102",
        "Canton": "701",
        "Nombre": "Valle La Estrella"
    },
    {
        "Id": "70103",
        "Canton": "701",
        "Nombre": "Río Blanco"
    },
    {
        "Id": "70104",
        "Canton": "701",
        "Nombre": "Matama"
    },
    {
        "Id": "70201",
        "Canton": "702",
        "Nombre": "Guapiles"
    },
    {
        "Id": "70202",
        "Canton": "702",
        "Nombre": "Jiménez"
    },
    {
        "Id": "70203",
        "Canton": "702",
        "Nombre": "Rita"
    },
    {
        "Id": "70204",
        "Canton": "702",
        "Nombre": "Roxana"
    },
    {
        "Id": "70205",
        "Canton": "702",
        "Nombre": "Cariari"
    },
    {
        "Id": "70206",
        "Canton": "702",
        "Nombre": "Colorado"
    },
    {
        "Id": "70301",
        "Canton": "703",
        "Nombre": "Siquirres"
    },
    {
        "Id": "70302",
        "Canton": "703",
        "Nombre": "Pacuarito"
    },
    {
        "Id": "70303",
        "Canton": "703",
        "Nombre": "Florida"
    },
    {
        "Id": "70304",
        "Canton": "703",
        "Nombre": "Germania"
    },
    {
        "Id": "70305",
        "Canton": "703",
        "Nombre": "Cairo"
    },
    {
        "Id": "70306",
        "Canton": "703",
        "Nombre": "Alegria"
    },
    {
        "Id": "70401",
        "Canton": "704",
        "Nombre": "Bratsi"
    },
    {
        "Id": "70402",
        "Canton": "704",
        "Nombre": "Sixaola"
    },
    {
        "Id": "70403",
        "Canton": "704",
        "Nombre": "Cahuita"
    },
    {
        "Id": "70404",
        "Canton": "704",
        "Nombre": "Telire"
    },
    {
        "Id": "70501",
        "Canton": "705",
        "Nombre": "Matina"
    },
    {
        "Id": "70502",
        "Canton": "705",
        "Nombre": "Battan"
    },
    {
        "Id": "70503",
        "Canton": "705",
        "Nombre": "Carrandi"
    },
    {
        "Id": "70601",
        "Canton": "706",
        "Nombre": "Guácimo"
    },
    {
        "Id": "70602",
        "Canton": "706",
        "Nombre": "Mercedes"
    },
    {
        "Id": "70603",
        "Canton": "706",
        "Nombre": "Pocora"
    },
    {
        "Id": "70604",
        "Canton": "706",
        "Nombre": "Río Jiménez"
    },
    {
        "Id": "70605",
        "Canton": "706",
        "Nombre": "Duacari"
    }
]

const sltProvincia = document.querySelector("#provincias");
const sltCanton = document.querySelector("#cantones");
const sltDistritos = document.querySelector("#distritos");
const labelslct = document.querySelector("#labelslct");

const mostrarSltProvincia = () => {

    listaProvincias.forEach(provincia => {
        let option = document.createElement("option");
        option.text = provincia.Nombre;
        option.value = provincia.Provincia;
        sltProvincia.add(option);
    });

}

const mostrarSltCanton = () => {
    clearSltCanton();
    clearSltDistrito();
    listaCantones.forEach(canton => {
        if (sltProvincia.value == canton.Provincia) {
            let option = document.createElement("option");
            option.text = canton.Nombre;
            option.value = canton.Id;
            sltCanton.add(option);
        }
    });
}

const mostrarSltDistrito = () => {
    clearSltDistrito();
    listaDistritos.forEach(distrito => {
        if (sltCanton.value == distrito.Canton) {
            let option = document.createElement("option");
            option.text = distrito.Nombre;
            option.value = distrito.Id;
            sltDistritos.add(option);
        }
    });
}

const clearSltCanton = () => {
    while (sltCanton.options.length > 1) {
        sltCanton.options[1] = null;
    }

}

const clearSltDistrito = () => {
    while (sltDistritos.options.length > 1) {
        sltDistritos.options[1] = null;
    }

}

mostrarSltProvincia()
sltProvincia.addEventListener('change', mostrarSltCanton)
sltCanton.addEventListener('change', mostrarSltDistrito)