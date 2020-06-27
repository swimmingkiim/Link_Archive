import React from "react";
//import Tag from "../src/basicComponent/Tag";
//import Button from "../src/basicComponent/Button";
//import Input from "../src/basicComponent/Input";
import Title from "../src/basicComponent/Title";
//import Table from "../src/basicComponent/Table";
//import Select from "../src/basicComponent/Select";
//import ListItem from "../src/composedComponent/ListItem";
//import SearchBar from "../src/composedComponent/SearchBar";
import MainList from "../src/page/MainList";

const App = () => {
	
	const sampleData = [
		{
			id: 1,
			title: "my intro website with github",
			link: "https://github.com/swimmingkiim",
			tags: "HTML, CSS, JS, React, create-react-app",
			date: "2020-06-27"
		},
		{
			id: 12345,
			title: "my family photo website",
			link: "httPs://google.com",
			tags: "Go, google, search, FANG",
			date: "1992-08-08"
		},
		{
			id: 1004,
			title: "angel",
			link: "http://angel.com",
			tags: "GOD, angel, Jesus, believe",
			date: "2020-06-27"
		},
	];

  return (
    <div>
			<Title />
			<MainList dataList={sampleData} />
		</div>
  );
};

export default App;
