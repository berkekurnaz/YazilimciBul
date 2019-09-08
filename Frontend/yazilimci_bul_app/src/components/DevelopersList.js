import React from 'react';
import PropTypes from 'prop-types';

import DeveloperCard from "./DeveloperCard";

const DevelopersList = ({ developers }) => {
    
    const emptyMessage = (
		<p>There are no movies yet.</p>
	);

	const developersList = (
		<div>

			{
				developers.error.response
					? <h3>Error retrieving data!</h3>
					:
					<div>
                        {
							developers.map(developer =>
								<DeveloperCard
									key={developer._id}
									developer={developer} />)
						}
                    </div>
			}
		</div>
	);

	return (
		<div>
			{ developers.length === 0 ? emptyMessage : developersList }
		</div>
	);
};

DevelopersList.propTypes = {
	developers: PropTypes.shape({
		developersList: PropTypes.array.isRequired
	}).isRequired
};

export default DevelopersList;