import React from "react";
import "./App.css";

import ChooseNft from "./Components/Choose/ChooseNft";
import PhotoCard from "./Components/Nfts/PhotoCard";
import TradeSize from "./Components/Custom/TradeSize";
import Input from "./Components/Custom/Input";
import Strategies from "./Components/TradeStrategies/strategies";
import AdditionalStrategies from "./Components/TradeStrategies/Aditionals";

function App() {
  return (
    <div className="App">
      <ChooseNft/>
      <PhotoCard/>
      <div className="mobile-background">
        
      <TradeSize/>
      <Input/>
      <Strategies/>
      <AdditionalStrategies/>

      </div>
    </div>
  );
}

export default App;
