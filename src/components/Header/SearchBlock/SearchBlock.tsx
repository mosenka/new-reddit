import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../context/userContext';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';




function SearchBlock() {
	const {iconImg, name} = useContext(userContext);


	return (<div className={styles.searchBlock}>
		<UserBlock avatarSrc={iconImg} username={name}/>
	</div> );
}

export default SearchBlock;
