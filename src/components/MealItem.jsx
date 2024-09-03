export default function MealItem({ meals, onAddCart, isLoading, loadingText }) {
  return (
    <>
      {meals.map((meal) => (
        <li id={meal.id} className="meal-item">
          <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
              <button onClick={() => onAddCart(meal)} className="button">
                Add to cart
              </button>
            </div>
          </article>
        </li>
      ))}
    </>
  );
}
