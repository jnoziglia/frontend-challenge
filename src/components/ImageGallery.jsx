/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove }) {
	const [isRemoved, setIsRemoved] = useState(false);

	if (isRemoved) {
		return null;
	}
	else {
		return (
			<div className="gallery__item">
				<img className="gallery__item__img" src={src} alt="" /> 
				<button className="gallery__item__remove" onClick={() => setIsRemoved(true)}>X</button>
			</div>
		);
	}
}

/* 
 * As opposed to the Grocery example, in order to keep the example as it was and since there are no requirements on where to handle the state,
 * the removed state is handled inside the image component 
 */
export function ImageGallery({ links }) {
	return (
		<div className="gallery">
			{ links.map((link, index) => <Image src={link} key={link+index} />) }
		</div>
	);
}
