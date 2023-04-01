# Complete JavaScript + React Course PI


|    section   |                |                     |                 |             |            |
|--------------|----------------|---------------------|-----------------|-------------|------------|
| food site    | XMLHttpRequest | fetch('server.php') | Server(db.json) | Web Storage |   Babel    |
|              |                |                     |                 |             |            |
| advanced-JS  |  local server  |     JSON & AJAX     | Promise & Fetch |   webpack   |   Error    |
|              |                |                     |                 |             |            |
|    react     |       JSX      |         SASS        |  props          |             |            |

### Use ARIA Effectively with HTML5 

ARIA roles are added to HTML markup like an attribute. They define the type of element and suggest what purpose it serves. 
> ```html
> <header role="banner">
> <div role="contentinfo">
>    This website was built by SKj.
> </div>
> <a href="aria.html" role="presentation">
>  <img src="aria-thumbnail.jpg" role="presentation" alt="Use ARIA effectively">
> </a>
>```

There are two types of ``aria-`` attributes:
+ value of states are bound to change as a result of user interaction;
  - ```html
    <input type="radio" aria-checked="true">
    ```
+ value of properties is less likely to change;
  - ```html
    <label id="address">Address</label>
    <input type="text" aria-labelledby="address">
    ```  
  - ```html  
    <figure aria-labelledby="operahouse_1">
      <img src="operahousesteps.jpg" alt="The Sydney Opera House">
      <figcaption id="operahouse_1">We saw the opera <cite>Barber of Seville</cite> here!</figcaption>
    </figure>  
    ```  
  
**Use Semantic HTML Elements Where Possible!**
> ```html
> <p>In <cite>The Love Song of J. Alfred Prufock</cite> by T.S. Eliot, 
>   the clinical imagery of the line <q>Like a patient etherized upon a table</q>
>   suggests themes of loneliness.</p>
>```  
  
 Note that the ``alt`` attribute does not reflect the same purpose as the ``figcaption`` element – the purpose of ``alt`` is to provide alternative text for an image, while ``figcaption`` can be a relevant caption for a figure.  
> ```html
>  <img src="bobby.jpg" alt="My dog Bobby playing fetch in the park">
>  <figcaption>Isn’t Bobby cute?</figcaption>  
> ```
  
  
