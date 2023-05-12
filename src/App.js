import "./styles.css";
import Header from "./componets/Header";
import Section from "./componets/Section";
import ListItem from "./componets/ListItem";

const gameListDate = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },
  {
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];

const channeListData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },

  {
    href: "https://www.twitch.tv/alanzoka",
    src:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },

  {
    href: "https://www.twitch.tv/cellbit",
    src:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagemd de Cellbit"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          className="games-list"
          title="Meus Jogos"
          subtitle="Lista Jogos"
        >
          {gameListDate.map((item) => {
            return (
              <ListItem href={item.href} imgUrl={item.src} alt={item.alt} />
            );
          })}
        </Section>
        <Section
          className="channel-list"
          title="Meus Canais Favoritos"
          subtitle=" Lista de canais"
        >
          {channeListData.map((item) => {
            return (
              <ListItem href={item.href} imgUrl={item.src} alt={item.alt} />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
