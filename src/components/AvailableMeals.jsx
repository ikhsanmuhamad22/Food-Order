import { useFetch } from '../hooks/useFetch';
import { fetchFood } from '../http';
import Error from './Error';
import Meal from './Meal';

export default function AvailableMeals({ onAddCart }) {
  const { data, isFetching, error } = useFetch(fetchFood, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <main id="meals">
      <Meal meals={data} onAddCart={onAddCart} />
    </main>
  );
}
