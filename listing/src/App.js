import PropTypes from 'prop-types'
import './App.css';
import Listing from './components/Listing';
import data from './data/etsy.json'

function App() {
  return (
    <div className="App">
      <Listing items = {data} />
    </div>
  );
}

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

App.defaultProps = {
  items: []
}

export default App;
