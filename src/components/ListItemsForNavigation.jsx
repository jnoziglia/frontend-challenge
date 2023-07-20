/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	name: "Item"
});

export function ListItemsForNavigation(props) {
	const [
		selectedIndex,
		setSelectedIndex,
	] = useState(0);
	const activeItemRef = useRef();

	useEffect(
		function () {
			// Focus the item using this effect
			const map = getMap();
			const node = map.get(selectedIndex);
			node.focus();
		},
		[
			selectedIndex
		]
	);

	function handleKeyDown(event) {
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
		switch(event.key) {
			case "ArrowDown":
			case "ArrowLeft":
				event.preventDefault();
				if (selectedIndex > 0) {
					setSelectedIndex(selectedIndex - 1);
				}
				break;
			case "ArrowUp":
			case "ArrowRight":
				event.preventDefault();
				if (selectedIndex < itemsList.length - 1) {
					setSelectedIndex(selectedIndex + 1);
				}
				break;
			default:
				break;
		}
	}

	function getMap() {
		if (!activeItemRef.current) {
		  activeItemRef.current = new Map();
		}
		return activeItemRef.current;
	  }

	return (
		<ul onKeyDown={handleKeyDown}>
			{/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
			{/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
			{/** Do not forget to pass the reference to the selected item */}
			{ itemsList.map((item, index) => (
				<li key={item.name+index} tabIndex={0} ref={(node) => {
					const map = getMap();
					if (node) {
					  map.set(index, node);
					} else {
					  map.delete(index);
					}
				  }}>
					{item.name}
				</li>
			)) }
		</ul>
	);
}
