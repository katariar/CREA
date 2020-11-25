import React  from 'react';
import CategoryButton from '../components/CategoryButton/CategoryButton';



const Home = () => {

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh'


        }}
        >
            <h1>Kategoriat</h1>

            <CategoryButton category="Kategoria1" />
            <CategoryButton category="Kategoria2" />
            <CategoryButton category="Kategoria3" />

        </div>
    )
}

export default Home
