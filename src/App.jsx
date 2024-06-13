import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "I am Little Duck",
    imgSrc: "https://img-31.ccm2.net/aoRGBEGGQk_4JKu7HmX1rD12M58=/1240x/smart/0476616b609244458962620520ffe5e6/ccmcms-hugo/10605741.jpg",
    attack: "Little Duck attack COIN-COIN !",

  },
  {
    name: "I am Little Cow",
    imgSrc: "https://static.vecteezy.com/ti/vecteur-libre/t1/7153009-happy-cartoon-vache-isole-sur-fond-blanc-vectoriel.jpg",
    attack: "Little Cow attack MEUH-MEUH !",
  },
  {
    name: "I am Little Pig",
    attack: "Little Pig attack OUIK-OUIK !",
  }
];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[2]} />
    </div>
  );
}

export default App;