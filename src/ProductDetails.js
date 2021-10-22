import classess from './ProductDetails.module.css'
import ProductData from './ProductData'

const ProductDetails = (props) => {
    return(
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
    );
}

export default  ProductDetails;