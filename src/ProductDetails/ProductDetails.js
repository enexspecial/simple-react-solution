import classess from './ProductDetails.module.css'


const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos)=>{
        const classArr = [classess.ProductImage];
        if(pos === props.currentPreviewImagePos){
            classArr.push(classess.SelectedProductImage)
        }
        return(
            <img 
                key={pos} 
                className={classArr.join(' ')}  
                src={item.imageUrl} alt={item.styleName}
                onClick={()=>props.onColorOptionClick(pos)}
            />
        );
    });
    const featureList = props.data.featureList.map((item, pos)=>{
        const buttArr = [classess.FeatureItem];
        if(pos === props.currentSelectedFeature){
            buttArr.push(classess.SelectedFeatureItem)
        }
        return (
            <button 
            key={pos} 
            className={buttArr.join(' ')}
            onClick={()=>props.onFeatureItemClick(pos)}
            >{item}</button>
        );
    })
    return(
        <div className={classess.ProductData}>
            <h1 className={classess.ProductTitle}>{props.data.title}</h1>
            <p className={classess.ProductDescription}> {props.data.description} </p>
            <h3 className={classess.SectionHeading}>Select Colour</h3>
            <div>
                {colorOptions}
            </div>

            <h3 className={classess.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>

            <button className={classess.PrimaryButton}>Buy Now</button>

      </div>
    );
}

export default  ProductDetails;