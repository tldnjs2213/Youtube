import React, { useRef } from 'react';
import './searchHeader.css';

const SearchHeader = ({onSearch}) => {
	const inputRef = useRef();
	const handleSearch = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};

	const onClick = () => {
		handleSearch();
	};

	const onKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<header className="header">
			<div className="logo">
				<img className="img" src="/images/logo.png" alt="logo" />
				<h1 className="logoTitle">Youtube</h1>
			</div>
			<input ref={inputRef} className="input" type="search" placeholder="Search..." onKeyPress={onKeyPress} />
			<button className="button" type="submit" onClick={onClick}>
				<img className="buttonImg" src="/images/search.png" alt="search" />
			</button>
		</header>
	);
};

export default SearchHeader;
