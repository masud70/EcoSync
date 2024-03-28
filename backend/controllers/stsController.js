const db = require("../models");

module.exports = {
	getAvailabeVehicle: async ({ stsId }) => {
		try {
			const sts = await db.Sts.findOne({
				where: { id: stsId },
				include: db.Vehicle,
			});

			return {
				success: true,
				vehicles: sts.Vehicles,
			};
		} catch (error) {
			return {
				success: false,
				message: error.message,
			};
		}
	},

	getAllSts: async () => {
		try {
			const sts = await db.Sts.findAll();

			return {
				success: true,
				sts: sts,
			};
		} catch (error) {
			return {
				success: false,
				message: error.message,
			};
		}
	},

    getAllLandfill: async () => {
		try {
			const sts = await db.Landfill.findAll();

			return {
				success: true,
				sts: sts,
			};
		} catch (error) {
			return {
				success: false,
				message: error.message,
			};
		}
	},
};
