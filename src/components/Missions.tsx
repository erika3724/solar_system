import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default function Missions() {
  return (
    <div data-testid="missions">
      <Title headLine="Missions" />
      <div>
        {
            missions.map((a) => (
              <MissionCard
                key={ a.name }
                name={ a.name }
                year={ a.year }
                country={ a.country }
                destination={ a.destination }
              />
            ))
        }
      </div>
    </div>
  );
}
