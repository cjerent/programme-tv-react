import "./App.css";
import Section from "./components/Section";
import programme from "./programme.json";

function App() {
  return (
    <div className="App">
      {programme.map((item, index) => {
        const time = item.time;
        const title = item.title;
        const type = item.type;
        const duration = item.duration;
        const image = item.image;
        const direct = item.direct;
        const isUnseen = item.isUnseen;

        return (
          <Section
            key={index}
            title={title}
            type={type}
            time={time}
            image={image}
            duration={duration}
            direct={direct}
            isUnseen={isUnseen}
          />
        );
      })}
    </div>
  );
}

export default App;
