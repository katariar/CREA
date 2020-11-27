import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';

const Home = () => {

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'


        }}
        >
            <h1>Kategoriat</h1>
       
            <CategoryButton category="Kategoria1" />
            <CategoryButton category="Kategoria2" />
            <CategoryButton category="Kategoria3" />
            <CategoryButton category="Kategoria4" />
            <CategoryButton category="Kategoria5" />
            <CategoryButton category="Kategoria6" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    )
}

export default Home
