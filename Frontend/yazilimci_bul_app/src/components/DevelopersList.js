import React from 'react';
import PropTypes from 'prop-types';

import DeveloperCard from "./DeveloperCard";

const DevelopersList = ({ developers }) => {

	const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const developersList = (
		developers.map(developer =>
			<div class="d-block d-md-flex listing-horizontal">

				<a href="#" class="img d-block" style={{ backgroundImage: `url(${developer.photo})` }}>
				</a>

				<div class="lh-content">
					<a href="#" class="bookmark"><span class="icon-heart"></span></a>
					<h3><a href="#">{developer.name + " " + developer.surname}</a></h3>
					<p>{developer.name}</p>
					<p>{developer.job}</p>
					<p>
						Veritabanı Yöneticisi, Backend Developer, Frontend Developer
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