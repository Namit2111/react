import React from 'react';

function PizzaItem({ title, price, img, sizes, types }) {
    const typeNames = ['thin', 'traditional'];
    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);
    const onClickType = (i) => {
        setActiveType(i);
    };
    const onClickSize = (i) => {
        setActiveSize(i);
    };
    return (
        <div className="pizza__item">
            <img src={img} alt={title} className="pizza__img" />
            <p className="pizza__header">{title}</p>
            <div className="kind-section">
                <div className="kind">
                    {types.map((typeId, index) => (
                        <div
                            key={typeId}
                            onClick={() => onClickType(index)}
                            className={activeType === index ? 'kind__active' : ''}>
                            {typeNames[typeId]}
                        </div>
                    ))}
                </div>
                <div className="size">
                    {sizes.map((sizeId, index) => (
                        <div
                            key={sizeId}
                            onClick={() => onClickSize(index)}
                            className={activeSize === index ? 'kind__active' : ''}>
                            {sizeId} cm.
                        </div>
                    ))}
                </div>
            </div>
            <div className="price-section">
                <p className="pizza-price">from {price} $</p>
                <button className="btn active-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#FE5F1E"
                        />
                    </svg>
                    <p>Add</p>
                    <p className="amount">1</p>
                </button>
            </div>
        </div>
    );
}
export default PizzaItem;
