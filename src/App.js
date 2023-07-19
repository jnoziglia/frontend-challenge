
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
          <button key={index} onClick={() => setActiveSection(section)}>{section}</button>
        )) }
      </div>
      <h3>'{activeSection}' test</h3>
      { section }
      <br />
    </div>
  );
}

const IMAGES_LINKS = [
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png',
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png',
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png',
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png',
  'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
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