import cardStar from "../images/star.png";
const Card = ({ card }) => {
	let badgeText;
	if (card.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (card.location === "Online") {
		badgeText = "ONLINE";
	}
	return (
		<div className="card">
			{badgeText && <div className="card--badge">{badgeText}</div>}
			<img src={`../images/${card.coverImg}`} alt="" className="card--image" />
			<div className="card--stats">
				<img src={cardStar} alt="Star" className="card--star" />
				<span className="rating">{card.stats.rating}</span>
				<span className="review--count">({card.stats.reviewCount}) • </span>
				<span className="location"> {card.location}</span>
			</div>
			<p className="card--title">{card.title}</p>
			<p className="price">
				From $ {card.price}
				<span className="person"> / person</span>
			</p>
		</div>
	);
};
export default Card;
