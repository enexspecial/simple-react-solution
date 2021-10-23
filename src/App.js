import {Component} from 'react';

// Style Modules Import
import classess from './App.module.css';

// components
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';

// Data From ProductData
import ProductData from './Utils/ProductData';



class App extends Component{

  state = {
    ProductData: ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  render(){

    return (
      <div className="App">
        <TopBar/>      
  
        <div className={classess.MainContainer}>
          <div className={classess.ProductPreview}>
              <ProductPreview 
                currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                currentSelectedFeature={this.state.currentSelectedFeature}
               
                />
          </div>
  
          <div className={classess.ProductData}>
            <ProductDetails data={this.state.ProductData}
             onColorOptionClick={this.onColorOptionClick}
             currentPreviewImagePos={this.state.currentPreviewImagePos}
             onFeatureItemClick={this.onFeatureItemClick}
             currentSelectedFeature={this.state.currentSelectedFeature}
             />
          </div> 
        </div>
      </div>
    );
    
  }

}



export default App;
