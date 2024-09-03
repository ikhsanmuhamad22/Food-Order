import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';

export default function MealItem({ meal }) {
  return (
    <li id={meal.id} className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </p>
        <p className="meal-item-description">{meal.description}</p>
        <div className="meal-item-actions">
          <Button>Add to cart</Button>
        </div>
      </article>
    </li>
  );
}
