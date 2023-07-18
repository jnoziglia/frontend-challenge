/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";

export function Rating() {
	const [rating, setRating] = useState(0);
	return (
		<div id="rating">
			<span className={rating >= 1 ? "active" : ""} onClick={() => setRating(1)}>*</span>
			<span className={rating >= 2 ? "active" : ""} onClick={() => setRating(2)}>*</span>
			<span className={rating >= 3 ? "active" : ""} onClick={() => setRating(3)}>*</span>
			<span className={rating >= 4 ? "active" : ""} onClick={() => setRating(4)}>*</span>
			<span className={rating >= 5 ? "active" : ""} onClick={() => setRating(5)}>*</span>
		</div>
	);
}
