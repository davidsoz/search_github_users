import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Input from "./Components/Input";
import UsersList from "./Components/UsersList";
import Wrapper from "./Components/Wrapper";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

 useEffect(() => {
	 if(!inputValue) return;
	 fetch(`https://api.github.com/search/users?q=${inputValue}`)
	 	.then(res => res.json()
		.then(data => {
			setUsers(data.items);
		}))
 }, [inputValue])

  return (
    <Fragment>
		<Wrapper>
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			{
				users && <UsersList users={users}/>
			}
		</Wrapper>
    </Fragment>
  );
}

export default App;
