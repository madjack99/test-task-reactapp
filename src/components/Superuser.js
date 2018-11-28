import React from 'react'

const Superuser = () => {
	return (
		<div className="row">
			<div className="col s9 offset-s3">
				<h2>Superuser page</h2>
				<p>Superuser page can only be seen by the users whose userNames are listed in the file 'constant.js'</p>
			</div>
		</div>
	)
}

export default Superuser

