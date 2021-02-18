import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements';


export const Search = () =>  {

   const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    setSearch(search);
  };

    return (
      <SearchBar
        placeholder="search by author..."
        onChangeText={updateSearch}
        value={search}
        // lightTheme = 'android'
        round = 'android'
        platform ='android'
      />
    );
  }
