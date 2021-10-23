import classess from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' +  new Date().getMinutes();

    return (
          <div className={classess.ProductPreview}>
                <img src={props.currentPreviewImage} alt="product-preview"/>

                {
                    props.currentSelectedFeature === 1 ?      
                 <div className={classess.HeartBeatSection}>
                    <i className="fas fa-heartbeat"></i>
                    <p>78</p>
                 </div> 

                 :

                 <div className={classess.TimeSection}>
                 <p>{`${currentHours}:${currentMinutes}`}</p>
                 </div>
                 
                }  
        </div>
    );

}


export default ProductPreview;