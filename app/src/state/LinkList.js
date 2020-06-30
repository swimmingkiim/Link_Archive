import { useState } from "react";
import { createContainer } from "unstated-next";

const useLinkList = (initialState = {}) => {
	const [linkList, setLinkList] = useState(initialState);
	const [newId, setNewId] = useState(1);
	const [globalUpdateId, setGlobalUpdateId] = useState(null);
	const addLink = (newDataObject) => {
		setLinkList({
			...linkList, 
			[newId]: {	
				id: newId, 
				...newDataObject,
			}
		});
		setNewId(newId + 1);
	};
	const updateLink = (modifiedDataObject) => {
		setLinkList({
			...linkList,
			[globalUpdateId]: {
				...modifiedDataObject,
				id: globalUpdateId
			},
		});
	}
	const updateGlobalUpdateId = (id = null) => setGlobalUpdateId(id);
	const readLinkList = () => Object.values(linkList);
	const getLinkData = (id) => linkList[id];
	const deleteLink = (id) => {
			const {[id]: undefined, ...newLinkList} = linkList;
			setLinkList(newLinkList);
	}
	return { linkList,globalUpdateId, addLink, updateLink, updateGlobalUpdateId, readLinkList, getLinkData, deleteLink };
};

const LinkList = createContainer(useLinkList);

export default LinkList;
