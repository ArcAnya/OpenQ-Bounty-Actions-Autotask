const { CREATE_NEW_BOUNTY } = require('./graphql');
const axios = require('axios');

const createNewBounty = async (baseUrl, openqApiSecret, address, bountyId, organizationId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios
				.post(
					`${baseUrl}/api`,
					{
						query: CREATE_NEW_BOUNTY,
						variables: { address, bountyId, organizationId },
					},
					{
						headers: {
							'Authorization': openqApiSecret,
						},
					}
				);
			return resolve(result.data);
		} catch (error) {
			return reject(error);
		}
	});
};

module.exports = createNewBounty;