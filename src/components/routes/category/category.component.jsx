import './category.styles.scss';
import { useContext ,useState,useEffect, Fragment} from 'react';
import ProductCard from '../../product-card/product-card.component';
import { CategoriesContext } from '../../../context/Categories.context';
import { useParams } from 'react-router-dom';

const Category=()=>{

    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts]=useState(categoriesMap[category]);
    
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])


return(
    <Fragment>
         <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
 <div className='category-container'>
       
        {products && 
        products.map((product)=><ProductCard key={product.id} product={product}/>)

        }
    </div>
    </Fragment>
   
)


}

export default Category;