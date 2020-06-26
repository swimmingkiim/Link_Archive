import React from "react";
import Tag from "../src/basicComponent/Tag";
import Button from "../src/basicComponent/Button";
import Input from "../src/basicComponent/Input";
import Title from "../src/basicComponent/Title";
import Table from "../src/basicComponent/Table";
import Select from "../src/basicComponent/Select";

const App = () => {
  return (
    <div>
			<Title />
      <Button type="save" />
			<Tag tagString="HTML, CSS, JS" />
			<Input displayString="Title" uniqueId="newTitle"/>
			<Input displayString="Link Address" uniqueId="newLink"/>
			<Input displayString="Tags (add comma between tags)" uniqueId="newTags"/>
    	<Table postId={123} title="React Document" date="2020-06-26" link="https://github.com/swimmingkiim"/>
			<Select />
		</div>
  );
};

export default App;
