import React, { useState } from "react";
import "../styles/nandavanam.css";

const templeData = {
  "Thirukadugai Moondreeswarar Temple": {
    photo: "images/pappakudi.jpg", 
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1194.842001273556!2d77.49955540501362!3d8.752436415298831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDUnMDcuNCJOIDc3wrAzMCcwMS4xIkU!5e1!3m2!1sen!2sin!4v1757054316170!5m2!1sen!2sin",
    noOfTrees: 57,
    area: "0.33 acres",
    speciesCount: 41,
    datePlanted: "11 Dec 2021",
    trees: [
      { common: "Mango tree", scientific: "Mangifera indica", count: 6 },
      { common: "Star jasmine", scientific: "Trachelospermum jasminoides", count: 3 },
      { common: "Amla", scientific: "Phyllanthus emblica", count: 3 },
      { common: "Indian tulip tree", scientific: "Thespesia populnea", count: 3 },
      { common: "Pinwheelflower", scientific: "Tabernaemontana divaricata", count: 2 },
      { common: "Large Garlic Pear", scientific: "Crateva magna", count: 2 },
      { common: "bael", scientific: "Aegle marmelos", count: 2 },
      { common: "Lemon", scientific: "Citrus limon", count: 2 },
      { common: "Golden shower", scientific: "Cassia fistula", count: 2 },
      { common: "Gaub", scientific: "Diospyros malabarica", count: 1 },
      { common: "Red Bead Tree", scientific: "Adenanthera pavonina", count: 1 },
      { common: "Hari champa", scientific: "Artabotrys hexapetalus", count: 1 },
      { common: "Devil Tree", scientific: "Alstonia scholaris", count: 1 },
      { common: "Spanish cherry", scientific: "Mimusops elengi", count: 1 },
      { common: "Wood apple", scientific: "Limonia acidissima", count: 1 },
      { common: "China Rose", scientific: "Hibiscus rosa-sinensis", count: 1 },
      { common: "Jamun", scientific: "Syzygium cumini", count: 1 },
      { common: "White Silk-Cotton Tree", scientific: "Bombax ceiba", count: 1 },
      { common: "Ceylon iorn wood", scientific: "Mesua ferrea", count: 1 },
      { common: "Anjan", scientific: "Hardwickia binata", count: 1 },
      { common: "Fiddlewood", scientific: "Citharexylum spinosum", count: 1 },
      { common: "Neem tree", scientific: "Azadirachta indica", count: 1 },
      { common: "calabash tree", scientific: "Crescentia cujete", count: 1 },
      { common: "Nux vomica", scientific: "Strychnos nux-vomica", count: 1 },
      { common: "Baheda", scientific: "Terminalia bellirica", count: 1 },
      { common: "Indian Mulberry", scientific: "Morinda citrifolia", count: 1 },
      { common: "Palas tree", scientific: "Butea monosperma", count: 1 },
      { common: "Thin jasmine", scientific: "Jasminum angustifolium", count: 1 },
      { common: "Dye fig", scientific: "Ficus tinctoria", count: 1 },
      { common: "Indian Oak", scientific: "Barringtonia acutangula", count: 1 },
      { common: "Bidi leaf tree", scientific: "Diospyros melanoxylon", count: 1 },
      { common: "Sulthan chempa", scientific: "Michelia champaca", count: 1 },
      { common: "Jasmine", scientific: "Jasminum sambac", count: 1 },
      { common: "Tamarind", scientific: "Tamarindus indica", count: 1 },
      { common: "Arjun tree", scientific: "Terminalia arjuna", count: 1 },
      { common: "jack fruit tree", scientific: "Artocarpus heterophyllus", count: 1 },
      { common: "Gamhar tree", scientific: "Gmelina arborea", count: 1 },
      { common: "Indian butter tree", scientific: "Diploknema butyracea", count: 1 },
      { common: "Common bamboo", scientific: "Bambusa vulgaris", count: 1 },
      { common: "Indian Bat fig", scientific: "Ficus krishnae", count: 1 },
      { common: "Banyan tree", scientific: "Ficus benghalensis", count: 1 },
    ],
  },
  "Abhi Muktheeswarar Temple": {
    photo: "images/templ2.JPG",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d608.7340926831381!2d77.58892900684285!3d8.695725683868496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNDQuMiJOIDc3wrAzNScyMC4xIkU!5e1!3m2!1sen!2sin!4v1757063667686!5m2!1sen!2sin",
    noOfTrees: 42,
    area: "0.28 acres",
    speciesCount: 31,
    datePlanted: "5 June 2022",
trees: [
  { common: "Arjun tree", scientific: "Terminalia arjuna", count: 6 },
  { common: "Sulthan chempa", scientific: "Michelia champaca", count: 6 },
  { common: "Jamun", scientific: "Syzygium cumini", count: 4 },
  { common: "Indian butter tree", scientific: "Diploknema butyracea", count: 4 },
  { common: "Common bamboo", scientific: "Bambusa vulgaris", count: 3 },
  { common: "Baheda", scientific: "Terminalia bellirica", count: 3 },
  { common: "Pinwheelflower", scientific: "Tabernaemontana divaricata", count: 3 },
  { common: "Pongam Tree", scientific: "Pongamia pinnata", count: 3 },
  { common: "Neem", scientific: "Azadirachta indica", count: 2 },
  { common: "Spanish cherry", scientific: "Mimusops elengi", count: 2 },
  { common: "jack fruit tree", scientific: "Artocarpus heterophyllus", count: 2 },
  { common: "Wood apple", scientific: "Limonia acidissima", count: 2 },
  { common: "Khejri Tree", scientific: "Prosopis cineraria", count: 2 },
  { common: "Indian Mulberry", scientific: "Morinda citrifolia", count: 1 },
  { common: "Indian Cork Tree", scientific: "Millingtonia hortensis", count: 1 },
  { common: "Dye fig", scientific: "Ficus tinctoria", count: 1 },
  { common: "Peepal tree", scientific: "Ficus religiosa", count: 1 },
  { common: "False Ashok", scientific: "Polyalthia longifolia", count: 1 },
  { common: "Common jasmine", scientific: "Jasminum officinale", count: 1 },
  { common: "Champaca", scientific: "Magnolia champaca", count: 1 },
  { common: "Wild jack", scientific: "Artocarpus sp.", count: 1 },
  { common: "Indian Oak", scientific: "Barringtonia acutangula", count: 1 },
  { common: "Palas tree", scientific: "Butea monosperma", count: 1 },
  { common: "Amla", scientific: "Phyllanthus emblica", count: 1 },
  { common: "Ceylon iorn wood", scientific: "Mesua ferrea", count: 1 },
  { common: "Devil Tree", scientific: "Alstonia scholaris", count: 1 },
  { common: "calabash tree", scientific: "Crescentia cujete", count: 1 },
  { common: "Large Garlic Pear", scientific: "Crateva magna", count: 1 },
  { common: "Indian sandalwood", scientific: "Santalum album", count: 1 },
  { common: "Mango tree", scientific: "Mangifera indica", count: 1 },
  { common: "Coral Jasmine", scientific: "Nyctanthes arbor-tristis", count: 1 },

],
  },
  "Sridevi Boodevi Sametha Venkatachalapathy Temple": {
  photo: "images/templ3.JPG",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d629.4201102128858!2d77.46384999241488!3d8.730784453565231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDMnNDkuNiJOIDc3wrAyNyc1MS4zIkU!5e1!3m2!1sen!2sin!4v1757306700647!5m2!1sen!2sin",
    noOfTrees: 98,
    area: "0.54 acres",
    speciesCount: 60,
    datePlanted: "05 June 2022",
trees: [
  { common: "Jamun", scientific: "Syzygium cumini", count: 4 },
  { common: "Indian Mulberry", scientific: "Morinda citrifolia", count: 4 },
  { common: "China rose", scientific: "Hibiscus rosa-sinensis", count: 3 },
  { common: "Neem", scientific: "Azadirachta indica", count: 3 },
  { common: "Indian Oak", scientific: "Barringtonia acutangula", count: 3 },
  { common: "Tree of Sorrow", scientific: "Nyctanthes arbor-tristis", count: 3 },
  { common: "Mango tree", scientific: "Mangifera indica", count: 3 },
  { common: "Malabar Neem", scientific: "Melia dubia", count: 3 },
  { common: "Golden shower", scientific: "Cassia fistula", count: 3 },
  { common: "Wood apple", scientific: "Limonia acidissima", count: 3 },
  { common: "Guava", scientific: "Psidium guajava", count: 2 },
  { common: "Teak", scientific: "Tectona grandis", count: 2 },
  { common: "Arjun tree", scientific: "Terminalia arjuna", count: 2 },
  { common: "Dye fig", scientific: "Ficus tinctoria", count: 2 },
  { common: "Common jasmine", scientific: "Jasminum officinale", count: 2 },
  { common: "Amla", scientific: "Phyllanthus emblica", count: 2 },
  { common: "Babool", scientific: "Vachellia nilotica", count: 2 },
  { common: "Garlic pear tree", scientific: "Crateva magna", count: 2 },
  { common: "Pinwheelflower", scientific: "Tabernaemontana divaricata", count: 2 },
  { common: "Baheda", scientific: "Terminalia bellirica", count: 2 },
  { common: "Spanish cherry", scientific: "Mimusops elengi", count: 2 },
  { common: "Palas tree", scientific: "Butea monosperma", count: 2 },
  { common: "Indian butter tree", scientific: "Diploknema butyracea", count: 2 },
  { common: "Peepal tree", scientific: "Ficus religiosa", count: 1 },
  { common: "Henna tree", scientific: "Lawsonia inermis", count: 1 },
  { common: "Indian Beech Tree", scientific: "Pongamia pinnata", count: 1 },
  { common: "Common bamboo", scientific: "Bambusa vulgaris", count: 1 },
  { common: "Tamarind tree", scientific: "Tamarindus indica", count: 1 },
  { common: "Palmyra Palm", scientific: "Borassus flabellifer", count: 1 },
  { common: "Ebony tree", scientific: "Diospyros ebenum", count: 1 },
  { common: "Nux Vomica", scientific: "Strychnos nux-vomica", count: 1 },
  { common: "Red Bead Tree", scientific: "Adenanthera pavonina", count: 1 },
  { common: "Gray Nicker", scientific: "Guilandina bonduc", count: 1 },
  { common: "Indian Almond", scientific: "Terminalia catappa", count: 1 },
  { common: "Chaste Tree", scientific: "Vitex negundo", count: 1 },
  { common: "Night-blooming cestrum", scientific: "Cestrum nocturnum", count: 1 },
  { common: "Indian sandalwood", scientific: "Santalum album", count: 1 },
  { common: "jack fruit tree", scientific: "Artocarpus heterophyllus", count: 1 },
  { common: "Cluster fig", scientific: "Ficus racemosa", count: 1 },
  { common: "Indian Laurel", scientific: "Ficus microcarpa", count: 1 },
  { common: "Carandas plum", scientific: "Carissa carandas", count: 1 },
  { common: "Hari champa", scientific: "Artabotrys hexapetalus", count: 1 },
  { common: "Haldu", scientific: "Haldina cordifolia", count: 1 },
  { common: "Ceylon satin wood", scientific: "Chloroxylon swietenia", count: 1 },
  { common: "Devil Tree", scientific: "Alstonia scholaris", count: 1 },
  { common: "Cannonball tree", scientific: "Couroupita guianensis", count: 1 },
  { common: "Star jasmine", scientific: "Trachelospermum jasminoides", count: 1 },
  { common: "Bidi leaf tree", scientific: "Diospyros melanoxylon", count: 1 },
  { common: "Sulthan chempa", scientific: "Michelia champaca", count: 1 },
  { common: "White Silk-Cotton Tree", scientific: "Bombax ceiba", count: 1 },
  { common: "Gamhar tree", scientific: "Gmelina arborea", count: 1 },
  { common: "True Kadamb", scientific: "Neolamarckia cadamba", count: 1 },
  { common: "Black-Honey Shrub", scientific: "Melianthus comosus", count: 1 },
  { common: "Curry leaf", scientific: "Murraya koenigii", count: 1 },
  { common: "Siamese Cassia", scientific: "Senna siamea", count: 1 },
  { common: "Sausage Tree", scientific: "Kigelia africana", count: 1 },
  { common: "Custard apple", scientific: "Annona squamosa", count: 1 },
  { common: "Indian tulip tree", scientific: "Thespesia populnea", count: 1 },
  { common: "Indian cherry", scientific: "Muntingia calabura", count: 1 },
  { common: "Indian Coral Tree", scientific: "Erythrina variegata", count: 1 },
  { common: "Indian siris", scientific: "Albizia lebbeck", count: 1 },
  { common: "Ceylon iron wood", scientific: "Mesua ferrea", count: 1 },
],
  },
      "Thiruvalutheeswarar Temple": {
    photo: "images/templ4.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1029.5617402920493!2d77.60091050932368!3d8.43497970156411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjYnMDYuMiJOIDc3wrAzNicwNi4xIkU!5e1!3m2!1sen!2sin!4v1757064485003!5m2!1sen!2sin",
    noOfTrees: 98,
    area: "0.39 acres",
    speciesCount: 52,
    datePlanted: "16 Sept 2022",
trees: [
  { common: "Oleander", scientific: "Nerium oleander", count: 21 },
  { common: "Royal Jasmine", scientific: "Jasminum grandiflorum", count: 13 },
  { common: "Siamese Cassia", scientific: "Senna siamea", count: 2 },
  { common: "bael", scientific: "Aegle marmelos", count: 2 },
  { common: "Arjun tree", scientific: "Terminalia arjuna", count: 2 },
  { common: "Mango tree", scientific: "Mangifera indica", count: 2 },
  { common: "Indian Beech Tree", scientific: "Pongamia pinnata", count: 2 },
  { common: "East indian mahogany", scientific: "Toona ciliata", count: 2 },
  { common: "Baheda", scientific: "Terminalia bellirica", count: 2 },
  { common: "Amla", scientific: "Phyllanthus emblica", count: 2 },
  { common: "Amaltas", scientific: "Cassia fistula", count: 1 },
  { common: "Peepal tree", scientific: "Ficus religiosa", count: 1 },
  { common: "Fiddlewood", scientific: "Citharexylum spinosum", count: 1 },
  { common: "Haldu", scientific: "Haldina cordifolia", count: 1 },
  { common: "Fishtail Palm", scientific: "Caryota urens", count: 1 },
  { common: "Bidi leaf tree", scientific: "Diospyros melanoxylon", count: 1 },
  { common: "Champaca", scientific: "Magnolia champaca", count: 1 },
  { common: "Indian cherry", scientific: "Muntingia calabura", count: 1 },
  { common: "Coconut", scientific: "Cocos nucifera", count: 1 },
  { common: "Sausage Tree", scientific: "Kigelia africana", count: 1 },
  { common: "Indian butter tree", scientific: "Diploknema butyracea", count: 1 },
  { common: "Indian sandalwood", scientific: "Santalum album", count: 1 },
  { common: "clearing-nut tree", scientific: "Strychnos potatorum", count: 1 },
  { common: "China Rose", scientific: "Hibiscus rosa-sinensis", count: 1 },
  { common: "Star fruit", scientific: "Averrhoa carambola", count: 1 },
  { common: "Curry leaf", scientific: "Murraya koenigii", count: 1 },
  { common: "Guava", scientific: "Psidium guajava", count: 1 },
  { common: "Indian cork tree", scientific: "Millingtonia hortensis", count: 1 },
  { common: "White Silk-Cotton Tree", scientific: "Bombax ceiba", count: 1 },
  { common: "Indian Almond", scientific: "Terminalia catappa", count: 1 },
  { common: "Custard apple", scientific: "Annona squamosa", count: 1 },
  { common: "Sulthan chempa", scientific: "Michelia champaca", count: 1 },
  { common: "Coral Jasmine", scientific: "Nyctanthes arbor-tristis", count: 1 },
  { common: "Dye fig", scientific: "Ficus tinctoria", count: 1 },
  { common: "Indian tulip tree", scientific: "Thespesia populnea", count: 1 },
  { common: "Chaste Tree", scientific: "Vitex negundo", count: 1 },
  { common: "Cannonball tree", scientific: "Couroupita guianensis", count: 1 },
  { common: "Ceylon satin wood", scientific: "Chloroxylon swietenia", count: 1 },
  { common: "jack fruit tree", scientific: "Artocarpus heterophyllus", count: 1 },
  { common: "Sweet indrajao", scientific: "Wrightia tinctoria", count: 1 },
  { common: "Garlic pear tree", scientific: "Crateva magna", count: 1 },
  { common: "Common bamboo", scientific: "Bambusa vulgaris", count: 1 },
  { common: "Lenten tree", scientific: null, count: 1 },
  { common: "Neem tree", scientific: "Azadirachta indica", count: 1 },
  { common: "Gray Nicker", scientific: "Guilandina bonduc", count: 1 },
  { common: "Kindal tree", scientific: "Terminalia paniculata", count: 1 },
  { common: "Devil Tree", scientific: "Alstonia scholaris", count: 1 },
  { common: "Hari champa", scientific: "Artabotrys hexapetalus", count: 1 },
  { common: "Pride of India", scientific: "Lagerstroemia speciosa", count: 1 },
  { common: "Pinwheelflower", scientific: "Tabernaemontana divaricata", count: 1 },
  { common: "Wood apple", scientific: "Limonia acidissima", count: 1 },
  { common: "Palas tree", scientific: "Butea monosperma", count: 1 },
  { common: "Indian Elm", scientific: "Holoptelea integrifolia", count: 1 },
]
  },
    "Boominathar Temple": {
  photo: "images/templ5.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3466.331495392402!2d77.52418840989513!3d8.699616194023282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnNTguNiJOIDc3wrAzMSczNi40IkU!5e1!3m2!1sen!2sin!4v1757065020351!5m2!1sen!2sin",
    noOfTrees: 111,
    area: "0.8 acres",
    speciesCount: 68,
    datePlanted: "29 July 2023",
trees: [
  { common: "Haldu", scientific: "Haldina cordifolia", count: "NA" },
  { common: "Siris tree", scientific: "Albizia lebbeck", count: "NA" },
  { common: "Devil Tree", scientific: "Alstonia scholaris", count: "NA" },
  { common: "Cashew tree", scientific: "Anacardium occidentale", count: "NA" },
  { common: "Custard apple", scientific: "Annona squamosa", count: "NA" },
  { common: "Hari champa", scientific: "Artabotrys hexapetalus", count: "NA" },
  { common: "jack fruit tree", scientific: "Artocarpus heterophyllus", count: "NA" },
  { common: "Star fruit", scientific: "Averrhoa carambola", count: "NA" },
  { common: "Neem", scientific: "Azadirachta indica", count: "NA" },
  { common: "Bidi leaf tree", scientific: "Diospyros melanoxylon", count: "NA" },
  { common: "Palas tree", scientific: "Butea monosperma", count: "NA" },
  { common: "Gray Nicker", scientific: "Guilandina bonduc", count: "NA" },
  { common: "Sulthan chempa", scientific: "Michelia champaca", count: "NA" },
  { common: "Golden shower tree", scientific: "Cassia fistula", count: "NA" },
  { common: "Silk-Cotton Tree", scientific: "Ceiba pentandra", count: "NA" },
  { common: "True cinnamon tree", scientific: "Cinnamomum verum", count: "NA" },
  { common: "Indian cherry", scientific: "Muntingia calabura", count: "NA" },
  { common: "Cannonball tree", scientific: "Couroupita guianensis", count: "NA" },
  { common: "Garlic pear tree", scientific: "Crateva magna", count: "NA" },
  { common: "Mexican Calabash", scientific: "Crescentia alata", count: "NA" },
  { common: "Royal Poinciana", scientific: "Delonix regia", count: "NA" },
  { common: "Ebony tree", scientific: "Diospyros ebenum", count: "NA" },
  { common: "Peepal tree", scientific: "Ficus religiosa", count: "NA" },
  { common: "Dye Fig", scientific: "Ficus tinctoria", count: "NA" },
  { common: "Gamhar tree", scientific: "Gmelina arborea", count: "NA" },
  { common: "Anjan", scientific: "Hardwickia binata", count: "NA" },
  { common: "Indian Elm", scientific: "Holoptelea integrifolia", count: "NA" },
  { common: "Thin jasmine", scientific: "Jasminum angustifolium", count: "NA" },
  { common: "Sausage Tree", scientific: "Kigelia africana", count: "NA" },
  { common: "Pride of India", scientific: "Lagerstroemia speciosa", count: "NA" },
  { common: "Wood apple", scientific: "Limonia acidissima", count: "NA" },
  { common: "Golden champaca", scientific: "Michelia champaca", count: "NA" },
  { common: "Mango tree", scientific: "Mangifera indica", count: "NA" },
  { common: "Ceylon iorn wood", scientific: "Mesua ferrea", count: "NA" },
  { common: "Spanish cherry", scientific: "Mimusops elengi", count: "NA" },
  { common: "Screwpine", scientific: "Pandanus tectorius", count: "NA" },
  { common: "Passion Fruit", scientific: "Passiflora edulis", count: "NA" },
  { common: "Amla", scientific: "Phyllanthus emblica", count: "NA" },
  { common: "Indian Beech Tree", scientific: "Pongamia pinnata", count: "NA" },
  { common: "Khejri Tree", scientific: "Prosopis cineraria", count: "NA" },
  { common: "Guava", scientific: "Psidium guajava", count: "NA" },
  { common: "East indian mahogany", scientific: "Toona ciliata", count: "NA" },
  { common: "Sandal wood", scientific: "Santalum album", count: "NA" },
  { common: "Ashoka tree", scientific: "Saraca asoca", count: "NA" },
  { common: "Nux vomica", scientific: "Strychnos nux-vomica", count: "NA" },
  { common: "clearing-nut tree", scientific: null, count: "NA" },
  { common: "Jamun", scientific: "Syzygium cumini", count: "NA" },
  { common: "crape jasmine", scientific: "Tabernaemontana divaricata", count: "NA" },
  { common: "Tamarind", scientific: "Tamarindus indica", count: "NA" },
  { common: "Baheda", scientific: "Terminalia bellirica", count: "NA" },
  { common: "Arjun tree", scientific: "Terminalia arjuna", count: "NA" },
  { common: "Indian tulip tree", scientific: "Thespesia populnea", count: "NA" },
  { common: "Chaste Tree", scientific: "Vitex negundo", count: "NA" },
  { common: "Sweet indrajao", scientific: "Wrightia tinctoria", count: "NA" },
  { common: "golden penda", scientific: "Xanthostemon chrysanthus", count: "NA" },
  { common: "Ceylon satin wood", scientific: "Chloroxylon swietenia", count: "NA" },
  { common: "African tulip tree", scientific: "Spathodea campanulata", count: "NA" },
  { common: "West Indian Elm", scientific: "Guazuma ulmifolia", count: "NA" },
  { common: "Teak", scientific: "Tectona grandis", count: "NA" },
  { common: "Fishtail Palm", scientific: "Caryota urens", count: "NA" },
  { common: "Betel Palm", scientific: "Areca catechu", count: "NA" },
  { common: "Indian Coral Tree", scientific: "Erythrina variegata", count: "NA" },
  { common: "Indian Almond", scientific: "Terminalia catappa", count: "NA" },
  { common: "Indian Cork Tree", scientific: "Millingtonia hortensis", count: "NA" },
  { common: "Indian Butter Tree", scientific: "Diploknema butyracea", count: "NA" },
  { common: "Lemon", scientific: "Citrus limon", count: "NA" },
  { common: "Indian Mulberry", scientific: "Morinda citrifolia", count: "NA" },
]
  },
    "Sri Veeraraghava Perumal Temple": {
  photo: "images/templ6.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.3482173181219!2d77.59926604664938!3d8.434052157878202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0467b12ab9c2cd%3A0xbdb8bb5e50487181!2sSri%20Veeraraagava%20Perumal%20Kovil!5e1!3m2!1sen!2sin!4v1757307717996!5m2!1sen!2sin",
    noOfTrees: 40,
    area: "NA",
    speciesCount: 30,
    datePlanted: "9 Dec 2023",
trees: [
  { common: "Updated Soon", scientific: null, count: "Updated Soon" },
]
  },
    "Azhiyapatheeshwar Temple": {
  photo: "images/templ7.JPG",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1273.5644834068453!2d77.69559483823771!3d8.712263584655934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDInNDMuNCJOIDc3wrA0MSc0Ny4yIkU!5e1!3m2!1sen!2sin!4v1757308940616!5m2!1sen!2sin",
    noOfTrees: 60,
    area: "NA",
    speciesCount: 40,
    datePlanted: "5 June 2024",
trees: [
  { common: "Updated Soon", scientific: null, count: "Updated Soon" },
]
  },
      "Ariyanatha Swami Temple": {
    photo: "images/templ8.png",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1029.5617402920493!2d77.60091050932368!3d8.43497970156411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjYnMDYuMiJOIDc3wrAzNicwNi4xIkU!5e1!3m2!1sen!2sin!4v1757064485003!5m2!1sen!2sin",
    noOfTrees: "30",
    area: "NA",
    speciesCount: 30,
    datePlanted: "1 Jan 2025",
trees: [
  { common: "Poison Nut Tree", scientific: "Strychnos nux-vomica", count: "1" },
  { common: "Indian Gooseberry", scientific: "Phyllanthus emblica", count: "1" },
  { common: "Mountain Ebony", scientific: "Bauhinia variegata", count: "1" },
  { common: "Java Plum", scientific: "Syzygium cumini", count: "1" },
  { common: "Indian Gum Arabic Tree", scientific: "Senegalia senegal", count: "1" },
  { common: "Black Catechu", scientific: "Senegalia catechu", count: "1" },
  { common: "White Bark Acacia", scientific: "Vachellia leucophloea", count: "1" },
  { common: "Common Bamboo", scientific: "Bambusa vulgaris", count: "1" },
  { common: "Sacred Fig", scientific: "Ficus religiosa", count: "1" },
  { common: "Alexandrian Laurel", scientific: "Ficus macrophylla", count: "1" },
  { common: "Banyan Tree", scientific: "Ficus benghalensis", count: "1" },
  { common: "Flame of the Forest", scientific: "Butea monosperma", count: "1" },
  { common: "Oleander", scientific: "Nerium oleander", count: "1" },
  { common: "Cluster Fig", scientific: "Ficus racemosa", count: "1" },
  { common: "Bael Tree", scientific: "Aegle marmelos", count: "1" },
  { common: "Arjun Tree", scientific: "Terminalia arjuna", count: "1" },
  { common: "Wood Apple", scientific: "Limonia acidissima", count: "1" },
  { common: "Spanish Cherry", scientific: "Mimusops elengi", count: "1" },
  { common: "Toothbrush Tree", scientific: "Salvadora persica", count: "1" },
  { common: "Golden Shower Tree", scientific: "Cassia fistula", count: "1" },
  { common: "Indian Willow", scientific: "Salix tetrasperma", count: "1" },
  { common: "Jackfruit Tree", scientific: "Artocarpus heterophyllus", count: "1" },
  { common: "Crown Flower", scientific: "Calotropis gigantea", count: "1" },
  { common: "Teak", scientific: "Tectona grandis", count: "1" },
  { common: "Khejri Tree", scientific: "Prosopis cineraria", count: "1" },
  { common: "Kadam Tree", scientific: "Neolamarckia cadamba", count: "1" },
  { common: "Mango Tree", scientific: "Mangifera indica", count: "1" },
  { common: "Clearing Nut Tree", scientific: "Strychnos potatorum", count: "1" },
  { common: "Neem Tree", scientific: "Azadirachta indica", count: "1" },
  { common: "Mahua Tree", scientific: "Madhuca longifolia", count: "1" },
]

  },
    "Sri Soundarapandiswarar Temple": {
  photo: "images/templ10.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d619.8077912805916!2d77.55786620285167!3d8.53118543801637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1757311992073!5m2!1sen!2sin",
    noOfTrees: "63",
    area: "NA",
    speciesCount: "34",
    datePlanted: "19 Aug 2025",
trees: [
  { common: "Indian Beech (Pungai)", scientific: "Pongamia pinnata", count: "2" },
{ common: "Mango", scientific: "Mangifera indica", count: "2" },
{ common: "Neem", scientific: "Azadirachta indica", count: "2" },
{ common: "Mahua (Iluppai)", scientific: "Madhuca longifolia", count: "2" },
{ common: "Indian Laburnum (Ambarathi)", scientific: "Cassia fistula", count: "2" },
{ common: "Bamboo", scientific: "Bambusa vulgaris", count: "2" },
{ common: "Nagalinga Tree", scientific: "Couroupita guianensis", count: "2" },
{ common: "Fig (Athi)", scientific: "Ficus racemosa", count: "2" },
{ common: "Thanri Tree", scientific: "Terminalia chebula", count: "2" },
{ common: "Jamun (Naval)", scientific: "Syzygium cumini", count: "2" },
{ common: "Banyan", scientific: "Ficus benghalensis", count: "2" },
{ common: "Crimson Bottlebrush (Seng Kadambu)", scientific: "Melaleuca citrina", count: "2" },
{ common: "Magizham Tree", scientific: "Mimusops elengi", count: "2" },
{ common: "Bael (Mavilinkam)", scientific: "Aegle marmelos", count: "2" },
{ common: "Seven-leaved Tree (Ezilaippalai)", scientific: "Albizia amara", count: "2" },
{ common: "Karukkuvachi", scientific: "Wrightia tinctoria", count: "2" },
{ common: "Cluster Fig (Kalakkai)", scientific: "Ficus racemosa", count: "2" },
{ common: "Myrobalan (Kadukkai)", scientific: "Terminalia chebula", count: "2" },
{ common: "Gooseberry (Nelli)", scientific: "Phyllanthus emblica", count: "2" },
{ common: "Drumstick Tree (Kalyana Murungai)", scientific: "Moringa oleifera", count: "2" },
{ common: "Portia Tree (Poovarasu)", scientific: "Thespesia populnea", count: "2" },
{ common: "Aava (Sacred Tree)", scientific: "Ficus religiosa", count: "2" },
{ common: "Indian Milkweed (Ulakkai Palai)", scientific: "Calotropis gigantea", count: "2" },
{ common: "Bael (Vilvam)", scientific: "Aegle marmelos", count: "2" },
{ common: "Velvettileaf Tree (Veppalai)", scientific: "Glochidion ellipticum", count: "2" },
{ common: "Wood Apple (Vilamaram)", scientific: "Limonia acidissima", count: "2" },
{ common: "Jackfruit", scientific: "Artocarpus heterophyllus", count: "2" },
{ common: "Soapnut (Thetrankottai)", scientific: "Sapindus trifoliatus", count: "2" },
{ common: "Alinjil (Odina Wood)", scientific: "Odina wodier", count: "2" },
{ common: "Thiruodu (Sacred Tree)", scientific: "Clerodendrum phlomidis", count: "1" },
{ common: "Burasu", scientific: "Lagerstroemia speciosa", count: "1" },
{ common: "Seetha (Tree)", scientific: "Annona reticulata", count: "1" },
{ common: "Palmyra Palm (Thazhipanai)", scientific: "Borassus flabellifer", count: "1" },
{ common: "Porasu", scientific: "Thespesia populnea", count: "1" }
]
  },
  // ... add 10th temple here
};

