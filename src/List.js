import React from 'react';
import './List.css';
function List({ person }) {
	return (
		<>
			{person.map((people) => {
				const { name, age, image } = people;
				return (
					<div className="list">
						<img src={image} alt="image" />

						<div className="list__content">
							<h4>{name}</h4>
							<p>{age} years old</p>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default List;
