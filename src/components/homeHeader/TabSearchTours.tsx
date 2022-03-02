import React from 'react';

import {
  StyledText,
  StyledSearchTourItems,
  StyledSearchTourItem,
  StyledSearchTitle,
  StyledSearchAction,
  SearchInput,
  SearchSelect,
  IconLocation,
  IconSearch,
  IconFlag,
  IconDepatureTime,
  IconGuest,
  StyledSearchTabPane,
} from '@components';

export const TabSearchTours = () => {
  return (
    <StyledSearchTabPane>
      <StyledSearchTitle>
        <StyledText
          fontSize={'24px'}
          fontWeight={'normal'}
          color={'#1C1C1E'}
          lineHeight={'120%'}
        >
          Discover beautiful Vietnam
        </StyledText>
      </StyledSearchTitle>
      <StyledSearchTourItems>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconLocation />
          </div>
          <SearchInput
            placeholder={'Quatlam Beach, Giaothuy, Namdinh'}
          />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconDepatureTime />
          </div>

          <SearchInput placeholder={'Departure time'} />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconFlag />
          </div>
          <SearchSelect defaultValue={'Type of tour'} />
        </StyledSearchTourItem>
        <StyledSearchTourItem>
          <div className='tab-search-icon'>
            <IconGuest />
          </div>

          <SearchSelect defaultValue={'Number of guests'} />
        </StyledSearchTourItem>
      </StyledSearchTourItems>
      <StyledSearchAction>
        <button type='submit' className='submitSearch'>
          <div className='tab-search-icon'>
            <IconSearch />
          </div>
          <StyledText>Search</StyledText>
        </button>
      </StyledSearchAction>
    </StyledSearchTabPane>
  );
};
