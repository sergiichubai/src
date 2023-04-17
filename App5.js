import React from 'react';
import Header from './Header';
import Menu from './Menu';

function App5() {
    const siteName = 'React Practice';
    const version = '1.2.3';
    const company = 'PASv';
    const menu = [
        {title: 'Home', link:'/'},
        {title:'Products', link:'./products'}
    ]
return (
    <div>
        <h1>Hello</h1>
        <Menu menu = {menu}/>

        <Header
            siteName={siteName}
            version={version}
            company = {company}
            menu = {menu}
            />
    </div>
)

}
export default App5;