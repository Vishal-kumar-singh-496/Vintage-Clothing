
import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../context/Categories.context"; 
import CategoryPreView from "../../category-preview/category-preview.component";
import  './categories-preview.styles.scss';


const CategoriesPreview = () => {
    const {categoriesMap}=useContext(CategoriesContext)

    return (
        <div className="category-preview-container">
        {Object.keys(categoriesMap).map((title)=>{
            const products=categoriesMap[title];
            return <CategoryPreView key={title} title={title} products={products}/>

           
})
        
        }
        
        </div>
        
    );


}

export default CategoriesPreview;