
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
  const [links, setLinks] = useState([
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png',
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
  ]);
  const [products, setProducts] = useState([
    { name: 'Orange', votes: 0 },
    { name: 'Apple', votes: 0 },
    { name: 'Banana', votes: 0 },
    { name: 'Mango', votes: 0 },
  ]);
  const onVote = (index, vote) => {
    const newProducts = [...products];
    newProducts[index].votes += vote;
    setProducts(newProducts);
  }
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={links} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={products} onVote={(index,vote) => onVote(index,vote)} />
      <br />
      <h3>'Rating' test</h3>
      <Rating />
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
    </div>
  );
}
