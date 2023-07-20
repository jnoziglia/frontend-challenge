
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { Rating } from "./components/Rating";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";

import './App.css';

import { useState } from "react";

/* Added some code here to present the examples in a more organized way */

export default function App() {
  const [links, setLinks] = useState(IMAGES_LINKS);
  const [products, setProducts] = useState(PRODUCTS);
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);

  function onVote(index, vote) {
    const newProducts = [...products];
    newProducts[index].votes += vote;
    setProducts(newProducts);
  }

  let section = null;
  switch (activeSection) {
    case 'Message':
      section = <Message />;
      break;
    case 'FocusableInput':
      section = <FocusableInput focusable={true} />;
      break;
    case 'ImageGallery':
      section = <ImageGallery links={links} />;
      break;
    case 'PlayerStatus':
      section = <PlayerStatus />;
      break;
    case 'TeamsList':
      section = <TeamsList />;
      break;
    case 'Grocery':
      section = <Grocery products={products} onVote={(index,vote) => onVote(index,vote)} />;
      break;
    case 'Rating':
      section = <Rating />;
      break;
    case 'ListItemsForNavigation':
      section = <ListItemsForNavigation />;
      break;
    default:
      section = null;
  }

  return (
    <div className="App">
      <div className="navigation">
        {/* Render here each component from the "components" directory */}
        { SECTIONS.map((section, index) => (
            <button key={index} onClick={() => setActiveSection(section)} className={section === activeSection ? "active" : ""}>{section}</button>
        )) }
      </div>
      <h3>'{activeSection}' test</h3>
      <div className="container">
        { section }
      </div>
      <br />
    </div>
  );
}

const IMAGES_LINKS = [
  './images/DSC00830.jpg',
  './images/DSC01015.jpg',
  './images/DSC01182.jpg',
  './images/DSC01209.jpg',
  './images/DSC01226.jpg',
  './images/DSC01446.jpg',
  './images/DSC01816.jpg',
  './images/DSC02039.jpg',
  './images/DSC02121.jpg',
  './images/DSC02420.jpg',
  './images/DSC02524.jpg',
  './images/DSC02928.jpg',
  './images/DSC03085.jpg',
  './images/DSC03223.jpg',
  './images/DSC03240.jpg'
];

const PRODUCTS = [
  { name: 'Orange', votes: 0 },
  { name: 'Apple', votes: 0 },
  { name: 'Banana', votes: 0 },
  { name: 'Mango', votes: 0 },
]

const SECTIONS = [
  'Message',
  'FocusableInput',
  'ImageGallery',
  'PlayerStatus',
  'TeamsList',
  'Grocery',
  'Rating',
  'ListItemsForNavigation'
];