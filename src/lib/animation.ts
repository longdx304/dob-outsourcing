export const fadeInUp = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};

export const fadeInRight = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};
export const fadeInLeft = {
	hidden: {
		opacity: 0,
		x: 200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
};

export const flipInY = {
	hidden: {
		opacity: 0,
		scaleY: 0.5,
	},
	visible: {
		opacity: 1,
		scaleY: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};
export const flipInX = {
	hidden: {
		opacity: 0,
		scaleX: -1,
	},
	visible: {
		opacity: 1,
		scaleX: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};

export const fadeInUpLoop = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			// duration: 0.25,
		},
	},
};