export default function Nandavanam() {
  const [selectedTemple, setSelectedTemple] = useState(
    "Thirukadugai Moondreeswarar Temple"
  );
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const temple = templeData[selectedTemple];

  return (
    <div className="nandavanam-container">
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Namma Ooru Nandavanam</h1>
          <div className="hero-ribbon">
            <div className="ribbon-content">
              <p className="hero-paragraph">
                ATREE's Agasthyamalai Community Conservation Centre,  in collaboration with the Tirunelveli District Administration and the  Hindu Religious and Charitable Endowments Board, conducted a  survey of the trees in 131 temples. While native trees like Neem,  Marutham, and Vilvam were abundant, species such as Punnai and  Illupai were alarmingly scarce. To address this, the <b>Namma Ooru  Nandavanam</b> project was launched, aiming to restore temple gardens  with native trees, medicinal plants, and flowering shrubs. The initiative  also involves regularly monitoring these gardens to document lessons  for broader implementation and engaging local communities to  recognize the ecological and spiritual significance of Nandavanams.  The project has already been implemented in nine temples, showing  promising results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content below hero */}
      <div className="nandavanam-main">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <nav className="temple-list" aria-label="Temple list">
              {Object.keys(templeData).map((name) => (
                <button
                  key={name}
                  className={`temple-item ${selectedTemple === name ? "active" : ""}`}
                  onClick={() => setSelectedTemple(name)}
                >
                  {name}
                </button>
              ))}
            </nav>
          </div>
        </aside>
        {/* Details */}
        <section className="details">
          <div className="details-top">
            {/* Photo + stats */}
            <div className="photo-and-stats">
              <img
                src={`${import.meta.env.BASE_URL}${temple.photo}`}
                alt={selectedTemple}
                className="circle-photo"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowPhotoPopup(true)}
              />
              <div className="stats">
                <div className="stat-row">
                  <span className="stat-label">No. of Trees</span>
                  <span className="stat-value">{temple.noOfTrees}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Area</span>
                  <span className="stat-value">{temple.area}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Species Count</span>
                  <span className="stat-value">{temple.speciesCount}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Date Planted</span>
                  <span className="stat-value">{temple.datePlanted}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-wrapper">
              <iframe
                title={`${selectedTemple} map`}
                src={temple.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Tree table */}
          <table className="tree-table">
            <thead>
              <tr>
                <th>Common Name</th>
                <th>Scientific Name</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {temple.trees.map((t, i) => (
                <tr key={i}>
                  <td>{t.common}</td>
                  <td>{t.scientific}</td>
                  <td>{t.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Photo Popup Modal */}
      {showPhotoPopup && (
        <div
          className="photo-popup-overlay"
          onClick={() => setShowPhotoPopup(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            className="photo-popup-content"
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}${temple.photo}`}
              alt={selectedTemple}
              style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
            />
            <button
              onClick={() => setShowPhotoPopup(false)}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                fontSize: 24,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close photo"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
