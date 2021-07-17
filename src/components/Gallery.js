import './data1/images/mean.jpg';
import './data1/images/mern.jpg';
import './data1/images/java.png';
import './engine1/style.css';

const Gallery = () =>{
  return(
    <div>
      
      <head>
      
        <link rel="stylesheet" type="text/css" href="./engine1/style.css" />
        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
       
      </head>
        
      <body style={{"backgroundColor":"red","margin":"auto"}}>
        <div id="wowslider-container1">
        <div className="ws_images"><ul>
          <li><img src="./data1/tooltips/mean.png" alt="mean" title="mean" id="wows1_0"/></li>
          <li><img src="./data1/images/mern.jpg" alt="mern" title="mern" id="wows1_1"/></li>
          <li><img src="./data1/images/java.png" alt="java" title="java" id="wows1_2"/></li>
        </ul></div>
       <div className="ws_shadow"></div>
        </div>	
        <script type="text/javascript" src="./engine1/wowslider.js"></script>
        <script type="text/javascript" src="./engine1/script.js"></script>
      

      </body>
  
    </div>
  )
}
export default Gallery;