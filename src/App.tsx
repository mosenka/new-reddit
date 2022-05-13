import * as React from 'react';
import './main.global.css'
import { Layout } from './components/Layout/Layout';
import  { Header }  from './components/Header/Header';
import  {Content}  from './components/Content/Content';
import  {CardsList}  from './components/CardsList/CardsList';


export function App() {
	return (<Layout>
			<Header />
			<Content>
				<CardsList/>
			</Content>	
		</Layout>
		
	)
}


