import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";



const DevelopersList = ({ developers }) => {

	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const developersList = (
		developers.map(developer =>
			<div class="d-block d-md-flex listing-horizontal">

				<Link to={`/developer/${developer._id}`} class="img d-block" style={{ backgroundImage: `url(${developer.photo})` }}></Link>
				
				<div class="lh-content">
					<Link to={`/developer/${developer._id}`} class="bookmark"><span class="icon-heart"></span></Link>
					<h3><Link to={`/developer/${developer._id}`}>{developer.name + " " + developer.surname}</Link></h3>
					<p>{developer.job}</p>
					<p>
						{developer.developerAreas}
					</p>
				</div>

			</div>
		)
	);

	return (
		<div>
			{developers.length === 0 ? emptyMessage : developersList}
		</div>
	);
};

DevelopersList.propTypes = {
	developers: PropTypes.array.isRequired
};

export default DevelopersList;