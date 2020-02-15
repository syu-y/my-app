import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const StyledInputButton = styled.input`
  padding: 6px 10px;
  margin: 5px 10px 25px 10px;
  color: #fff;
  background-color: #3f51b5;
  font-size: 1.0rem;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  letter-spacing: 0.05em;
`
const StyledInputText = styled(TextField)`
  margin: 5px 10px 25px 10px;
  vertical-align: bottom;
`

type Props = {
  search: (searchValue: string) => void
};

const Search: React.FC<Props> = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const resetInputValue = () => {
    setSearchValue("");
  }

  const callSearchFunction = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("search : " + searchValue);
    event.preventDefault();
    props.search(searchValue);
    // resetInputValue();
  }

  return (
    <form className="search">
      <StyledInputText
        id="standard-basic"
        label="Movie's Title"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <StyledInputButton
        type="submit"
        value="Search"
        onClick={callSearchFunction}
      />
    </form>
  );
};

export default Search;
