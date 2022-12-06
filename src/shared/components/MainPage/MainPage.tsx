import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveToken } from '../../store/reducer';
import { CardsList } from '../CardsList';
import { Content } from '../Content/Content';
import { Header } from '../Header/Header';
import { Layout } from '../Layout/Layout';
import styles from './mainpage.css';

export function MainPage() {

  const dispatch = useDispatch();
  const [token, setToken] = useState<string>();

  useEffect(() => {
    dispatch(saveToken());
  }, [])

  return (<Layout>
    <Header />
    <Content>
      <CardsList />
      
    </Content>
    
  </Layout>);
}
