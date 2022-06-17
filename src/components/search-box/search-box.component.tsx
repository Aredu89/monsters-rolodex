import { ChangeEvent } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox = ({
  placeholder,
  handleChange
}: SearchBoxProps) => (
  <input
    className="search"
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
    />
);
