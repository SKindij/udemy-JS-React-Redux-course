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

