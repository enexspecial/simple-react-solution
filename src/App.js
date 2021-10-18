// Style Modules Import
import classess from './App.module.css';

// Product Data import
import ProductData from './ProductData';

function App() {
  const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' +  new Date().getMinutes();

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classess.Topbar}>
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.doorwaysva.org%2Fwp-content%2Fuploads%2F2019%2F06%2Famazon-logo.png&imgrefurl=https%3A%2F%2Fwww.doorwaysva.org%2Famazonhq-employeematch%2Famazon-logo-2%2F&tbnid=Wv18lweVWWl5lM&vet=12ahUKEwi74O3SnNLzAhWngM4BHXnPCbcQMygDegUIARDYAQ..i&docid=zZRL9lpX90EqdM&w=1800&h=1200&q=amazon%20logo&ved=2ahUKEwi74O3SnNLzAhWngM4BHXnPCbcQMygDegUIARDYAQ" alt="amazon-logo"/>
        </nav>
      </header>

      <div className={classess.MainContainer}>
        <div className={classess.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="product-preview"/>

            {/* <div className={classess.TimeSection}>
              <p>{`${currentHours}:${currentMinutes}`}</p>
            </div> */}

             <div className={classess.HeartBeatSection}>
                <i class="fas fa-heartbeat"></i>
                <p>78</p>
            </div>
        </div>

        <div className={classess.ProductData}>
          <h1 className={classess.ProductTitle}>{ProductData.title}</h1>
          <p className={classess.ProductDescription}> {ProductData.description} </p>
          <h3 className={classess.SectionHeading}>Select Colour</h3>
          <div>
              <img className={[classess.ProductImage, classess.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red Colour Watch"/>
              <img className={classess.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colour Watch"/>
              <img className={classess.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colour Watch"/>
              <img className={classess.ProductImage} src="https://imgur.com/iOeUBV7.png" alt="Black Colour Watch"/>
          </div>

          <h3 className={classess.SectionHeading}>Features</h3>
          <div>
            <button className={[classess.FeatureItem, classess.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classess.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classess.PrimaryButton}>Buy Now</button>

        </div>
      </div>
    </div>
  );
}

export default App;
