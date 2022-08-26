import React, { useEffect, useState } from 'react';
import './index.scss';
import Collection from './Collection';
import Skeleton from './Skeleton';
import DB from "./assets/data.json"



function App() {

  const [collections, setCollections] = useState([])
  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    setCollections(DB.collections);
    setCategories(DB.categories);
    setCategoryId(DB.categories[0].id);
    setIsLoading(false);
  }, [])

  const OnChangeCategory = (id) => {
    setCategoryId(id)
  }
  
  return (
    <div className="App">
      <h1>Meine Fotosammlung</h1>
     
     {
      isLoading ? ( <div className='content'><Skeleton/>  <Skeleton/>  <Skeleton/></div>) : (
     <div>
      <div className="top">
        <ul className="tags">

          {
            categories.map((obj, index) => (
              <li key={index} onClick={() => OnChangeCategory(obj.id)} className={categoryId === obj.id ? 'active' : ''} >{obj.name}</li>
            ))
          }
        </ul>
        <input className="search-input" value={searchValue} placeholder="Suche..." onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className="content">

        {
          
          collections.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())
            ).filter(obj => {
              
              if (categoryId > 0 && obj.category === categoryId){
                return true;
              }else if(categoryId === 0){
                return true;
              }

              return false;
            }).map((obj, index) => (
            <Collection
              key={index}
              name={obj.name}
              images={obj.photos}
              />
          ))
          
        }
        
      </div>
      </div>
      )
    }
      <ul className="pagination">

        {
          [...Array(5)].map((_, i) => <li onClick={() => setPage(i+1)} key={i} className={page === i+1 ? 'active' : '' }>{i+1}</li>)
        }
        
      </ul>
    </div>
  );
}

export default App;
