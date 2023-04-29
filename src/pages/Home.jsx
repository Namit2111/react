import React from 'react';

import NavList from '../components/NavList';
import PizzaItem from '../components/PizzaBlock/PizzaItem';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [сategoryId, setCategoryId] = React.useState(1);
    const [sortType, setSortType] = React.useState(0);
    React.useEffect(() => {
        setIsLoading(true);
        if (сategoryId == 0) {
            fetch('https://62df058e976ae7460be6a145.mockapi.io/pizzas')
                .then((res) => {
                    return res.json();
                })
                .then((pizzas) => {
                    setPizzas(pizzas);
                    setIsLoading(false);
                });
        } else {
            fetch('https://62df058e976ae7460be6a145.mockapi.io/pizzas?category=' + сategoryId)
                .then((res) => {
                    return res.json();
                })
                .then((pizzas) => {
                    setPizzas(pizzas);
                    setIsLoading(false);
                });
        }
        window.scrollTo(0, 0);
    }, [сategoryId]);
    return (
        <div>
            <NavList value={сategoryId} onClickCategory={(id) => setCategoryId(id)} />

            <h3>All pizzas</h3>
            <section className="pizza">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : pizzas.map((obj) => (
                          <PizzaItem
                              key={obj.id}
                              title={obj.title}
                              price={obj.price}
                              img={obj.imageUrl}
                              sizes={obj.sizes}
                              types={obj.types}
                          />
                      ))}
            </section>
        </div>
    );
};

export default Home;
