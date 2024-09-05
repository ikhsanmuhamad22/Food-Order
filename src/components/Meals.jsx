import useHtttp from '../hooks/useFetch';
import Error from './Error';
import MealItem from './MealItem';

const requestMethod = {};

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHtttp('http://localhost:3000/mealss', requestMethod, []);

  if (isLoading) {
    return <p className="center">fetching data...</p>;
  }

  if (error) {
    return (
      <Error
        title="Failed To Fetch Data"
        message={error || 'something went wrong'}
      />
    );
  }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
