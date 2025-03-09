import "./App.css";
import teamData from "./CollegeBasketballTeams.json";


function Heading() {
  return (
    <>
      <h1>March Madness</h1>
      <h3>
        Welcome to our page! Here, you can find information about all the
        basketball teams in the NCAA.
      </h3>
    </>
  );
}

function Team({
  school,
  name,
  city,
  state
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <img />
      <h2>{school}</h2>
      <h4>Mascot: {name}</h4>
      <h4>Location: {city}, {state}</h4>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamData.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;
