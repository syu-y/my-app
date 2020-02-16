import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledInputButton = styled(Button)`
  margin: 5px 10px 25px 10px;
  vertical-align: middle; 
`
const StyledInputText = styled(TextField)`
  margin: 5px 10px 25px 10px;
  /* vertical-align: bottom; */
  vertical-align: middle;
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

  const callSearchFunction = (event: any) => {
    console.log("search : " + searchValue);
    event.preventDefault();
    if(searchValue !== "") props.search(searchValue);
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
        color="primary"
        onClick={callSearchFunction}
        variant="contained"
        >
        Search
      </StyledInputButton>
    </form>
  );
};

export default Search;
