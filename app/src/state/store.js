
let newId = 1;

const reducer = (state, action) => {
	switch (action.type) {
		case "create":
			const id = newId;
			newId++;
			return {...state, [id]: {...action.value, id: id}};
		case "read":
			return Object.values(state);
		case "update":
			return {...state, [action.value.id]: {...action.value}};
		case "delete":
			return {...state, [action.value.id]: undefined};
		default:
			return state;
	};
};

const initialStore = {};

export default { reducer, initialStore, newId };
