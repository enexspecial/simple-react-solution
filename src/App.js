// Style Modules Import
import classess from './App.module.css';

// Product Data import
import ProductData from './ProductData';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classess.Topbar}>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.doorwaysva.org%2Fwp-content%2Fuploads%2F2019%2F06%2Famazon-logo.png&imgrefurl=https%3A%2F%2Fwww.doorwaysva.org%2Famazonhq-employeematch%2Famazon-logo-2%2F&tbnid=Wv18lweVWWl5lM&vet=12ahUKEwi74O3SnNLzAhWngM4BHXnPCbcQMygDegUIARDYAQ..i&docid=zZRL9lpX90EqdM&w=1800&h=1200&q=amazon%20logo&ved=2ahUKEwi74O3SnNLzAhWngM4BHXnPCbcQMygDegUIARDYAQ" alt="amazon-logo"/>
        </nav>
      </header>

      <div className={classess.MainContainer}>
        <div className={classess.ProductPreview}>
            <ProductPreview/>
        </div>

        <div className={classess.ProductData}>
          <ProductDetails/>
        </div> 
      </div>
    </div>
  );
}

export default App;
