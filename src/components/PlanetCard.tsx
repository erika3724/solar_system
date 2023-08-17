type Cards = {
  planetName: string;
  planetImage: string;
};

export default function PlanetCard({ planetName, planetImage }:Cards) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}
