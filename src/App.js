import SimpleCalculator from './Components/SimpleCalculator';
import styles from './styles/App.module.scss'; 

const Navbar = () => { 
  
  
  return (<nav>
  <h1>Advanced Calculator</h1>
</nav>
);
}


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <SimpleCalculator />
    </div>
  );
}

export default App;
