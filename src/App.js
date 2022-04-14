import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
	const cards = data.map((card) => (
		<Card
			key={card.id}
			card={card}
			// img={card.coverImg}
			// rating={card.stats.rating}
			// reviewCount={card.stats.reviewCount}
			// location={card.location}
			// title={card.title}
			// price={card.price}
			// openSpots={card.openSpots}
		/>
	));
	return (
		<div className="App">
			<div className="main">
				<Navbar />
				<Hero />
				<section className="cards--list">{cards}</section>
			</div>
		</div>
	);
}

export default App;
