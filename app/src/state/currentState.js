
const reducer = (state, action) => {
		switch (action.type) {
			case "currentMode":
				return {...state, currentMode: action.value, ...(action.id) && {updateId: action.id}};
			case "inputs":
				return {...state, inputs: {
						...state.inputs,
						[action.value.name]: action.value.string
					}
				};
			case "clear":
				return {
					currentMode: null,
					updateId: null,
					inputs: {
						title: "",
						link: "",
						tags: ""
					}
				};
			default:
				return state;
		};
};

const initialCurrentState = {
	currentMode: null,
	updateId: null,
	inputs: {
		title: "",
		link: "",
		tags: ""
	}
};

export default { reducer, initialCurrentState };
