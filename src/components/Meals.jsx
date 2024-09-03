import { useEffect, useState } from 'react';

export default function Meals() {
  const [loadMeals, setLoadMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        //...
      }

      const meals = await response.json();
      setLoadMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <li id={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
