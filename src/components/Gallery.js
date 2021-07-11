import './Gallery.css';
const Gallery = () => {
    return(
        <body>
            <div id="wowslider-container1">
            <div class="ws_images"><ul>
                <li><a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)"><img src="data1/images/mean.jpg" alt="bootstrap slider" title="mean" id="wows1_1"/></a></li>
                <li><a href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop"><img src="data1/images/mern.jpg" alt="mern" title="mern" id="wows1_2"/></a></li>
                <li><a href="https://en.wikipedia.org/wiki/Java_(programming_language)"><img src="data1/images/java.png" alt="Java" title="Java" id="wows1_0"/></a></li>
            </ul></div>
            <div class="ws_bullets"><div>
                <a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)" title="mean"><span><img src="data1/tooltips/mean.jpg" alt="mean"/>2</span></a>
                <a href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop" title="mern"><span><img src="data1/tooltips/mern.jpg" alt="mern"/>3</span></a>
                <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" title="Java"><span><img src="data1/tooltips/java.png" alt="Java"/>1</span></a>
            </div></div><div className="wsscript"><a href="index.html">html slideshow</a> by WOWSlider.com v9.0</div>
            <div className="ws_shadow"></div>
            </div>	
            <script type="text/javascript" src="engine1/wowslider.js"></script>
            <script type="text/javascript" src="engine1/script.js"></script>
	

</body>
    )

}

export default Gallery;