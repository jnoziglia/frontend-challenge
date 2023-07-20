/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

function Product(props) {
	function handlePlus() {
		props.onVote(1);
	}

	function handleMinus() {
		props.onVote(-1);
	}

	return (
		<li className="grocery__item">
			<span className="grocery__item__name">
				{props.name} - votes: {props.votes}
			</span>
			<span className="grocery__item__actions">
				<button className="grocery__item__actions--plus" onClick={handlePlus}>+</button>
				<button className="grocery__item__actions--minus" onClick={handleMinus}>-</button>
			</span>
		</li>
	);
}

/* Added onVote prop in order to keep the state in the topmost component. Products array (with both product name and votes) is handled in the App */
export function Grocery({ products, onVote }) {
	return (
		<ul className="grocery">
			{products.map((product, index) => <Product key={product.name} onVote={(vote) => onVote(index, vote)} name={product.name} votes={product.votes} />)}
		</ul>
	);
}
