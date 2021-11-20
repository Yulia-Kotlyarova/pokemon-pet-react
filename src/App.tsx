import {CardFull} from './components/Cards/CardFull';
import CardList from './pages/CardList';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header"/>
        <CardFull/>
        <CardList/>
    </div>
  );
}
