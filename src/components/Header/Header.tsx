import * as React from 'react';
import styles from './header.css';
import SearchBlock from './SearchBlock/SearchBlock';
import ThreadTitle from './ThreadTitle/ThreadTitle';
import SortBlock from './SortBlock/SortBlock';
import { UserBlock } from './UserBlock';







export function Header() {
	return ( 
		<header className={styles.header}>
			<UserBlock />
			<SearchBlock/>
			<ThreadTitle/>
			<SortBlock/>
		</header> );
}


