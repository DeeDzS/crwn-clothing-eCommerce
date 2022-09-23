import CategoryContainer from './components/category-container/CategoryConatiner';

import './App.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Bonés',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jaquetas',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Tênis',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Mulheres',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Homens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryContainer key={id} title={title} bgImg={imageUrl} />
      ))}
    </div>
  );
};

export default App;
