&emsp; React пропонує Компоненти, які є простим способом повторного використання коду. Компонент інкапсулює безліч речей від контенту, стилів та до бізнес-логіки.

> _Припустимо, що ми працюємо над програмою для E-commerce. Ми отримуємо дані про товари через API та показуємо каталог товарів у вигляді карток._
> _Користувач бачить список усіх доступних товарів, а також може додати будь-який із них у кошик._
> > _У цьому випадку компонент React можна реалізувати таким чином:_
> > ```javascript
> >  import React, { Component } from "react";
> >  
> >  class ProductList extends Component {
> >    state = {
> >      products: []
> >    };
> >  
> >    componentDidMount() {
> >      getProducts().then(products => {
> >        this.setState({ products });
> >      });
> >    }
> >  
> >    render() {
> >      return (
> >        <ul>
> >          {this.state.products.map( product => (
> >            <li>
> >              <span>{product.name}</span>
> >              <a href="#">Add to Cart</a>
> >            </li> )
> >          )}
> >         </ul>
> >      );
> >    }
> >  };
> >  export { ProductList };
> > ```

> _Для адмінів існує своя панель адміністратора, де вони можуть додавати чи видаляти товари._
> > ```javascript
> >  import React, { Component } from "react";
> >  
> >  class ProductTable extends Component {
> >    state = {
> >      products: []
> >    };
> >  
> >    componentDidMount() {
> >      getProducts().then(products => {
> >        this.setState({ products });
> >      });
> >    }
> >  
> >    handleDelete = currentProduct => {
> >      const remainingProducts = this.state.products.filter(
> >        product => product.id !== currentProduct.id
> >      );
> >      deleteProducts(currentProduct.id).then(() => {
> >        this.setState({
> >          products: remainingProducts
> >        });
> >      });
> >    };
> >  
> >    render() {
> >      return (
> >        <table>
> >          <thead>
> >            <tr>
> >              <th>Product Name</th>
> >              <th>Actions</th>
> >            </tr>
> >          </thead>
> >          <tbody>
> >            {this.state.products.map( product => (
> >              <tr key={product.id}>
> >                <td>{product.name}</td>
> >                <td>
> >                  <button onClick={() => this.handleDelete(product)}>Delete</button>
> >                </td> )
> >              </tr>
> >            )}
> >          </tbody>
> >        </table>
> >      );
> >    }
> >  };  
> >  export { ProductTable };  
> > ```

&emsp; Отримання та відображення даних – це дві окремі задачі. Набагато краще, коли один компонент має єдину відповідальність.

> _Переробимо вищезгадані клсові компоненти у функціонаальні:_
> > ```javascript
> >  import React from "react";
> >  // отримуватиме дані товарів як властивості
> >  const ProductList = ( { products } ) => {
> >    return (
> >      <ul>
> >        {products.map(product => (
> >          <li key={product.id}>
> >            <span>{product.name}</span>
> >            <a href="#">Add to Cart</a>
> >          </li>
> >        ))}
> >      </ul>
> >    );
> >  };
> >  export { ProductList };
> > ```

> _Далі створимо компонент під назвою ProductsData, який запитує дані про товари через API._
> > ```javascript
> >  import React, { Component } from "react";
> >  
> >  class ProductData extends Component {
> >    state = {
> >      products: []
> >    };
> >  
> >    componentDidMount() {
> >      getProducts().then(products => {
> >        this.setState({
> >          products
> >        });
> >      });
> >    }
> >  
> >    render() {
> >      return 'what should we return here?';
> >      // в одному місці ми вкажемо йому відрендерити ProductList, а в адміністративній панелі – ProductTable
> >    }
> >  }
> >  export { ProductData };
> > ```

&emsp; Тут у гру вступають **render props** та **HOC** (компоненти вищого порядку). Вони є лише способами, за допомогою яких компонент дізнається, що йому потрібно відрендерити. Це збільшує можливість повторного використання коду.

...повний текст у статті https://medium.com/nuances-of-programming/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-react-render-props-%D0%B8-hoc-263f498ac841

- - -

## Чи зможуть React-хуки замінити компоненти вищого ладу (HOC)?

стаття: https://css-live.ru/articles/smogut-li-react-xuki-zamenit-komponenty-vysshego-poryadka-hoc.html




