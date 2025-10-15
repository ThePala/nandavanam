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
      { species: "Mango tree", count: 6 },
      { species: "Star jasmine", count: 3 },
      { species: "Amla", count: 3 },
      { species: "Indian tulip tree", count: 3 },
      { species: "Pinwheelflower", count: 2 },
      { species: "Large Garlic Pear", count: 2 },
      { species: "bael", count: 2 },
      { species: "Lemon", count: 2 },
      { species: "Golden shower", count: 2 },
      { species: "Gaub", count: 1 },
      { species: "Red Bead Tree", count: 1 },
      { species: "Hari champa", count: 1 },
      { species: "Devil Tree", count: 1 },
      { species: "Spanish cherry", count: 1 },
      { species: "Wood apple", count: 1 },
      { species: "China Rose", count: 1 },
      { species: "Jamun", count: 1 },
      { species: "White Silk-Cotton Tree", count: 1 },
      { species: "Ceylon iorn wood", count: 1 },
      { species: "Anjan", count: 1 },
      { species: "Fiddlewood", count: 1 },
      { species: "Neem tree", count: 1 },
      { species: "calabash tree", count: 1 },
      { species: "Nux vomica", count: 1 },
      { species: "Baheda", count: 1 },
      { species: "Indian Mulberry", count: 1 },
      { species: "Palas tree", count: 1 },
      { species: "Thin jasmine", count: 1 },
      { species: "Dye fig", count: 1 },
      { species: "Indian Oak", count: 1 },
      { species: "Bidi leaf tree", count: 1 },
      { species: "Sulthan chempa", count: 1 },
      { species: "Jasmine", count: 1 },
      { species: "Tamarind", count: 1 },
      { species: "Arjun tree", count: 1 },
      { species: "jack fruit tree", count: 1 },
      { species: "Gamhar tree", count: 1 },
      { species: "Indian butter tree", count: 1 },
      { species: "Common bamboo", count: 1 },
      { species: "Indian Bat fig", count: 1 },
      { species: "Banyan tree", count: 1 },
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
  { species: "Arjun tree", count: 6 },
  { species: "Sulthan chempa", count: 6 },
  { species: "Jamun", count: 4 },
  { species: "Indian butter tree", count: 4 },
  { species: "Common bamboo", count: 3 },
  { species: "Baheda", count: 3 },
  { species: "Pinwheelflower", count: 3 },
  { species: "Pongam Tree", count: 3 },
  { species: "Neem", count: 2 },
  { species: "Spanish cherry", count: 2 },
  { species: "jack fruit tree", count: 2 },
  { species: "Wood apple", count: 2 },
  { species: "Khejri Tree", count: 2 },
  { species: "Indian Mulberry", count: 1 },
  { species: "Indian Cork Tree", count: 1 },
  { species: "Dye fig", count: 1 },
  { species: "Peepal tree", count: 1 },
  { species: "False Ashok", count: 1 },
  { species: "Common jasmine", count: 1 },
  { species: "Champaca", count: 1 },
  { species: "Wild jack", count: 1 },
  { species: "Indian Oak", count: 1 },
  { species: "Palas tree", count: 1 },
  { species: "Amla", count: 1 },
  { species: "Ceylon iorn wood", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "calabash tree", count: 1 },
  { species: "Large Garlic Pear", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "Mango tree", count: 1 },
  { species: "Coral Jasmine", count: 1 },
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
  { species: "Jamun", count: 4 },
  { species: "Indian Mulberry", count: 4 },
  { species: "China rose", count: 3 },
  { species: "Neem", count: 3 },
  { species: "Indian Oak", count: 3 },
  { species: "Tree of Sorrow", count: 3 },
  { species: "Mango tree", count: 3 },
  { species: "Malabar Neem", count: 3 },
  { species: "Golden shower", count: 3 },
  { species: "Wood apple", count: 3 },
  { species: "Guava", count: 2 },
  { species: "Teak", count: 2 },
  { species: "Arjun tree", count: 2 },
  { species: "Dye fig", count: 2 },
  { species: "Common jasmine", count: 2 },
  { species: "Amla", count: 2 },
  { species: "Babool", count: 2 },
  { species: "Garlic pear tree", count: 2 },
  { species: "Pinwheelflower", count: 2 },
  { species: "Baheda", count: 2 },
  { species: "Spanish cherry", count: 2 },
  { species: "Palas tree", count: 2 },
  { species: "Indian butter tree", count: 2 },
  { species: "Peepal tree", count: 1 },
  { species: "Henna tree", count: 1 },
  { species: "Indian Beech Tree", count: 1 },
  { species: "Common bamboo", count: 1 },
  { species: "Tamarind tree", count: 1 },
  { species: "Palmyra Palm", count: 1 },
  { species: "Ebony tree", count: 1 },
  { species: "Nux Vomica", count: 1 },
  { species: "Red Bead Tree", count: 1 },
  { species: "Gray Nicker", count: 1 },
  { species: "Indian Almond", count: 1 },
  { species: "Chaste Tree", count: 1 },
  { species: "Night-blooming cestrum", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "jack fruit tree", count: 1 },
  { species: "Cluster fig", count: 1 },
  { species: "Indian Laurel", count: 1 },
  { species: "Carandas plum", count: 1 },
  { species: "Hari champa", count: 1 },
  { species: "Haldu", count: 1 },
  { species: "Ceylon satin wood", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "Cannonball tree", count: 1 },
  { species: "Star jasmine", count: 1 },
  { species: "Bidi leaf tree", count: 1 },
  { species: "Sulthan chempa", count: 1 },
  { species: "White Silk-Cotton Tree", count: 1 },
  { species: "Gamhar tree", count: 1 },
  { species: "True Kadamb", count: 1 },
  { species: "Black-Honey Shrub", count: 1 },
  { species: "Curry leaf", count: 1 },
  { species: "Siamese Cassia", count: 1 },
  { species: "Sausage Tree", count: 1 },
  { species: "Custard apple", count: 1 },
  { species: "Indian tulip tree", count: 1 },
  { species: "Indian cherry", count: 1 },
  { species: "Indian Coral Tree", count: 1 },
  { species: "Indian siris", count: 1 },
  { species: "Ceylon iron wood", count: 1 },
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
  { species: "Oleander", count: 21 },
  { species: "Royal Jasmine", count: 13 },
  { species: "Siamese Cassia", count: 2 },
  { species: "bael", count: 2 },
  { species: "Arjun tree", count: 2 },
  { species: "Mango tree", count: 2 },
  { species: "Indian Beech Tree", count: 2 },
  { species: "East indian mahogany", count: 2 },
  { species: "Baheda", count: 2 },
  { species: "Amla", count: 2 },
  { species: "Amaltas", count: 1 },
  { species: "Peepal tree", count: 1 },
  { species: "Fiddlewood", count: 1 },
  { species: "Haldu", count: 1 },
  { species: "Fishtail Palm", count: 1 },
  { species: "Bidi leaf tree", count: 1 },
  { species: "Champaca", count: 1 },
  { species: "Indian cherry", count: 1 },
  { species: "Coconut", count: 1 },
  { species: "Sausage Tree", count: 1 },
  { species: "Indian butter tree", count: 1 },
  { species: "Indian sandalwood", count: 1 },
  { species: "clearing-nut tree", count: 1 },
  { species: "China Rose", count: 1 },
  { species: "Star fruit", count: 1 },
  { species: "Curry leaf", count: 1 },
  { species: "Guava", count: 1 },
  { species: "Indian cork tree", count: 1 },
  { species: "White Silk-Cotton Tree", count: 1 },
  { species: "Indian Almond", count: 1 },
  { species: "Custard apple", count: 1 },
  { species: "Sulthan chempa", count: 1 },
  { species: "Coral Jasmine", count: 1 },
  { species: "Dye fig", count: 1 },
  { species: "Indian tulip tree", count: 1 },
  { species: "Chaste Tree", count: 1 },
  { species: "Cannonball tree", count: 1 },
  { species: "Ceylon satin wood", count: 1 },
  { species: "jack fruit tree", count: 1 },
  { species: "Sweet indrajao", count: 1 },
  { species: "Garlic pear tree", count: 1 },
  { species: "Common bamboo", count: 1 },
  { species: "Lenten tree", count: 1 },
  { species: "Neem tree", count: 1 },
  { species: "Gray Nicker", count: 1 },
  { species: "Kindal tree", count: 1 },
  { species: "Devil Tree", count: 1 },
  { species: "Hari champa", count: 1 },
  { species: "Pride of India", count: 1 },
  { species: "Pinwheelflower", count: 1 },
  { species: "Wood apple", count: 1 },
  { species: "Palas tree", count: 1 },
  { species: "Indian Elm", count: 1 },
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
  { species: "Haldu", count: "NA" },
  { species: "Siris tree", count: "NA" },
  { species: "Devil Tree", count: "NA" },
  { species: "Cashew tree", count: "NA" },
  { species: "Custard apple", count: "NA" },
  { species: "Hari champa", count: "NA" },
  { species: "jack fruit tree", count: "NA" },
  { species: "Star fruit", count: "NA" },
  { species: "Neem", count: "NA" },
  { species: "Bidi leaf tree", count: "NA" },
  { species: "Palas tree", count: "NA" },
  { species: "Gray Nicker", count: "NA" },
  { species: "Sulthan chempa", count: "NA" },
  { species: "Golden shower tree", count: "NA" },
  { species: "Silk-Cotton Tree", count: "NA" },
  { species: "True cinnamon tree", count: "NA" },
  { species: "Indian cherry", count: "NA" },
  { species: "Cannonball tree", count: "NA" },
  { species: "Garlic pear tree", count: "NA" },
  { species: "Mexican Calabash", count: "NA" },
  { species: "Royal Poinciana", count: "NA" },
  { species: "Ebony tree", count: "NA" },
  { species: "Peepal tree", count: "NA" },
  { species: "Dye Fig", count: "NA" },
  { species: "Gamhar tree", count: "NA" },
  { species: "Anjan", count: "NA" },
  { species: "Indian Elm", count: "NA" },
  { species: "Thin jasmine", count: "NA" },
  { species: "Sausage Tree", count: "NA" },
  { species: "Pride of India", count: "NA" },
  { species: "Wood apple", count: "NA" },
  { species: "Golden champaca", count: "NA" },
  { species: "Mango tree", count: "NA" },
  { species: "Ceylon iorn wood", count: "NA" },
  { species: "Spanish cherry", count: "NA" },
  { species: "Screwpine", count: "NA" },
  { species: "Passion Fruit", count: "NA" },
  { species: "Amla", count: "NA" },
  { species: "Indian Beech Tree", count: "NA" },
  { species: "Khejri Tree", count: "NA" },
  { species: "Guava", count: "NA" },
  { species: "East indian mahogany", count: "NA" },
  { species: "Sandal wood", count: "NA" },
  { species: "Ashoka tree", count: "NA" },
  { species: "Nux vomica", count: "NA" },
  { species: "clearing-nut tree", count: "NA" },
  { species: "Jamun", count: "NA" },
  { species: "crape jasmine", count: "NA" },
  { species: "Tamarind", count: "NA" },
  { species: "Baheda", count: "NA" },
  { species: "Arjun tree", count: "NA" },
  { species: "Indian tulip tree", count: "NA" },
  { species: "Chaste Tree", count: "NA" },
  { species: "Sweet indrajao", count: "NA" },
  { species: "golden penda", count: "NA" },
  { species: "Ceylon satin wood", count: "NA" },
  { species: "African tulip tree", count: "NA" },
  { species: "West Indian Elm", count: "NA" },
  { species: "Teak", count: "NA" },
  { species: "Fishtail Palm", count: "NA" },
  { species: "Betel Palm", count: "NA" },
  { species: "Indian Coral Tree", count: "NA" },
  { species: "Indian Almond", count: "NA" },
  { species: "Indian Cork Tree", count: "NA" },
  { species: "Indian Butter Tree", count: "NA" },
  { species: "Lemon", count: "NA" },
  { species: "Indian Mulberry", count: "NA" },
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
  { species: "Updated Soon", count: "Updated Soon" },
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
  { species: "NA", count: "NA" },
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
  { species: "Poison Nut Tree", count: "1" },
  { species: "Indian Gooseberry", count: "1" },
  { species: "Mountain Ebony", count: "1" },
  { species: "Java Plum", count: "1" },
  { species: "Indian Gum Arabic Tree", count: "1" },
  { species: "Black Catechu", count: "1" },
  { species: "White Bark Acacia", count: "1" },
  { species: "Common Bamboo", count: "1" },
  { species: "Sacred Fig", count: "1" },
  { species: "Alexandrian Laurel", count: "1" },
  { species: "Banyan Tree", count: "1" },
  { species: "Flame of the Forest", count: "1" },
  { species: "Oleander", count: "1" },
  { species: "Cluster Fig", count: "1" },
  { species: "Bael Tree", count: "1" },
  { species: "Arjun Tree", count: "1" },
  { species: "Wood Apple", count: "1" },
  { species: "Spanish Cherry", count: "1" },
  { species: "Toothbrush Tree", count: "1" },
  { species: "Golden Shower Tree", count: "1" },
  { species: "Indian Willow", count: "1" },
  { species: "Jackfruit Tree", count: "1" },
  { species: "Crown Flower", count: "1" },
  { species: "Teak", count: "1" },
  { species: "Khejri Tree", count: "1" },
  { species: "Kadam Tree", count: "1" },
  { species: "Mango Tree", count: "1" },
  { species: "Clearing Nut Tree", count: "1" },
  { species: "Neem Tree", count: "1" },
  { species: "Mahua Tree", count: "1" },
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
  { species: "Indian Beech (Pungai)", count: "2" },
{ species: "Mango", count: "2" },
{ species: "Neem", count: "2" },
{ species: "Mahua (Iluppai)", count: "2" },
{ species: "Indian Laburnum (Ambarathi)", count: "2" },
{ species: "Bamboo", count: "2" },
{ species: "Nagalinga Tree", count: "2" },
{ species: "Fig (Athi)", count: "2" },
{ species: "Thanri Tree", count: "2" },
{ species: "Jamun (Naval)", count: "2" },
{ species: "Banyan", count: "2" },
{ species: "Crimson Bottlebrush (Seng Kadambu)", count: "2" },
{ species: "Magizham Tree", count: "2" },
{ species: "Bael (Mavilinkam)", count: "2" },
{ species: "Seven-leaved Tree (Ezilaippalai)", count: "2" },
{ species: "Karukkuvachi", count: "2" },
{ species: "Cluster Fig (Kalakkai)", count: "2" },
{ species: "Myrobalan (Kadukkai)", count: "2" },
{ species: "Gooseberry (Nelli)", count: "2" },
{ species: "Drumstick Tree (Kalyana Murungai)", count: "2" },
{ species: "Portia Tree (Poovarasu)", count: "2" },
{ species: "Aava (Sacred Tree)", count: "2" },
{ species: "Indian Milkweed (Ulakkai Palai)", count: "2" },
{ species: "Bael (Vilvam)", count: "2" },
{ species: "Velvettileaf Tree (Veppalai)", count: "2" },
{ species: "Wood Apple (Vilamaram)", count: "2" },
{ species: "Jackfruit", count: "2" },
{ species: "Soapnut (Thetrankottai)", count: "2" },
{ species: "Alinjil (Odina Wood)", count: "2" },
{ species: "Thiruodu (Sacred Tree)", count: "1" },
{ species: "Burasu", count: "1" },
{ species: "Seetha (Tree)", count: "1" },
{ species: "Palmyra Palm (Thazhipanai)", count: "1" },
{ species: "Porasu", count: "1" }
]
  },
  // ... add all 9 temples here
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
                In 2021,  ATREE's Agasthyamalai Community Conservation Centre,  in collaboration with the Tirunelveli District Administration and the  Hindu Religious and Charitable Endowments Board, conducted a  survey of the trees in 131 temples. While native trees like Neem,  Marutham, and Vilvam were abundant, species such as Punnai and  Illupai were alarmingly scarce. To address this, the <b>Namma Ooru  Nandavanam</b> project was launched, aiming to restore temple gardens  with native trees, medicinal plants, and flowering shrubs. The initiative  also involves regularly monitoring these gardens to document lessons  for broader implementation and engaging local communities to  recognize the ecological and spiritual significance of Nandavanams.  The project has already been implemented in nine temples, showing  promising results
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
                <th>Tree Species</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {temple.trees.map((t, i) => (
                <tr key={i}>
                  <td>{t.species}</td>
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
