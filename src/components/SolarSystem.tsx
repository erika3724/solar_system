import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headLine="Planetas" />
      <div>
        {
            planets.map((a) => (
              <PlanetCard planetName={ a.name } planetImage={ a.image } key={ a.name } />
            ))
        }
      </div>
    </div>
  );
}
